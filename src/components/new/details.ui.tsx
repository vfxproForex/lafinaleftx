import { FC } from "react";
import CardUI from "./card";

const DetailsUI: FC = ({}) => {
  const detailsList = {
    name: "Name",
    country: "Country",
    currency: "Currency",
    exchange: "Exchange",
    ipo: "IPO Date",
    marketCapitalization: "Market Capitalization",
    finnHunIndustry: "Industry",
  };
  const convertMillionToBillion = (number: number) => {
    return (number / 1000).toFixed(2);
  };
  return (
    <CardUI>
      <ul className="w-full h-full flex flex-col justify-between divide-y-1">
        {Object.keys(detailsList).map((item) => {
          return (
            <li key={item} className="flex-1 flex justify-between items-center">
              <span>{detailsList[item]}</span>
              <span>{detailsList[item]}</span>
            </li>
          );
        })}
      </ul>
    </CardUI>
  );
};
