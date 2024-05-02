"use client";
import { formatDate } from "@/utlis/func/dateFormat";
import { IWithdraw } from "@/utlis/withdraws";
import { FC } from "react";

interface IProps {
  withdraws: IWithdraw[];
}

const WithdrawUI: FC<IProps> = (props) => {
  return (
    <div className="w-screen">
      <ul className="overflow-y-auto h-screen w-full">
        {props.withdraws.map((withdraw) => {
          return (
            <div
              key={withdraw.reference.toString()}
              className="rounded-lg bg-cs_bg-200 flex-none grid grid-cols-1 gap-y-5 p-3 m-4"
            >
              <div className="grid grid-cols-2">
                <div className="grid">
                  <label className={"text-md text-cs_text-200"}>
                    Withdrawal Trace ID
                  </label>
                  <label className={"text-sm font-bold text-cs_text-200"}>
                    {withdraw.reference}
                  </label>
                </div>
                <div>
                  <div className="grid text-end">
                    <label className={"text-md text-cs_text-200"}>
                      Withdrawal Date
                    </label>
                    <label className={"text-sm font-bold text-cs_text-200"}>
                      {formatDate(withdraw.withdrawDate)}
                    </label>
                  </div>
                </div>
              </div>

              <div className={`flex justify-between`}>
                <label
                  className={`${
                    withdraw.withdrawStatus === "Processing"
                      ? "bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600"
                      : withdraw.withdrawStatus === "Failed, Contact Support"
                      ? "bg-gradient-to-br from-red-400 via-red-500 to-red-600"
                      : withdraw.withdrawStatus === "Processed"
                      ? "bg-gradient-to-br from-green-400 via-green-500 to-green-600"
                      : null
                  } rounded-md flex justify-center items-center text-center text-sm font-bold w-[100px]`}
                >
                  {withdraw.withdrawStatus}
                </label>
                <label className="text-lg text-green-500 font-bold">
                  {withdraw.withdrawStatus}
                </label>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default WithdrawUI;
