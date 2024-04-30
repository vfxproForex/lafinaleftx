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
    try {
      const requestBody = {
        query: `
        mutation {
            confirmEmail( id: "${params.slug}")
        }
`,
      };

      const response = await fetch("http://127.0.0.1:3000/graphql", {
        method: "post",
        body: JSON.stringify(requestBody),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        res.json();
      });

      const data = response;
      return data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col gap-y-5 justify-center items-center align-middle">
      <h1 className="text-3xl font-semibold">Pinnacle FTX</h1>
      <h1 className="text-xl font-semibold">Welcome fellow investor.</h1>
      <p className="text-sm">Please Confirm E-Mail.</p>

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
