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
  const [toggleEthrium, setEthrium] = useState<boolean>(false);

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
        <FaBitcoin
          style={{ fontSize: "64" }}
          className="text-cs_primary-300"
          onClick={toggleModalHandler}
        />
      </div>
      <label className="text-sm text-cs_text-200 p-2 m-2">
        Ethereum Transactions
      </label>
      <div className="grid grid-cols-1 p-2 m-6 rounded-lg place-items-center bg-cs_primary-100">
        <FaEthereum
          style={{ fontSize: "64" }}
          className="text-cs_primary-300"
          onClick={toggleEthriumHandler}
        />
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
