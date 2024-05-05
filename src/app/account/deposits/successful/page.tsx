"use client";

import ConfirmDepositApi from "@/app/actions/confirmDepost";
import { createDepositAction } from "@/utlis/deposits";
import { useAppDispatch } from "@/utlis/store";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import Cookies from "js-cookie";
import { redirect } from "next/navigation";

export default function SuccessPage() {
  const dispatch = useAppDispatch();
  const awaitDeposit = async () => {
    const amount = await Cookies!.get("amount");
    const userId = await Cookies!.get("qid");
    try {
      await toast
        .promise(ConfirmDepositApi(userId!, amount!), {
          loading: "Confirm Deposit, please wait.",
          success: "Deposit Success!",
          error: "Deposit Failed, please try again",
        })
        .then(async (x) => {
          console.log(`then block: ${x}`);

          await dispatch(createDepositAction(amount));
          await Cookies.remove("amount");
          redirect("/account/");
        });
    } catch (err) {
      console.log(`Error fronted: ${err}`);
      return err;
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
