"use client";
import { FC } from "react";

interface IProps {
  id: number;
}

const initialState: IProps[] = [];

const ActiveTradesUI: FC = () => {
  return (
    <div className="w-full mt-5 ">
      <label className="text-md text-cs_text-100 ml-5 font-bold">
        Currently Active Copy Trades
      </label>

      {initialState.length === 0 ? (
        <div className="flex justify-center pt-10 flex-col items-center h-full">
          <label className="text-md text-gray-200 ml-5 font-bold">
            No active trades.
          </label>
          <label className="text-md text-gray-200 ml-5 font-bold">
            Please fund account.
          </label>
        </div>
      ) : (
        <ul className="overflow-x-auto w-full flex">
          {initialState.map((x) => {
            return (
              <div
                key={x.id}
                className="rounded-lg bg-cs_bg-200 flex-none grid grid-cols-1 p-2 m-5 gap-y-5 w-[30ch]"
              >
                <div className="grid gap-y-2">
                  <label className="text-cs_text-100 font-bold text-xs">
                    Trace ID
                  </label>
                  <label className="text-cs_text-100 font-bold text-sm">
                    5555-2223-34353-2245
                  </label>
                </div>
                <div className="grid gap-y-2">
                  <label className="text-cs_text-100 text-xs">Trade ID </label>
                  <label className="text-cs_text-100 text-xs">USD/ZAR</label>
                </div>
                <div className="flex justify-end">
                  <label className="text-green-500 font-bold text-md">
                    Gain:{" "}
                  </label>
                  <label className="text-green-500 font-bold text-md">
                    R 25.00
                  </label>
                </div>
              </div>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default ActiveTradesUI;
