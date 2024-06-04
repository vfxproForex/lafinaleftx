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
import RPMcard from "../../../public/image.jpg";
import Image from "next/image";
import CarouselUI from "@/components/carousel.ui";
import NewsUI from "@/components/new.ui";
import getWithdrawalsApi from "../actions/getWithdrawals.api";
import { IWithdraw, createWithDrawAction } from "@/utlis/withdraws";
import forexImage from '../../../public/forexbackgroundImage.png'
import forexImage2 from '../../../public/forexbackgroundImage2.png'

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
      loading: "Loading Account details.",
    });
    await console.log(data);

    dispatch(createAccountDetailsAction(data));
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

  const getWithdrawal = async () => {
    const userId = cookie;

    try {
      const apiDeposits: IWithdraw[] = await toast.promise(
        getWithdrawalsApi(userId!),
        {
          loading: "Loading withdrawals",
          error: "No withdrawals found.",
          success: "withdrawals loaded.",
        }
      );
      return apiDeposits.map((withdraw) => {
        dispatch(createWithDrawAction(withdraw));
      });
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    //if statement
    setToken();
    getAccountDetails();
    getAccountBalance();
    if (deposits.length > 0) {
      return;
    } else {
      getDeposit();
      getWithdrawal();
    }
  }, []);
  return (
    <div className="w-full">
      <UserCardUI />
      <CarouselUI />
      <BannerUI />
      <TradeUI />
      <ActiveTradesUI />
      <div className="flex justify-center p-4 mt-5">
        <Image src={RPMcard} className="w-full " alt="" />
      </div>
      <NewsUI />
      <div className={'space-y-5 p-2'}>
        <h1 className="text-xl text-bold font-bold text-white">Current Market Trends</h1>
        <div className="flex overflow-x-scroll space-x-5 p-4">
          <Image className="shadow bg-white/50" alt="" src={forexImage} height={512} width={512} />
          <Image className="shadow bg-white/50" alt="" src={forexImage2} height={512} width={512} />
        </div>
      </div>
      <div>
        <h1 className="text-md text-cs_text-100 ml-5 font-bold">
          Risk Warning
        </h1>
        <p className="p-4 text-white">
          Pinnacle FTX (Pty) Ltd, a company incorporated under the laws of South
          Africa with registration number 2021/596850/07 and registered address
          at 177 9TH AVENUE HIGHLANDS NORTH, JOHANNESBURG, GAUTENG and is a duly
          authorised Juristic Representative of RocketX (Pty) Ltd. RocketX (Pty)
          Ltd is licensed and regulated by the Financial Sector Conduct
          Authority (FSP number 52142). RocketX (Pty) Ltd, registration number
          2020/824856/07, a company organized and existing under the laws of
          South Africa, RocketX is an Over the Counter Derivatives Provider
          whose registered office is at WeWork South Africa, 155 West Street,
          Sandton, Gauteng, 2031, are payment operators of Vault
          Markets(Pty)Ltd., by laws of South Africa acting as paying agent on
          behalf of Vault Markets(Pty)Ltd. Office Park Block A Ground South
          Boulevard Road, Johannesburg, Gauteng, 2198.
        </p>
      </div>
      <Toaster />
    </div>
  );
}
