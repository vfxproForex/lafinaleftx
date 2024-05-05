"use client";

import ConfirmDepositApi from "@/app/actions/confirmDepost";
import { createDepositAction } from "@/utlis/deposits";
import { useAppDispatch } from "@/utlis/store";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import Cookies from "js-cookie";
import {  useRouter } from "next/navigation";

export default function SuccessPage() {
  const dispatch = useAppDispatch();
    const router = useRouter()
  const awaitDeposit = async () => {
    const amount = Cookies.get("amount");
    const userId = Cookies.get("qid");

    try {
      const depositConfirmation = await ConfirmDepositApi(userId!, amount!);
      console.log(depositConfirmation.deposit);

      if (depositConfirmation.status) {
        console.log(depositConfirmation.deposit);
        await toast.success("Deposit Success!");
        await dispatch(createDepositAction(depositConfirmation.deposit));
        await Cookies.remove("amount");
        router.push("/account/"); // Redirect on success
      } else {
        throw new Error("Deposit Failed"); // Handle failure
      }
    } catch (err) {
      console.log(`Error frontend: ${err}`);
      await toast.error("Deposit Failed, please try again");
    }
  };
  useEffect(() => {
    awaitDeposit();
  }, []);

  return (
    <div>
      <Toaster />
    </div>
  );
}
