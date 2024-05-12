"use client";
import { Syne } from "next/font/google";
import SubmitButton from "@/components/submitButton";
import toast, { Toaster } from "react-hot-toast";
import registerApi from "../actions/register";
import Link from "next/link";
import { useRef } from "react";

const syne = Syne({ subsets: ["latin"] });

export default function RegisterPage() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const registerHandler = async (e: any) => {
    e.preventDefault();

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const confirmPassword = confirmPasswordRef.current?.value;

    console.log("running");
    console.log(
      `email: ${email}, password: ${password}, confirmPassword: ${confirmPassword}`
    );

    if (password !== confirmPassword) {
      return await toast.error(
        "Please make sure that email and passwords are correct."
      );
    }

    try {
      await toast.promise(registerApi(email, password), {
        loading: "Registering, please wait.",
        success: "Please check your emails",
        error: (error) => error.message,
      });
    } catch (err) {
      console.log(`error: ${err}`);
      throw err;
    }
  };

  return (
    <form
      onSubmit={registerHandler}
      className="h-screen flex flex-col w-screen justify-center md:items-center  align-middle"
    >
      <div className="backdrop-blur-sm bg-white/30  min:h-[50vh] md:w-[50vh] m-5 p-2 rounded-md">
        <div>
          <div className="p-2 w-full grid">
            <Link
              href={"/"}
              className={`text-4xl text-center font-bold ${syne.className}`}
            >
              Pinnacle FTX
            </Link>
            <label className="text-center font-semibold text-cs_text-100">
              Secure your wealth.
            </label>
          </div>
        </div>
        <div className="flex flex-col text-cs_text-200 justify-center mt-10 align-middle">
          <input
            name="email"
            className="bg-cs_primary-100 outline-none p-2 rounded-md m-2"
            type="email"
            placeholder="E-Mail Address"
            ref={emailRef}
          />
          <input
            name="password"
            className="bg-cs_primary-100 outline-none p-2 rounded-md m-2"
            type={"password"}
            ref={passwordRef}
            placeholder="Password"
          />
          <input
            name={"confirmPassword"}
            ref={confirmPasswordRef}
            className="bg-cs_primary-100 p-2 rounded-md m-2"
            type={"password"}
            placeholder="Confirm Password"
          />
        </div>
        <div className="flex justify-center mt-10  flex-col items-center">
          <SubmitButton
            buttonCaption="Register"
            loadingTitle="Registering..."
          />
        </div>
      </div>
    </form>
  );
}
