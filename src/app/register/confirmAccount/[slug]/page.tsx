"use client";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export default function ConfirmAccountPage({
  params,
}: {
  params: { slug: string };
}) {
  const route = useRouter();
  const confirmEmailHandler = async () => {
    const requestBody = {
      query: `
        mutation {
            confirmEmail(id: "${params.slug}")
        }
`,
    };

    const response = await fetch("http://localhost:3000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
      },
    });

    return await toast
      .promise(response.json(), {
        loading: "Loading",
        success: "Welcome To Pinnacle FTX Fellow Trader.",
        error: "Please contact support, unable to confirm email.",
      })
      .then(() => {
        return route.push("/signin");
      });
  };

  return (
    <div className="h-screen w-screen flex flex-col gap-y-5 justify-center items-center align-middle">
      <h1 className="text-3xl font-semibold">Pinnacle FTX</h1>
      <h1 className="text-xl font-semibold">Welcome fellow investor.</h1>
      <p className="text-sm">Confirm E-Mail.</p>

      <button
        className="bg-gray-500 w-[20vh] p-3 rounded-md font-bold text-bold"
        onClick={confirmEmailHandler}
      >
        Cofirm E-Mail
      </button>
      <Toaster />
    </div>
  );
}
