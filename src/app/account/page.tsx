"use client";
import { useEffect } from "react";
import cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/utlis/store";
import { createAccountDetailsAction } from "@/utlis/accountDetails";
import { getUserBalanceAction } from "@/utlis/user";
import { createDepositAction } from "@/utlis/deposits";
import BannerUI from "@/components/banner.ui";
import TradeUI from "@/components/trade.ui";
import ActiveTradesUI from "@/components/activeTrade.ui";
import UserCardUI from "@/components/userCard.ui";

export default function AccountPage() {
  const deposits = useAppSelector((state) => state.deposits);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const cookie = cookies.get("qid");
  const setToken = async () => {
    if (!cookie) {
      return process.env.NODE_ENV === "production"
        ? router.push("/signin")
        : null;
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
      const response = await fetch(
        `${
          process.env.NODE_ENV === "production"
            ? process.env.backend_server
            : process.env.dev_server
        }`,
        {
          method: "POST",
          body: JSON.stringify(requestBody),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
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

    const response = await fetch(
      `${
        process.env.NODE_ENV === "production"
          ? process.env.backend_server
          : process.env.dev_server
      }`,
      {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

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
    <div className="w-full">
      <UserCardUI />
      <BannerUI />
      <TradeUI />
      <ActiveTradesUI />
    </div>
  );
}
