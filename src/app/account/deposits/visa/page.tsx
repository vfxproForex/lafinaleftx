"use client";
import { FaCcVisa } from "react-icons/fa";
import { useEffect, useState } from "react";
import { v4 } from "uuid";
import Cookies from "js-cookie";

function generateSignature(
  data: Record<string, string>,
  passphrase: string
): string {
  return ""; // Placeholder, replace with your implementation
}

const VisaDepositPage = () => {
  const [paymentId, setPaymentId] = useState("");

  const [formData, setFormData] = useState<Record<string, string>>({
    merchant_id: "23103831", //10000100
    merchant_key: "z6cubevrh5ojc", //46f0cd694581a
    return_url: "http://localhost:3001/account/deposits/successful/",
    cancel_url: "http://localhost:3001/account/deposits/",
    notify_url: "http://localhost:3001/account/",
    name_first: "",
    name_last: "",
    email_address: "",
    m_payment_id: paymentId,
    amount: "",
    item_name: "Pinnacle FTX",
  });

  useEffect(() => {
    const value = v4();
    setPaymentId(value);
  }, []);

  useEffect(() => {
    formData.signature = generateSignature(
      formData,
      "a1Sdiwnzziworsdfwefadfbeargar"
    ); //jt7NOE43FZPn
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
      const response = await fetch("http://localhost:3000/graphql", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      Cookies.set("amount", formData.amount);
      return response.json();
    } catch (err) {
      throw err;
    }
  };

  return (
    <form
      action="https://www.payfast.co.za/eng/process" //https://sandbox.payfast.co.za/eng/process
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
      <FaCcVisa className="mb-10" style={{ color: "black", fontSize: 128 }} />
      <div className="flex flex-col gap-y-5 p-5 w-full">
        <h1 className="text-2xl font-medium">Deposit Details:</h1>
        <div className="flex flex-col gap-y-2">
          <input
            className="p-2 outline-none bg-gray-300 rounded-md"
            placeholder="Deposit amount"
            type="number"
            onChange={(e) => handleInputChange(e, "amount")}
            value={formData.amount}
          />
          <input
            className="p-2 outline-none bg-gray-300 rounded-md"
            placeholder="First Name"
            onChange={(e) => handleInputChange(e, "name_first")}
            value={formData.name_first}
          />
          <input
            className="p-2 outline-none bg-gray-300 rounded-md"
            placeholder="Last Name"
            onChange={(e) => handleInputChange(e, "name_last")}
            value={formData.name_last}
          />
          <input
            className="p-2 outline-none bg-gray-300 rounded-md"
            placeholder="E-Mail Address"
            onChange={(e) => handleInputChange(e, "email_address")}
            value={formData.email_address}
          />
        </div>
        <div className="flex justify-center items-center">
          <button
            className="p-2 w-[20vh] font-semibold bg-gray-500 rounded-md"
            type="submit"
          >
            Deposit
          </button>
        </div>
      </div>
    </form>
  );
};

export default VisaDepositPage;
