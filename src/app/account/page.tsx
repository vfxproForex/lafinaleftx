"use client";
import { useEffect } from "react";
import cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/utlis/store";
import { createAccountDetailsAction } from "@/utlis/accountDetails";
import { getUserBalanceAction } from "@/utlis/user";
import { IDeposit, createDepositAction } from "@/utlis/deposits";
import BannerUI from "@/components/banner.ui";
import TradeUI from "@/components/trade.ui";
import ActiveTradesUI from "@/components/activeTrade.ui";
import UserCardUI from "@/components/userCard.ui";
import getDepositsApi from "../actions/getDepositsApi";
import getUserBalanceApi from "../actions/getBalanceApi";
import { getAccountDetailsApi } from "../actions/getAccountDetails";
import toast, { Toaster } from "react-hot-toast";

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
    try {
      const userBalance = await toast.promise(getUserBalanceApi(cookie!), {
        loading: "Loading Account balance, please wait.",
        error: "Please make a deposit, account balanc is 0.00",
        success: "Account details up to date.",
      });
      dispatch(getUserBalanceAction({ balance: userBalance }));
    } catch (err) {
      throw err;
    }
  };
  const getAccountDetails = async () => {
    const userId = cookie;
    const data = await toast.promise(getAccountDetailsApi(userId!), {
      success: "Account details updated",
      error: "Please update user details for withdrawal purposes.",
      loading: "Loading Account details",
    });

    dispatch(createAccountDetailsAction(data.data.userDetails));
  };
  const getDeposit = async () => {
    const userId = cookie;

    try {
      const apiDeposits: IDeposit[] = await toast.promise(
        getDepositsApi(userId!),
        {
          loading: "Loading Transactions",
          error: "No deposits found, please fund account to starting trading.",
          success: "Deposits loaded.",
        }
      );
      return apiDeposits.map((deposit) => {
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
      <Toaster />
    </div>
  );
}
