"use server";

export default async function getDepositsApi(userId: string) {
  const requestBody = {
    query: `
            query {
                deposits(id: "${userId}"){
                    userId
                    status
                    depositDate
                    refernce
                    depositAmount
                    depositStatus
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
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      }
    );

    const data = await response.json();

    return data.data.deposits;
  } catch (err) {
    throw err;
  }
}
