"use client";
import { Syne } from "next/font/google";
import Image from "next/image";
import getStartedImage from "../../../public/luanch.jpg";
import { redirect } from "next/navigation";
import SubmitButton from "@/components/submitButton";
import toast, { Toaster } from "react-hot-toast";
import registerApi from "../actions/register";

const syne = Syne({ subsets: ["latin"] });

export default function RegisterPage() {
  const registerHandler = async (formData: FormData) => {
    const rawformData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const email = rawformData!.email;
    const password = rawformData!.password;
    await toast.promise(registerApi(email, password), {
      loading: "Loading",
      success: "Got the data",
      error: "Error when fetching",
    });
    redirect("/checkemail");
  };

  return (
    <form
      action={registerHandler}
      className="h-screen flex flex-col w-screen justify-center align-middle"
    >
      <div className="bg-white h-[50vh] m-5 p-2 rounded-md">
        <div>
          <div className="absolute text-white p-3">
            <h1 className={`text-4xl font-bold ${syne.className}`}>
              Pinnacle FTX
            </h1>
            <p>One small step...</p>
            <p>Ignite..!</p>
          </div>
          <Image
            src={getStartedImage}
            objectFit="contain"
            placeholder="blur"
            alt=""
            style={{
              borderRadius: 8,
            }}
          />
        </div>
        <div className="flex flex-col  justify-center mt-10 align-middle">
          <input
            name="email"
            className="bg-gray-300 outline-none p-2 rounded-md m-2"
            type="email"
            placeholder="E-Mail Address"
          />
          <input
            name="password"
            className="bg-gray-300 outline-none p-2 rounded-md m-2"
            type={"password"}
            placeholder="Password"
          />
          <input
            className="bg-gray-300 p-2 rounded-md m-2"
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
      <Toaster />
    </form>
  );
}
