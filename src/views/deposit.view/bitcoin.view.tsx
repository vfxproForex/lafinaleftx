"use client";
import ToastContiner from "@/components/taostContainer";
import { Bounce, toast } from "react-toastify";
import Cookies from "js-cookie";

export default function BitcoinModal() {
  return (
    <>
      <div>
        <p className="font-medium mb-5">
          How to fund your account with Bitcoin
        </p>
        <p className="pl-8 mb-3">
          1. Click on &quot;Copy Deposit Address&quot;
        </p>
        <p className="pl-8 mb-3">
          2. Navigate to Bitcoin and enter deposit amount desired.
        </p>
        <p className="pl-8 mb-3">3. Click on &quot;Copy Reference&quot;</p>
        <p className="pl-8 mb-3">4. Paste Reference on Bitcon Reference</p>
        <p className="pl-8 mb-3">
          5. Confirm transfer and send proof of payment at:
          sales@pinnacleftx.com
        </p>
      </div>
      <div className="flex flex-col justify-center items-center ">
        <button
          className="shadow-md p-4 w-[80%] rounded-md text-semibold"
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
          className="shadow-md p-4 w-[80%] rounded-md text-semibold"
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
    </>
  );
}
