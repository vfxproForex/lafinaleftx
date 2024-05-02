"use client";
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

const TradeUI: FC = () => {
  return (
    <div className="w-full mt-5">
      <label className="text-md text-cs_text-100 ml-5 font-bold">
        Most Popular
      </label>

      <ul className="overflow-x-auto w-full flex">
        {initialState.map((x) => {
          return (
            <div
              key={x.id.toString()}
              className="rounded-lg bg-cs_bg-200 flex-none max-w-[150px] grid grid-cols-1 gap-y-5 p-3 m-4"
            >
              <div className={`grid-cols-2 grid p-2`}>
                <label className={`text-green-500 text-sm`}>+ 4%</label>
                <label className={`text-green-500 text-sm`}>+1.06800</label>
              </div>
              <label className="text-center text-cs_text-100 bg-red-500 rounded-md p-2 font-bold">
                Sell
              </label>
              <label className="text-center bg-green-500 rounded-md p-2 font-bold text-cs_text-100">
                Buy
              </label>
              <label className="text-center text-lg text-cs_text-100 font-bold">
                EUR/USD
              </label>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default TradeUI;
