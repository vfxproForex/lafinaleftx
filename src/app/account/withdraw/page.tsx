"use client";
import { useAppDispatch, useAppSelector } from "@/utlis/store";
import {
  FaBitcoin,
  FaDollarSign,
  FaEthereum,
  FaEuroSign,
} from "react-icons/fa";
import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import BannerUI from "@/components/banner.ui";
import SubmitButton from "@/components/submitButton";

export default function WithdrawPage() {
  const amountRef = useRef<HTMLInputElement>(null);

  const currentBalance = useAppSelector((state) => {
    const currentBalance = new Intl.NumberFormat("en-ZA", {
      style: "currency",
      currency: "ZAR",
    }).format(state.userState.balance);
    return currentBalance;
  });
  const dispatch = useAppDispatch();

  return (
    <div className="grid grid-cols-1 gap-y-3">
      <BannerUI />
      <div className="flex justify-between p-5 bg-cs_primary-100">
        <FaDollarSign
          style={{ fontSize: "32" }}
          className="text-cs_primary-300"
        />
        <FaEuroSign
          style={{ fontSize: "32" }}
          className="text-cs_primary-300"
        />
        <FaBitcoin style={{ fontSize: "32" }} className="text-cs_primary-300" />
        <FaEthereum
          style={{ fontSize: "32" }}
          className="text-cs_primary-300"
        />
      </div>
      <div className="p-4">
        <h1 className="text-md text-cs_text-100 mb-5 font-bold">
          Withdrawal Request
        </h1>
        <label className="text-red-500 text-md underline-offset-1 font-bold">
          Important Notice!!!
        </label>
        <p className="m-2 text font-medium text-red-400 italic">
          Withdrawals will only be processed to bank accounts for your security
          and convenience. Thank you for your cooperation.
        </p>
        <input
          className="p-2 outline-none bg-gray-300 rounded-md w-full mb-5 mt-5"
          type="number"
          placeholder="Withdrawal Amount"
        />
        <div className="flex justify-center">
          <SubmitButton
            loadingTitle="Requesting..."
            buttonCaption="Submit Request"
            key={"withdrawal submit"}
          />
        </div>
      </div>
      <Toaster />
    </div>
  );
}
