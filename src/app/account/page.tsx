"use client";

import { useEffect } from "react";
import cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/utlis/store";
import { createAccountDetailsAction } from "@/utlis/accountDetails";
import Link from "next/link";
import { getUserBalanceAction } from "@/utlis/user";

export default async function AccountPage() {
  const deposits = useAppSelector((state) => state.deposits);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const cookie = cookies.get("qid");
  const setToken = async () => {
    if (!cookie) {
      return router.push("/signin");
    }
  };

  const getAccountBalance = async () => {
    const requestBody = {
      query: `
         query {
            getBalance(userId: "${cookie}")
            }
        `,
    };

    try {
      const response = await fetch("http://localhost:3000/graphql", {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      console.log("user balance...");
      const amount = data.data.getBalance;

      dispatch(getUserBalanceAction({ balance: amount }));
    } catch (err) {
      throw err;
    }
  };
  const getAccountDetails = async () => {
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
  const getDeposit = async () => {};
  const getWithdrawal = async () => {};

  useEffect(() => {
    //if statement
    setToken();
    getAccountDetails();
    getDeposit();
    getWithdrawal();
    getAccountBalance();
  }, []);
  return (
    <div className="h-screen w-screen flex flex-col gap-y-5 justify-center items-center">
      <p className="text-gray-400">
        Activate your account in order to see current trades.
      </p>
      <Link href={"/account/deposits/"} className="p-2 bg-gray-300 rounded-lg">
        Activate Account
      </Link>
    </div>
  );
}
