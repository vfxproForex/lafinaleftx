"use client";
import { createAccountDetailsAction } from "@/utlis/accountDetails";
import store from "@/utlis/store";

export const getAccountDetailsApi = async (cookie: string) => {
  const requestBody = {
    query: `
        query {
            userDetails(userId: "${cookie}") {
            firstname
            middleName
            lastname
            contactNumber
            bankName
            accountName
            accountNumber
            accountType
            nameOnCard
            cardNumber
            expiryDate
            cvv
	        userId
            currentBalance
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
    }
  );

  const data = await response.json();

  console.log("running...");
  console.log(data);

  return store.dispatch(createAccountDetailsAction(data.data.userDetails));
};
