"use client";
import { useAppSelector } from "@/utlis/store";
import { FC } from "react";

const DepositList: FC = () => {
  const deposits = useAppSelector((state) => state.deposits);
  return (
    <div className="h-[100%] w-screen p-3 overflow-y-scroll">
      {deposits.map((deposit) => {
        return (
          <div
            className="p-2 bg-gray-200 rounded-lg m-3 shadow-md"
            key={deposit.refernce}
          >
            <p className={"text-gray-500 "}>Deposit Reference:</p>
            <h1 className={"text-gray-400 mb-4 text-sm"}>{deposit.refernce}</h1>
            <h1 className={""}>
              {new Intl.DateTimeFormat("en-ZA").format(
                new Date(deposit.depositDate)
              )}
            </h1>
            <div className="flex gap-x-2 items-center">
              <h1>Status:</h1>
              {deposit.status ? (
                <p className="bg-yellow-200 rounded-lg p-1">Pending</p>
              ) : (
                <p className="bg-green-200 rounded-lg p-1">Confirmed</p>
              )}
            </div>
            <h1 className={"mt-5 text-lg font-medium"}>
              {new Intl.NumberFormat("en-ZA", {
                style: "currency",
                currency: "ZAR",
              }).format(parseInt(deposit.depositAmount))}
            </h1>
          </div>
        );
      })}
    </div>
  );
};

export default DepositList;
