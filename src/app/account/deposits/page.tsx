"use client";
import EthriumModal2 from "@/components/ethriumModal.ui";
import Modal from "@/components/modal";
import BitcoinModal from "@/views/deposit.view/bitcoin.view";
import EthriumModal from "@/views/deposit.view/ethrium.view";
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
  const [toggleEthrium, setEthrium] = useState<boolean>(true);

  const toggleModalHandler = () => {
    if (toggleBitcoin) {
      return setToggleBitcoin(false);
    } else if (!toggleBitcoin) {
      return setToggleBitcoin(true);
    }
  };

  const toggleEthriumHandler = () => {
    if (toggleEthrium) {
      return setEthrium(false);
    } else if (!toggleEthrium) {
      return setEthrium(true);
    }
  };
  return (
    <div
      className={
        "h-screen w-screen overflow-y-scroll flex flex-col gap-y-5 justify-center p-2 items-center"
      }
    >
      <h1 className="text-2xl font-medium text-gray-400">
        Select Deposit Method.
      </h1>

      <div className="p-4  rounded-lg bg-gradient-to-r from-[#BFBFBF] to-[#a2a2a2] cursor-pointer flex justify-center shadow-md">
        <FaBitcoin
          style={{ color: "black", fontSize: "64px" }}
          onClick={toggleModalHandler}
        />
      </div>
      <div className="p-4  rounded-lg bg-gradient-to-r from-[#BFBFBF] to-[#a2a2a2] cursor-pointer flex justify-center shadow-md">
        <FaEthereum style={{ color: "black", fontSize: "64px" }} />
      </div>

      <div className="p-4  rounded-lg bg-gradient-to-r from-[#BFBFBF] to-[#a2a2a2] cursor-pointer flex justify-center shadow-md">
        <Link href={"/account/deposits/mastercard/"}>
          <FaCcMastercard style={{ color: "black", fontSize: "64px" }} />
        </Link>
      </div>
      <div className="p-4  rounded-lg bg-gradient-to-r from-[#BFBFBF] to-[#a2a2a2] cursor-pointer flex justify-center shadow-md">
        <Link href={"/account/deposits/visa/"}>
          <FaCcVisa style={{ color: "black", fontSize: "64px" }} />
        </Link>
      </div>
      {toggleBitcoin ? (
        <Modal onClick={toggleModalHandler}>
          <BitcoinModal />
        </Modal>
      ) : null}
      {toggleEthrium ? (
        <EthriumModal2 onClick={toggleEthriumHandler}>
          <EthriumModal />
        </EthriumModal2>
      ) : null}
    </div>
  );
}
