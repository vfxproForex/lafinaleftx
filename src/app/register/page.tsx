"use client";
import { Syne } from "next/font/google";
import { redirect } from "next/navigation";
import SubmitButton from "@/components/submitButton";
import toast, { Toaster } from "react-hot-toast";
import registerApi from "../actions/register";
import Link from "next/link";

const syne = Syne({ subsets: ["latin"] });

export default function RegisterPage() {
  const registerHandler = async (formData: FormData) => {
    const rawformData = {
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
    };

    const email = rawformData!.email;
    const password = rawformData!.password;
    const confirmPassword = rawformData!.confirmPassword;
    if (password !== confirmPassword) {
      return await toast.error(
        "Please make sure that email and passwords are correct."
      );
    }

    await toast.promise(registerApi(email, password), {
      loading: "Loading",
      success: "Got the data",
      error: "Please ",
    });
    redirect("/checkEmail");
  };

  return (
    <form
      action={registerHandler}
      className="h-screen flex flex-col w-screen justify-center align-middle"
    >
      <div className="backdrop-blur-sm bg-white/30  h-[50vh] m-5 p-2 rounded-md">
        <div>
          <div className="p-3 w-full grid">
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
          />
          <input
            name="password"
            className="bg-cs_primary-100 outline-none p-2 rounded-md m-2"
            type={"password"}
            placeholder="Password"
          />
          <input
            name={"confirmPassword"}
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
