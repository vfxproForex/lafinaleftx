"use client";
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
              key={withdraw.reference}
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
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default WithdrawUI;
