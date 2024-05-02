import Cookies from "js-cookie";

export default async function CreateWithDrawApi(amount: string) {
  const cookie = Cookies.get("qid");

  const requestBody = {
    query: `
            mutation {
              createWithdraw(amount: ${amount}, userId: "${cookie}"){
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
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      }
    );

    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(`Error creating deposit: ${err}`);
  }
}
