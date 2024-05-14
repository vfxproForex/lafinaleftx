"use client";
import WithdrawUI from "@/components/withdraws.ui";
import { useAppSelector } from "@/utlis/store";
import Link from "next/link";

export default function WithdrawsPage() {
  const withdrawals = useAppSelector((state) => {
    return state.withdraws;
  });
  return (
    <div
      className={`h-full w-screen ${
        withdrawals.length === 0
          ? "flex gap-y-5 flex-col justify-center items-center"
          : null
      }`}
    >
      {withdrawals.length === 0 ? (
        <>
          <label className={`text-lg text-cs_text-200 font-bold`}>
            No withdrawals found.
          </label>
          <label className={`text-lg text-cs_text-200 font-bold`}>
            Create a withdrawa request.
          </label>
          <Link
            href={"/account/withdraw/"}
            className="animate-pulse text-md font-extrabold bg-cs_bg-200 p-3 rounded-md text-cs_text-200"
          >
            Withdraw Funds
          </Link>
        </>
      ) : (
        <>
          <h1
            className={`p-2 m-2 text-lg bg-cs_bg-200 shadow-lg text-cs_text-200 rounded-md flex-none w-2/5`}
          >
            Withdrawals
          </h1>
          <WithdrawUI withdraws={withdrawals} />
        </>
      )}
    </div>
  );
}
