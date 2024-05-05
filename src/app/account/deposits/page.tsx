import Link from "next/link";
import {
  FaBitcoin,
  FaCcMastercard,
  FaCcVisa,
  FaEthereum,
} from "react-icons/fa";
import trc20 from "../../../../public/trc20/icons8-tether-96.png";
import Image from "next/image";

export default function DepositPage() {
  return (
    <div className={"h-screen"}>
      <h1
        className={`p-2 m-2 text-lg bg-cs_bg-200 shadow-lg text-cs_text-200 rounded-md flex-none w-2/4`}
      >
        Deposit Methods
      </h1>

      <label className="text-sm text-cs_text-200 p-2 m-2">
        Card Transactions
      </label>
      <div className="">
        <Link
          href={"/account/deposits/cardtransaction/"}
          className="grid grid-cols-2 p-2 m-6 rounded-lg place-items-center bg-cs_primary-100"
        >
          <FaCcMastercard
            style={{ fontSize: "64" }}
            className="text-cs_primary-300"
          />
          <FaCcVisa
            style={{ fontSize: "64" }}
            className="text-cs_primary-300"
          />
        </Link>
      </div>
      <label className="text-sm text-cs_text-200 p-2 m-2">
        Bitcoin Transactions
      </label>

      <div className="grid grid-cols-1 p-2 m-6 rounded-lg place-items-center bg-cs_primary-100">
        <Link href={"/account/deposits/bitcoin"}>
          <FaBitcoin
            style={{ fontSize: "64" }}
            className="text-cs_primary-300"
          />
        </Link>
      </div>
      <label className="text-sm text-cs_text-200 p-2 m-2">
        Ethereum Transactions
      </label>
      <div className="grid grid-cols-1 p-2 m-6 rounded-lg place-items-center bg-cs_primary-100">
        <Link href={"/account/deposits/ethereum"}>
          <FaEthereum
            style={{ fontSize: "64" }}
            className="text-cs_primary-300"
          />
        </Link>
      </div>
      <label className="text-sm text-cs_text-200 p-2 m-2">
        TRC20(USDT) Transactions
      </label>
      <div className="grid grid-cols-1 p-2 m-6 rounded-lg place-items-center bg-cs_primary-100">
        <Link href={"/account/deposits/trc20"}>
          <Image alt="" src={trc20} height={64} width={64} />
        </Link>
      </div>
    </div>
  );
}
