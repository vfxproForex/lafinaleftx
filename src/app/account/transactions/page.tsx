"use client";
import Deposits from "@/components/deposits.ui";
import { useAppSelector } from "@/utlis/store";
import Link from "next/link";

export default function TransactionsPage() {
  const deposits = useAppSelector((state) => {
    return state.deposits;
  });
  return (
    <div
      className={`h-full w-screen ${
        deposits.length === 0
          ? "flex gap-y-5 flex-col justify-center items-center"
          : null
      }`}
    >
      {deposits.length === 0 ? (
        <>
          <label className={`text-lg text-cs_text-200 font-bold`}>
            No deposits found.
          </label>
          <label className={`text-lg text-cs_text-200 font-bold`}>
            Please make a deposit.
          </label>
          <Link
            href={"/account/deposits/"}
            className="animate-pulse text-md font-extrabold bg-cs_bg-200 p-3 rounded-md text-cs_text-200"
          >
            Fund Your Account
          </Link>
        </>
      ) : (
        <>
          <h1
            className={`p-2 m-2 text-lg bg-cs_bg-200 shadow-lg text-cs_text-200 rounded-md flex-none w-1/4`}
          >
            Deposits
          </h1>
          <Deposits deposits={deposits} />
        </>
      )}
    </div>
  );
}
