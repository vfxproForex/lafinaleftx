"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function signApi(email: string, password: string) {
  const requestBody = {
    query: `mutation {
  login(
    loginInput: { email: "${email}", password: "${password}" }
  ) {
            token
            error{
              message
              code
              
            }
  }
}

`,
  };

  try {
    const response = await fetch(
      `${
        process.env.NODE_ENV === "production"
          ? process.env.backend_server
          : process.env.dev_server
      }`,
      {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );

    const data = await response.json();

    if (data.data.login.token) {
      await cookies().set({
        value: data.data.login.token,
        name: "qid",
        path: "/",
      });
      //get user details
      return redirect("/account/");
    } else if (data.data.login.error) {
      throw new Error(data.data.login.error.message);
    } else {
      throw new Error("Unknown error occurred.");
    }
  } catch (error) {
    throw error;
  }
}
