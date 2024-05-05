"use server";

export default async function ConfirmDepositApi(
  userId: string,
  amount: string
) {
  const requestBody = await {
    query: `
            mutation {
                    confirmDeposit(amount: ${amount}, userId: "${userId}"){
    status
    deposit {
      userId
      depositDate
      refernce
      depositAmount
      depositStatus
      status
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

    return data.data.confirmDeposit;
  } catch (err) {
    console.log(`Error backend: ${err}`);
    return err;
  }
}
