"use server";
import { redirect } from "next/navigation";

export default async function registerApi(email: any, password: any) {
  const requestBody = {
    query: `
    mutation {
      register(
        registerInput: { email: "${email}", password: "${password}" }
      ) {
        user { 	
          email
          confirmed
        }
        error {
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
        (await process.env.NODE_ENV) === "production"
          ? process.env.backend_server
          : process.env.dev_server
      }`,
      {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    if (data.data.register.user !== null) {
      return redirect("/checkEmail");
    }
  } catch (error) {
    throw error;
  }
}
