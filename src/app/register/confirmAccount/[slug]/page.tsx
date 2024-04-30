"use client";
import confirmAccountApi from "@/app/actions/confirmAccount";
import SubmitButton from "@/components/submitButton";
import { redirect } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export default function ConfirmAccountPage({
  params,
}: {
  params: { slug: string };
}) {
  const confirmEmailHandler = async () => {
    const redisId = await params.slug.toString();

    try {
      await toast.promise(confirmAccountApi(redisId), {
        loading: "Loading",
        success: "Got the data",
        error: "Error when fetching",
      });
      redirect("/signin");
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  return (
    <form
      action={confirmEmailHandler}
      className="h-screen w-screen flex flex-col gap-y-5 justify-center items-center align-middle"
    >
      <h1 className="text-3xl font-semibold">Pinnacle FTX</h1>
      <h1 className="text-xl font-semibold">Welcome fellow investor.</h1>
      <p className="text-sm">Please Confirm E-Mail.</p>
      <SubmitButton
        buttonCaption="Confirm E-Mail"
        loadingTitle="Confirm, Please Wait..."
      />
      <Toaster />
    </form>
  );
}
