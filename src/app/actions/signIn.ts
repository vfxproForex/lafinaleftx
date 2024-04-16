"use server";

import store from "@/utlis/store";
import { addTokenAction } from "@/utlis/token";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createAccountDetailsAction } from "@/utlis/accountDetails";

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

  const response = await fetch("http://localhost:3000/graphql", {
    method: "POST",
    body: JSON.stringify(requestBody),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

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
