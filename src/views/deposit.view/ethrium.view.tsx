"use client";
import ToastContiner from "@/components/taostContainer";
import { Bounce, toast } from "react-toastify";
import Cookies from "js-cookie";

export default function EthriumModal() {
  return (
    <>
      <div className="text-cs_text-200">
        <p className="text-md font-medium mb-5">
          How to fund your account with USDT-TRC20
        </p>
        <p className="text-sm pl-8 mb-3">
          1. Complete the form below and select &quot;Submit&quot;.
        </p>
        <p className="text-sm pl-8 mb-3">
          2. You will be directed to a window displaying a USDT(TRC20) wallet
          address.
        </p>
        <p className="text-sm pl-8 mb-3">
          3. Copy the USDT(TRC20) wallet address and login to your personal
          USDT(TRC20) wallet.
        </p>
        <p className="text-sm pl-8 mb-3">
          4. Transfer the desired amount to the USDT(TRC20) wallet address you
          copied.
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
            navigator.clipboard.writeText(
              "0x1128b2cac1c8c10748b2770a4cbb4fd8902cdd1a"
            );
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
    </>
  );
}
