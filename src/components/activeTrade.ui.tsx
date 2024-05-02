"use client";

import { init } from "next/dist/compiled/webpack/webpack";
import { FC } from "react";

interface IProps {
  id: number;
}

const initialState: IProps[] = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
  { id: 11 },
  { id: 12 },
  { id: 13 },
  { id: 14 },
  { id: 15 },
];

const ActiveTradesUI: FC = () => {
  return (
    <div className="w-full mt-5">
      <label className="text-md text-cs_text-100 ml-5 font-bold">
        Currently Active Copy Trades
      </label>
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
    </div>
  );
};

export default ActiveTradesUI;
