"use server";

export default async function CreateWithDrawApi(
  amount: string,
  userId: string
) {
  const requestBody = {
    query: `
            mutation {
              createWithdraw(amount: ${amount}, userId: "${userId}"){
                userId
                withdrawDate
                reference
                withdrawalAmount
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
      }
    );

    const data = await response.json();
    return data.data.createWithdraw;
  } catch (err) {
    console.log(`Error creating deposit: ${err}`);
  }
}
