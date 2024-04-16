"use client";
import { Syne } from "next/font/google";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { useRef } from "react";
import signApi from "../actions/signIn";

const syne = Syne({ subsets: ["latin"] });

export default function SignInPage() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    try {
      await toast.promise(signApi(email!, password!), {
        success: "Welcome",
        error: "Error",
        loading: "Loading...",
      });
    } catch (err: any) {
      toast.error(err.message);
    }
  };
  return (
    <form
      onSubmit={onSubmit}
      className="h-screen w-screen flex gap-y-5 flex-col p-2 justify-center align-middle"
    >
      <div className="bg-gray-300 rounded-md shadow-md p-2 ml-10 mr-10 h-[13vh] flex flex-col justify-center align-middle">
        <h1 className={`text-3xl font-bold ${syne.className} text-center`}>
          Pinnacle FTX
        </h1>
        <p className="text-center text-sm">Sign In in to your account.</p>
      </div>
      <div className="min-h-[25vh] flex flex-col rounded-lg justify-center align-middle bg-white gap-y-20">
        <div className="p-5 flex flex-col gap-y-5">
          <input
            ref={emailRef}
            className="bg-gray-300 outline-none p-2 rounded-md "
            type="email"
            placeholder="E-Mail"
          />

          <input
            ref={passwordRef}
            className="bg-gray-300 outline-none p-2 rounded-md "
            type={"password"}
            placeholder="Password"
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-3 justify-center items-center ">
        <button
          type="submit"
          className="bg-gray-500 w-[15vh] text-center p-2 rounded-md"
          //aria-disabled={}
        >
          Sign In
        </button>
        <Link
          className="text-center font-semibold text-blue-700"
          href={"/passwordReset"}
        >
          Forgot password?
        </Link>
      </div>
      <Toaster />
    </form>
  );
}
