"use client";
import { FC } from "react";
import toast, { Toaster } from "react-hot-toast";

interface IProps {
  id: number;
  label: string;
}

const initialState: IProps[] = [
  { id: 1, label: "EUR/USD" },
  { id: 2, label: "USD/JPY" },
  { id: 3, label: "USD/ZAR" },
  { id: 4, label: "GBP/USD" },
  { id: 5, label: "AUD/USD" },
  { id: 6, label: "USD/CAD " },
  { id: 7, label: "USD/CHF" },
  { id: 8, label: "NZD/USD" },
  { id: 9, label: "USD/CNY " },
  { id: 10, label: "USD/SEK" },
  { id: 11, label: "USD/NOK" },
  { id: 12, label: "USD/SGD" },
  { id: 13, label: "USD/HKD" },
  { id: 14, label: "USD/KRW " },
  { id: 15, label: "USD/MXN" },
  { id: 16, label: "USD/INR " },
  { id: 17, label: "USD/BRL" },
  { id: 18, label: "USD/RUB" },
  { id: 19, label: "USD/TRY" },
];

const TradeUI: FC = () => {
  return (
    <div className="w-full mt-5">
      <div className="grid ">
        <label className="text-md text-cs_text-100 ml-5 font-bold">
          Most Popular
        </label>
        <label className="text-xs text-red-200 ml-5 font-bold">
          Notice: Please activate account to view trades.
        </label>
      </div>

      <ul className="overflow-x-auto w-full flex">
        {initialState.map((x) => {
          const random = Math.random();
          const randomNumber = ((random - 0.5) * 0.1).toFixed(2);
          return (
            <div
              key={x.id.toString()}
              className="rounded-lg bg-cs_bg-200 flex-none max-w-[150px] grid grid-cols-1 gap-y-5 p-3 m-4"
            >
              <div className={`grid-cols-2 grid p-2`}>
                <label className={`text-green-500 text-sm`}>
                  {randomNumber} %
                </label>
                <label className={`text-green-500 text-sm`}>
                  + {randomNumber}
                </label>
              </div>
              <label
                className="text-center text-cs_text-100 bg-red-500 rounded-md p-2 font-bold"
                onClick={() => {
                  toast("Please fund account.");
                }}
              >
                Sell
              </label>
              <label
                className="text-center bg-green-500 rounded-md p-2 font-bold text-cs_text-100"
                onClick={() => {
                  toast("Please fund account.");
                }}
              >
                Buy
              </label>
              <label className="text-center text-lg text-cs_text-100 font-bold">
                {x.label}
              </label>
            </div>
          );
        })}
      </ul>
      <Toaster />
    </div>
  );
};

export default TradeUI;
