"use server";

export default async function CreateUserDetailsApi(
  firstName: string,
  middleName: string,
  lastname: string,
  contactNumber: string,
  bankName: string,
  accountName: string,
  accountNumber: string,
  accountType: string,
  nameOnCard: string,
  cardNumber: string,
  expiryDate: string,
  cvvNumber: string,
  userId: string
) {
  const requestBody = {
    query: `
mutation {
  updateDetailsOrCrateDetails(
    userDetailsInput:{
      firstname:"${firstName}",
      middleName: "${middleName}",
      lastname: "${lastname}",
      contactNumber: "${contactNumber}",
      bankName: "${bankName}",
      accountName: "${accountName}",
      accountNumber: "${accountNumber}",
      accountType: "${accountType}",
      nameOnCard: "${nameOnCard}",
      cardNumber:"${cardNumber}",
      expiryDate: "${expiryDate}",
      cvv: "${cvvNumber}",
      userId: "${userId}",
    }
    userId: "${userId}"
  ) {
    firstname
    middleName
    lastname
    contactNumber
    bankName
    accountName
    accountNumber
    accountType
    nameOnCard
    cardNumber
    expiryDate
    cvv
  }
}
`,
  };

  const response = await fetch(
    `${
      process.env.NODE_ENV === "production"
        ? process.env.backend_server
        : process.env.dev_server
    }`,
    {
      method: "post",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();

  return data.data.updateDetailsOrCrateDetails;
}
