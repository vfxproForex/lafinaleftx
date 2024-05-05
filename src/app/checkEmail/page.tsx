"use client";
import Image from "next/image";
import checkEmailImage from "../../../public/checkEmailImage.jpeg";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function CheckEmailPage() {
  const path = usePathname();
  const handleEmailButtonClick = () => {
    window.location.href = `mailto:`;
  };
  useEffect(() => {
    toast("Please Confirm E-Mail");
  }, [path]);
  return (
    <div className="h-screen w-screen flex flex-col p-5 justify-center gap-y-3 items-center align-middle">
      <div className="backdrop-blur-sm bg-white/30 w-full flex flex-col justify-center items-center gap-y-5  min-h-[50vh] m-5 p-2 rounded-md">
        <Image
          src={checkEmailImage}
          alt={""}
          placeholder="blur"
          height={250}
          width={250}
          style={{
            objectFit: "contain",
            borderRadius: 20,
          }}
        />
        <button
          onClick={handleEmailButtonClick}
          className="p-2 text-cs_primary-100 bg-cs_accent-200 animate-bounce rounded-md "
        >
          Open E-Mail App
        </button>
      </div>
      <Toaster />
    </div>
  );
}
