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
    const redisId = await params.slug.toString();

    const requestBody = {
      query: `
        mutation {
            confirmEmail(id: "${redisId}")
        }
`,
    };

    try {
      const response = await fetch(
        `${
          process.env.NODE_ENV === "production"
            ? process.env.backend_server
            : process.env.dev_server
        }`,
        {
          method: "post",
          body: JSON.stringify(requestBody),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then(async (res) => {
        await res.json();
      });

      const data = await response;
      route.push("/signin");
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
