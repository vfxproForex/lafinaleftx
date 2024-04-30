"use server";

export default async function confirmAccountApi(redisId: string) {
  const query = {
    query: `mutation {
  confirmEmail(id: "${redisId}")
}`,
  };

  const response = await fetch(
    `${
      process.env.NODE_ENV === "production"
        ? process.env.backend_server
        : process.env.dev_server
    }`,
    {
      method: "POST",
      body: JSON.stringify(query),
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => {
      if (res.status !== 200 && res.status !== 201) {
        console.log(res.json());
        return console.log("Try Logging in..");
      }

      res.json();
    })
    .catch((err) => {
      console.log(err);
    });

  return await response;
}
