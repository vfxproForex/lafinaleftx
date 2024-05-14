"use server";

export default async function getWithdrawalsApi(userId: string) {
  const requestBody = {
    query: `query {
  withdraws(id: "${userId}"){
    userId
    withdrawDate
    reference
    withdrawalAmount
  }
}`,
  };

  try {
    const response = await fetch(
      `${
        process.env.NODE_ENV === "production"
          ? process.env.backend_server
          : process.env.dev_server
      }`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      }
    );

    const data = await response.json();

    return data.data.withdraws;
  } catch (err) {
    throw err;
  }
}
