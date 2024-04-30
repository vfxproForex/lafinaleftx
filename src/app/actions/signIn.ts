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
    cookies().set({
      value: data.data.login.token,
      name: "qid",
      path: "/",
    });
    //get user details
    redirect("/account");
  } else {
    throw new Error("Please check email and password if correct");
  }
}
