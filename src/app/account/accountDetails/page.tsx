"use client";
import { useAppSelector } from "@/utlis/store";
import Link from "next/link";
import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { createAccountDetailsAction } from "@/utlis/accountDetails";

export default function AccountDetailsPage() {
  const accountDetails = useAppSelector((state) => state.accountDetails);
  const userId = accountDetails.userId;
  const dispatch = useDispatch();

  const getAccountDetailsApi = async () => {
    const cookie = await Cookies.get("qid");

    const requestBody = {
      query: `
        query {
  userDetails(userId: "${cookie}") {
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
		userId
    currentBalance
  }
}
`,
    };

    const response = await fetch("http://localhost:3000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    dispatch(createAccountDetailsAction(data.data.userDetails));
  };

  useEffect(() => {
    //if (cookie) {
    getAccountDetailsApi();
    //}
    //console.log(`from frontend: ${accountDetails.userId}`);
  }, []);

  return (
    <div className="h-screen w-screen overflow-y-scroll">
      {userId === undefined ? (
        <div className="flex h-screen gap-y-5 flex-col justify-center items-center">
          <h1 className="font-medium text-gray-400">No user details found</h1>
          <h1 className="font-medium text-gray-400">
            Please update/create user details
          </h1>
          <Link
            href={"/account/accountDetails/userDetails/"}
            className="bg-gray-300 p-2 rounded-lg"
          >
            Create
          </Link>
        </div>
      ) : (
        <div className="flex h-screen  flex-col">
          <h1 className="p-2 text-xl">User Details</h1>
          <div className="flex flex-col gap-y-5 p-2">
            <input
              className="bg-gray-300 outline-none p-2 rounded-md "
              type="text"
              placeholder="First name"
              disabled
              value={accountDetails.firstname}
            />
            <input
              className="bg-gray-300 outline-none p-2 rounded-md "
              type="text"
              placeholder="Middle name"
              disabled
              value={accountDetails.middleName}
            />
            <input
              className="bg-gray-300 outline-none p-2 rounded-md "
              type="text"
              placeholder="Last name"
              disabled
              value={accountDetails.lastname}
            />
            <input
              className="bg-gray-300 outline-none p-2 rounded-md "
              type="text"
              placeholder="Contact Number"
              disabled
              value={accountDetails.contactNumber}
            />

            <div className="flex flex-col gap-y-5">
              <p>Banking Information:</p>
              <input
                className="bg-gray-300 outline-none p-2 rounded-md "
                type="text"
                placeholder="Bank name"
                disabled
                value={accountDetails.bankName}
              />
              <input
                className="bg-gray-300 outline-none p-2 rounded-md "
                type="text"
                placeholder="Account type"
                disabled
                value={accountDetails.accountType}
              />
              <input
                className="bg-gray-300 outline-none p-2 rounded-md "
                type="text"
                placeholder="Account name"
                disabled
                value={accountDetails.accountName}
              />
              <input
                className="bg-gray-300 outline-none p-2 rounded-md "
                type="text"
                placeholder="Account number"
                disabled
                value={accountDetails.accountNumber}
              />
              <input
                className="bg-gray-300 outline-none p-2 rounded-md "
                type="text"
                placeholder="Card No."
                disabled
                value={accountDetails.cardNumber}
              />
              <input
                className="bg-gray-300 outline-none p-2 rounded-md "
                type="text"
                placeholder="Expiry Date"
                disabled
                value={accountDetails.expiryDate}
              />
              <input
                className="bg-gray-300 outline-none p-2 rounded-md "
                type="text"
                placeholder="CVV no."
                disabled
                value={accountDetails.cvv}
              />
            </div>
            <div className="flex justify-center">
              <Link
                href={"/account/accountDetails/userDetails/"}
                className="bg-gray-300 p-3 rounded-lg"
              >
                Edit
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
