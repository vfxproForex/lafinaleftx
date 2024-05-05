"use server";
import Cookies from "js-cookie";

export default async function ConfirmDepositApi(
  userId: string,
  amount: string
) {
  const requestBody = await {
    query: `
            mutation {
                    confirmDeposit(amount: ${amount}, userId: "${userId}")
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

    if (data.data.confirmDeposit.status) {
      console.log(`From SSR: ${data.data.confirmDeposit.deposit}`);
      return data;
      //return redirect("/account/");
    } else if (data.data.login.error) {
      throw new Error(data.data.login.error.message);
    } else {
      throw new Error("Unknown error occurred.");
    }
  } catch (err) {
    console.log(`Error backend: ${err}`);
    return err;
  }
}
