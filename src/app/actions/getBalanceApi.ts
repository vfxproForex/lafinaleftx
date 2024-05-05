"use server";

export default async function getUserBalanceApi(userId: sting) {
  const requestBody = {
    query: `
         query {
            getBalance(userId: "${userId}")
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

    return data.data.getBalance;
  } catch (err) {
    throw err;
  }
}
