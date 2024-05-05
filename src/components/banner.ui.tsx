"use client";
import { useAppSelector } from "@/utlis/store";
import { FC } from "react";

const BannerUI: FC = () => {
  const userBalance = useAppSelector((state) => {
    return state.userState;
  });
  return (
    <div>
      <label className="text-md text-cs_text-100 ml-5 font-bold">
        My Wallet
      </label>
      <div className="bg-cs_primary-100 shadow-lg  mt-5 rounded-lg pt-6 pb-6 grid grid-cols-3 divide-x-[3px] ">
        <div className="pl-4 text-cs_primary-300 flex flex-col justify-between">
          <label className="text-sm">Copy Trading Available Balance</label>
          <label className="text-lg font-semibold">R 500.00</label>
        </div>
        <div className="pl-4 text-cs_primary-300 flex flex-col justify-between">
          <label className="text-sm">Current Balance</label>
          <label className="text-lg font-semibold">R 1 800.00</label>
        </div>
        <div className="pl-4 text-cs_primary-300 flex flex-col justify-between">
          <label className="text-sm">Profit/Loss</label>
          <label className="text-lg font-semibold">(R 600.00)</label>
        </div>
      </div>
    </div>
  );
};

export default BannerUI;
