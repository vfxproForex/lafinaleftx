"use client";
import Cookies from "js-cookie";

export default async function CreateWithDrawApi(amount: string) {
  const cookie = Cookies.get("qid");

  const requestBody = {
    query: `
    mutation {
        createWithdraw(amount: "${amount}", userId: "${cookie}"){
            userId
            withdrawDate
            reference
            withdrawalAmount
  }
}
`,
  };

  const response = await fetch("http://localhost:3000", {
    method: "POST",
    headers: {
      "Context-Tye": "application/json",
    },
    body: JSON.stringify(requestBody),
  });

  const data = response.json();

  if (!response.ok) {
    return null;
  } else {
    //data
  }
}
