"use server";

export default async function registerApi(email: any, password: any) {
  const query = `
mutation {
  register(
    registerInput: { email: "${email}", password: "${password}" }
  ) {
    user { 	
      email
      confirmed
    }
    error {
      message
      code
    }
  }
}
`;
  await fetch("http://localhost:3000/graphql", {
    method: "POST",
    body: JSON.stringify({ query: query }),
    headers: {
      "Content-Type": "application/json",
    },
  })
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
}