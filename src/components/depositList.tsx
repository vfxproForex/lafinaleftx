import { FC } from "react";

interface IProps {
  data: [
    {
      userId: string;
      depositDate: string;
      refernce: string;
      depositAmount: string;
      status: false;
    }
  ];
}

const DepositList: FC<IProps> = (props) => {
  return props.data.map((deposit) => {
    return (
      <div
        className="flex flex-col shadow-lg p-4 border-2 rounded-md bg-gray-200"
        key={deposit.refernce.toString()}
      >
        <div className="mt-5 mb-5">
          <h1>Deposit date:</h1>
          <h1>{deposit.depositDate}</h1>
        </div>
        <div className="flex gap-x-2 mt-5 mb-5">
          <p>Reference:</p>
          <p>{deposit.refernce}</p>
        </div>
        <div>
          <p>Amount:</p>
          <p>{deposit.depositAmount}</p>
        </div>
        <div className="flex bg-yellow-200 rounded-lg p-2 ">
          <p>Status:</p>
          <p>{deposit.status === false ? <p>Pending</p> : <p>Active</p>}</p>
        </div>
      </div>
    );
  });
};

export default DepositList;
