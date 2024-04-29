"use client";
import { useEffect } from "react";
import cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/utlis/store";
import { createAccountDetailsAction } from "@/utlis/accountDetails";
import Link from "next/link";
import { getUserBalanceAction } from "@/utlis/user";
import { createDepositAction } from "@/utlis/deposits";
import DepositList from "@/components/depositList.ui";

export default function AccountPage() {
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
  const getDeposit = async () => {
    const userId = cookie;
    const requestBody = {
      query: `
            query {
                deposits(id: "${userId}"){
                    userId
                    status
                    depositDate
                    refernce
                    depositAmount
                }
            }
`,
    };

    try {
      const response = await fetch("http://localhost:3000/graphql", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();
      console.log("deposits...");
      console.log(data);

      const userDeposits: [] = data.data.deposits;

      return userDeposits.map((deposit) => {
        dispatch(createDepositAction(deposit));
      });
    } catch (err) {
      throw err;
    }
  };
  const getWithdrawal = async () => {};

  useEffect(() => {
    //if statement
    setToken();
    getAccountDetails();
    getWithdrawal();
    getAccountBalance();
    if (deposits.length > 0) {
      return;
    } else {
      getDeposit();
    }
  }, []);
  return (
    <div
      className={`h-[100%] w-screen flex flex-col gap-y-5  ${
        deposits.length <= 0 ? "justify-center" : null
      } items-center`}
    >
      {deposits.length <= 0 ? (
        <>
          <p className="text-gray-400 p-5 text-center">
            Activate your account in order to see current trades.
          </p>
          <Link
            href={"/account/deposits/"}
            className="p-2 bg-gray-300 rounded-lg"
          >
            Activate Account
          </Link>
        </>
      ) : (
        <>
          <DepositList />
        </>
      )}
    </div>
  );
}
