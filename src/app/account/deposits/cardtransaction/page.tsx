"use client";
import { FaCcMastercard, FaCcVisa } from "react-icons/fa";
import { useEffect, useState } from "react";
import { v4 } from "uuid";
import Cookies from "js-cookie";
import SubmitButton from "@/components/submitButton";

function generateSignature(
  data: Record<string, string>,
  passphrase: string
): string {
  return ""; // Placeholder, replace with your implementation
}

const CardTransactionPage = () => {
  const [paymentId, setPaymentId] = useState("");

  const [formData, setFormData] = useState<Record<string, string>>({
    merchant_id: `${
      process.env.NODE_ENV === "production" ? "23103831" : "10000100"
    }`,
    merchant_key:
      process.env.NODE_ENV === "production" ? "z6cubevrh5ojc" : "46f0cd694581a",
    return_url:
      process.env.NODE_ENV === "production"
        ? `${process.env.PAYFAST_PROD}/account/deposits/successful/`
        : `${process.env.PAYFAST_DEV}/account/deposits/successful/`,
    cancel_url:
      process.env.NODE_ENV === "production"
        ? `${process.env.PAYFAST_PROD}/account/deposits/`
        : `${process.env.PAYFAST_DEV}/account/deposits/`,
    name_first: "",
    name_last: "",
    email_address: "",
    m_payment_id: paymentId,
    amount: "",
    item_name: "Pinnacle FTX Account Deposit",
  });

  useEffect(() => {
    const value = v4();
    setPaymentId(value);
  }, []);

  useEffect(() => {
    formData.signature = generateSignature(
      formData,
      process.env.NODE_ENV === "production"
        ? "a1Sdiwnzziworsdfwefadfbeargar"
        : "jt7NOE43FZPn"
    ); //
  }, [formData]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    setFormData({ ...formData, [key]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const userId = Cookies.get("qid");

    const requestBody = {
      query: `
            mutation {
                createDeposit(amount: ${formData.amount}, userId: "${userId}"){
            depositAmount
  }
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
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      await Cookies.set("amount", await `${formData.amount}`);
      return response.json();
    } catch (err) {
      throw err;
    }
  };

  return (
    <form
      action={
        process.env.NODE_ENV === "production"
          ? "https://www.payfast.co.za/eng/process"
          : "https://sandbox.payfast.co.za/eng/process"
      }
      method="post"
      className="flex flex-col justify-center items-center"
      onSubmit={handleSubmit}
    >
      {Object.entries(formData).map(
        ([key, value]) =>
          value !== "" && (
            <input key={key} name={key} type="hidden" value={value.trim()} />
          )
      )}
      <div className="grid grid-cols-2 gap-x-10 p-2 m-6 rounded-lg place-items-center bg-cs_primary-100">
        <FaCcMastercard
          style={{ fontSize: "64" }}
          className="text-cs_primary-300"
        />
        <FaCcVisa style={{ fontSize: "64" }} className="text-cs_primary-300" />
      </div>
      <div className="flex flex-col gap-y-5 p-5 w-full">
        <h1
          className={`p-2 text-lg bg-cs_bg-200 shadow-lg text-cs_text-200 rounded-md flex-none w-2/4`}
        >
          Deposit Details:
        </h1>
        <div className="flex flex-col gap-y-2">
          <input
            className="bg-cs_primary-100 outline-none p-2 rounded-md m-2"
            placeholder="Deposit amount"
            type="number"
            onChange={(e) => handleInputChange(e, "amount")}
            value={formData.amount}
          />
          <input
            className="bg-cs_primary-100 outline-none p-2 rounded-md m-2"
            placeholder="First Name"
            onChange={(e) => handleInputChange(e, "name_first")}
            value={formData.name_first}
          />
          <input
            className="bg-cs_primary-100 outline-none p-2 rounded-md m-2"
            placeholder="Last Name"
            onChange={(e) => handleInputChange(e, "name_last")}
            value={formData.name_last}
          />
          <input
            className="bg-cs_primary-100 outline-none p-2 rounded-md m-2"
            placeholder="E-Mail Address"
            onChange={(e) => handleInputChange(e, "email_address")}
            value={formData.email_address}
          />
        </div>
        <div className="flex justify-center items-center">
          <SubmitButton
            key={"deposit"}
            loadingTitle="Deposit, Please wait"
            buttonCaption="Deposit"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              console.log(process.env.dev_server);
            }}
          >
            Test
          </button>
        </div>
      </div>
    </form>
  );
};

export default CardTransactionPage;
