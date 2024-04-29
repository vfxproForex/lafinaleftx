"use client";
import ToastContiner from "@/components/taostContainer";
import { Bounce, toast } from "react-toastify";
import Cookies from "js-cookie";

export default function EthriumModal() {
  return (
    <>
      <div>
        <p className="font-medium mb-5">
          How to fund your account with USDT-TRC20
        </p>
        <p className="pl-8 mb-3">
          1. Complete the form below and select &quot;Submit&quot;.
        </p>
        <p className="pl-8 mb-3">
          2. You will be directed to a window displaying a USDT(TRC20) wallet
          address.
        </p>
        <p className="pl-8 mb-3">
          3. Copy the USDT(TRC20) wallet address and login to your personal
          USDT(TRC20) wallet.
        </p>
        <p className="pl-8 mb-3">
          4. Transfer the desired amount to the USDT(TRC20) wallet address you
          copied.
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
