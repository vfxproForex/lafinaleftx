"use client";

import ToastContiner from "@/components/taostContainer";
import { Bounce, toast } from "react-toastify";
import Cookies from "js-cookie";
import { FaBitcoin } from "react-icons/fa";

export default function BitcoinPage() {
  return (
    <div className={"h-screen w-screen p-2"}>
      <div className="flex justify-center m-2">
        <FaBitcoin style={{ fontSize: "64" }} className="text-cs_primary-300" />
      </div>

      <div className="text-cs_text-200">
        <p className="text-md font-medium mb-5">
          How to fund your account with Bitcoin
        </p>
        <p className="text-sm pl-8 mb-3">
          1. Click on &quot;Copy Deposit Address&quot;
        </p>
        <p className="text-sm pl-8 mb-3">
          2. Navigate to Bitcoin and enter deposit amount desired.
        </p>
        <p className="text-sm pl-8 mb-3">
          3. Click on &quot;Copy Reference&quot;
        </p>
        <p className="text-sm pl-8 mb-3">
          4. Paste Reference on Bitcon Reference
        </p>
        <p className="text-sm pl-8 mb-3">
          5. Confirm transfer and send proof of payment at:
          sales@pinnacleftx.com
        </p>
      </div>
      <div className="flex flex-col gap-y-2 justify-center items-center ">
        <button
          className="shadow-md p-4 w-[80%] rounded-md text-semibold text-cs_primary-100 bg-cs_accent-200"
          onClick={() => {
            toast("Address Copied", {
              position: "top-left",
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              transition: Bounce,
            });
            navigator.clipboard.writeText("17ATNmEq5qfebDTSj445NckfC4nY1rJtHP");
          }}
        >
          Copy Deposit Address
        </button>
        <button
          className="shadow-md p-4 w-[80%] rounded-md text-semibold text-cs_primary-100 bg-cs_accent-200"
          onClick={async () => {
            toast("Reference Copied", {
              position: "top-left",
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              transition: Bounce,
            });
            const cookie = await Cookies.get("qid");
            navigator.clipboard.writeText(cookie!);
          }}
        >
          Copy Reference
        </button>
        <ToastContiner />
      </div>
    </div>
  );
}
