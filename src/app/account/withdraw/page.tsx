"use client";
import { useAppDispatch, useAppSelector } from "@/utlis/store";
import {
  FaBitcoin,
  FaDollarSign,
  FaEthereum,
  FaEuroSign,
} from "react-icons/fa";
import Cookies from "js-cookie";
import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { createWithDrawAction } from "@/utlis/withdraws";
import { createAccountDetailsAction } from "@/utlis/accountDetails";

export default function WithdrawPage() {
  const amountRef = useRef<HTMLInputElement>(null);

  const currentBalance = useAppSelector(
    (state) => state.accountDetails.currentBalance
  );
  const dispatch = useAppDispatch();

  const createWithDrawal = async () => {
    const cookie = Cookies.get("qid");
    const amount = amountRef.current?.value;

    const requestBody = {
      query: `
            mutation{
              createWithdraw(amount: "${amount}", userId: "${cookie}"){
                userId
                withdrawDate
                reference
                withdrawalAmount
              }
            }
`,
    };

    const response = await toast.promise(
      fetch("http://localhost:3000/graphql", {
        method: "POST",
        headers: {
          "Context-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      }),
      {
        loading: "Submit Request",
        success: "Request Submitted",
        error: "Unable to submit request.",
      }
    );

    try {
      const data = await response.json();
      if (response.ok) {
        dispatch(
          createWithDrawAction(data.data.createWithdraw.withdrawalAmount)
        );
        dispatch(
          createAccountDetailsAction(data.data.createWithdraw.withdrawalAmount)
        );
      }
    } catch (err) {
      console.log(`Error creating deposit: ${err}`);
    }
  };
  return (
    <div className="flex flex-col gap-y-5 w-full">
      <div className="flex pl-10 pr-10 pt-5 justify-between">
        <FaDollarSign style={{ color: "black", fontSize: "32" }} />
        <FaEuroSign style={{ color: "black", fontSize: "32" }} />
        <FaBitcoin style={{ color: "black", fontSize: "32" }} />
        <FaEthereum style={{ color: "black", fontSize: "32" }} />
      </div>
      <div className="p-2 flex flex-col gap-y-5 justify-center items-center">
        <h1 className="text-2xl font-medium text-center mb-10">
          Withdraw Request
        </h1>
        <p className="font-semibold">Current Balance: {currentBalance}</p>
        <input
          className="p-2 outline-none bg-gray-300 rounded-md"
          type="number"
          placeholder="Withdrawal Amount"
        />
        <button className="p-2 min-w-[20vh] max-w-[25vh] font-semibold bg-gray-500 rounded-md">
          Request
        </button>
      </div>
      <Toaster />
    </div>
  );
}
