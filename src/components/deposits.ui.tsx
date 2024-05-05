"use client";

import { IDeposit } from "@/utlis/deposits";
import { formatDate } from "@/utlis/func/dateFormat";
import { FC } from "react";

interface IProps {
  deposits: IDeposit[];
}

const Deposits: FC<IProps> = (props) => {
  return (
    <div className="w-screen">
      <ul className="overflow-y-auto h-screen w-full">
        {props.deposits.map((deposit) => {
          return (
            <div
              key={deposit.refernce.toString()}
              className="rounded-lg bg-cs_bg-200 flex-none grid grid-cols-1 gap-y-5 p-3 m-4"
            >
              <div className="grid grid-cols-2">
                <div className="grid">
                  <label className={"text-md text-cs_text-200"}>
                    Deposit ID
                  </label>
                  <label className={"text-sm font-bold text-cs_text-200"}>
                    {deposit.refernce}
                  </label>
                </div>
                <div>
                  <div className="grid text-end">
                    <label className={"text-md text-cs_text-200"}>
                      Deposit Date
                    </label>
                    <label className={"text-sm font-bold text-cs_text-200"}>
                      {formatDate(deposit.depositDate)}
                    </label>
                  </div>
                </div>
              </div>

              <div className={`flex justify-between`}>
                <label
                  className={`${
                    deposit.depositStatus === "Pending"
                      ? "bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600"
                      : deposit.depositStatus === "Failed"
                      ? "bg-gradient-to-br from-red-400 via-red-500 to-red-600"
                      : deposit.depositStatus === "Confirmed"
                      ? "bg-gradient-to-br from-green-400 via-green-500 to-green-600"
                      : null
                  } rounded-md flex justify-center items-center text-center text-sm font-bold w-[100px]`}
                >
                  {deposit.depositStatus}
                </label>
                <label className="text-lg text-green-500 font-bold">
                  {new Intl.NumberFormat("en-ZA", {
                    style: "currency",
                    currency: "ZAR",
                  }).format(parseInt(deposit.depositAmount))}
                </label>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Deposits;
