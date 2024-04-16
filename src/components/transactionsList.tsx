import { IDeposit } from "@/utlis/deposits";
import { FC } from "react";

interface IProps {
  transactionData?: IDeposit[];
}

const TransactionList: FC<IProps> = (props) => {
  return (
    <ul className="p-2">
      {props.transactionData?.map((item) => {
        return (
          <li
            key={item.refernce.toString()}
            className="bg-gray-300 m-4 p-4 rounded-lg gap-y-5 flex flex-col"
          >
            <p className="text-xl font-medium">{item.refernce}</p>
            <p className="text-xl">{item.depositDate}</p>
            <p className="text-xl font-bold">{item.depositAmount}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default TransactionList;
