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

    await toast.promise(
      fetch("http://localhost:3000/graphql", {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (res.status !== 200 && res.status !== 201) {
            console.log(res.json());
            return console.log("Try Logging in..");
          }
          return res.json();
        })
        .then(async (data) => {
          if (data.error) {
            return console.log(`Error: ${data.errors.errors.message}`);
          }
          //console.log(data.data.register.user.email);
          //await data.data.register.user.email;
          await data;
          return route.push("/signin");
        }),

      {
        loading: "Loading",
        success: "E-Mail confirm, please login.",
        error: `Please contact support`,
      }
    );
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
      <h1>Small test: {params.slug}</h1>
      <Toaster />
    </div>
  );
}
