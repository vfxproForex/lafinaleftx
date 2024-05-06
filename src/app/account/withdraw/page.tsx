"use client";
import { useAppDispatch } from "@/utlis/store";
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
import Cookies from "js-cookie";
import CreateWithDrawApi from "@/app/actions/withdraw";
import { createWithDrawAction } from "@/utlis/withdraws";
import { useRouter } from "next/navigation";

export default function WithdrawPage() {
  const router = useRouter();

  const dispatch = useAppDispatch();

  const amountRef = useRef<HTMLInputElement>(null);

  const withdrawHandler = async (e: any) => {
    e.preventDefault();
    const userId = Cookies.get("qid");

    const amount = amountRef.current?.value;

    try {
      const withdrawResponse = await toast.promise(
        CreateWithDrawApi(amount!, userId!),
        {
          loading: "Submitting request, please wait",
          error: "Unable to submit request, please contact support.",
          success: "Withdraw request submitted.",
        }
      );
      dispatch(createWithDrawAction(withdrawResponse));
      router.push("/account/");
    } catch (err) {
      throw err;
    }
  };

  return (
    <form className="grid grid-cols-1 gap-y-3" onSubmit={withdrawHandler}>
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
          ref={amountRef}
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
    </form>
  );
}
