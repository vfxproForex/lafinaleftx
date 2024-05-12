"use server";

export async function authenticate(
  clientId: string,
  clientSecret: string,
  merchantId: string
) {
  let response = await fetch("<peach auth service>/api/oauth/token", {
    method: "POST",
    body: JSON.stringify({
      clientId,
      clientSecret,
      merchantId,
    }),
  });

  if (response.ok) {
    let body = await response.json();

    return body.bearer;
  } else {
    throw new Error("Unable to authenticate");
  }
}

export async function createCheckoutId(token: string, body: any) {
  const response = await fetch("<checkout api>/v2/checkout", {
    headers: new Headers({
      Authentication: `bearer ${token}`,
      origin: "<base domain for site>",
    }),
    method: "POST",
    body: JSON.stringify(body),
  });

  if (response.ok) {
    return await response.json();
  } else {
    throw new Error("Unable to retrieve Checkout Id.");
  }
}

export const bearerToken = await authenticate(
  clientId,
  clientSecret,
  merchantId
);

export const checkout = await createCheckoutId(bearerToken, body);
