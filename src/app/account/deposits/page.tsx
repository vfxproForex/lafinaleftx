"use client";
import Modal from "@/components/modal";
import BitcoinModal from "@/views/deposit.view/bitcoin.view";
import Link from "next/link";
import { useState } from "react";
import {
  FaBitcoin,
  FaCcMastercard,
  FaCcVisa,
  FaEthereum,
} from "react-icons/fa";
export default function DepositPage() {
  const [toggleBitcoin, setToggleBitcoin] = useState<boolean>(false);

  const toggleModalHandler = () => {
    if (toggleBitcoin) {
      return setToggleBitcoin(false);
    } else if (!toggleBitcoin) {
      return setToggleBitcoin(true);
    }
  };
  return (
    <div
      className={
        " h-screen w-screen overflow-y-scroll flex flex-col gap-y-5 justify-center p-2 items-center"
      }
    >
      <h1 className="text-2xl font-medium text-gray-400">
        Select Deposit Method.
      </h1>

      <div className="p-2 w-[30vh] bg-gray-300 flex justify-center shadow-md">
        <FaBitcoin
          style={{ color: "black", fontSize: "128px" }}
          onClick={toggleModalHandler}
        />
      </div>

      <div className="p-2 w-[30vh] bg-gray-300 flex justify-center shadow-md">
        <Link href={"/account/deposits/mastercard/"}>
          <FaCcMastercard style={{ color: "black", fontSize: "128px" }} />
        </Link>
      </div>
      <div className="p-2 w-[30vh] bg-gray-300 flex justify-center shadow-md">
        <Link href={"/account/deposits/visa/"}>
          <FaCcVisa style={{ color: "black", fontSize: "128px" }} />
        </Link>
      </div>
      <div className="p-2 w-[30vh] bg-gray-300 flex justify-center shadow-md">
        <FaEthereum style={{ color: "black", fontSize: "128px" }} />
      </div>
      {toggleBitcoin ? (
        <Modal onClick={toggleModalHandler}>
          <BitcoinModal />
        </Modal>
      ) : null}
    </div>
  );
}
