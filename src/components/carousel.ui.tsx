import { FC } from "react";

interface IProps {
  id: string;
  icon: string;
  amount: string;
  gain: string;
  percentage: string;
}
const data: IProps[] = [
  { id: "1", icon: "BTC", amount: "67968", gain: "-34", percentage: "-40%" },
  { id: "2", icon: "ETH", amount: "4500", gain: "+150", percentage: "+12%" },
  { id: "3", icon: "XRP", amount: "3200", gain: "-50", percentage: "-4%" },
  { id: "4", icon: "ADA", amount: "2500", gain: "+80", percentage: "+8%" },
  { id: "5", icon: "SOL", amount: "1800", gain: "-20", percentage: "-2%" },
  { id: "6", icon: "DOT", amount: "1200", gain: "+30", percentage: "+3%" },
  { id: "7", icon: "LTC", amount: "800", gain: "-10", percentage: "-1%" },
  { id: "8", icon: "DOGE", amount: "600", gain: "+5", percentage: "+0.5%" },
  { id: "9", icon: "BCH", amount: "400", gain: "-2", percentage: "-0.2%" },
  { id: "10", icon: "UNI", amount: "300", gain: "+20", percentage: "+2%" },
  { id: "11", icon: "LINK", amount: "200", gain: "-8", percentage: "-0.8%" },
  { id: "12", icon: "MATIC", amount: "150", gain: "+15", percentage: "+1.5%" },
  { id: "13", icon: "XLM", amount: "100", gain: "-3", percentage: "-0.3%" },
  { id: "14", icon: "ATOM", amount: "80", gain: "+10", percentage: "+1.2%" },
  { id: "15", icon: "FIL", amount: "50", gain: "-5", percentage: "-0.5%" },
  { id: "16", icon: "AVAX", amount: "30", gain: "+25", percentage: "+2.5%" },
  { id: "17", icon: "AAVE", amount: "20", gain: "-1", percentage: "-0.1%" },
  { id: "18", icon: "XTZ", amount: "10", gain: "+3", percentage: "+0.3%" },
  { id: "19", icon: "FTT", amount: "5", gain: "-2", percentage: "-0.2%" },
  { id: "20", icon: "ALGO", amount: "2", gain: "+1", percentage: "+0.1%" },
  { id: "21", icon: "WAVES", amount: "1", gain: "-0.5", percentage: "-0.05%" },
];
const CarouselUI: FC = () => {
  return (
    <div className="w-full">
      <ul className={"flex animate-loop-scroll"}>
        {data.map((item) => {
          return (
            <li
              className="flex space-x-3 bg-cs_primary-100 p-2 text-white"
              key={item.id.toString()}
            >
              <label className="">{item.icon}</label>
              <label className="">{item.amount}</label>
              <label className="">{item.gain}</label>
              <label className="">{item.percentage}</label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CarouselUI;
