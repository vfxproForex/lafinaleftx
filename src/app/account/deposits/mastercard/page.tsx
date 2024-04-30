"use client";
import { generateSignature } from "@/app/api/pay";
import { useEffect, useState } from "react";
import { FaCcMastercard } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import { v4 } from "uuid";
import Cookies from "js-cookie";

export default function MasterCardPage() {
  const [paymentId, setPaymentId] = useState("");

  const [formData, setFormData] = useState<Record<string, string>>({
    merchant_id: "10000100",
    merchant_key: "46f0cd694581a",
    return_url: "http://localhost:3001/account/deposits/successful/",
    cancel_url: "http://localhost:3000/account/deposits", //create the page
    notify_url: "http://localhost:3000/account/", //create the page
    name_first: "",
    name_last: "",
    email_address: "",
    m_payment_id: paymentId,
    amount: "",
    item_name: "Pinnacle FTX",
  });
  // Generate signature
  const myPassphrase = "jt7NOE43FZPn";
  formData.signature = generateSignature(formData, myPassphrase);

  const testClick = async () => {
    const userId = await Cookies.get("qid");
    const requestBody = {
      query: `mutation {
        createDeposit(amount: "${formData.amount}", userId: "${userId}"){
            depositAmount
            }
        }`,
    };

    await fetch(
      `${
        process.env.NODE_ENV === "production"
          ? process.env.backend_server
          : process.env.dev_server
      }`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      }
    );
  };

  useEffect(() => {
    //payment id generation
    const value = v4();
    setPaymentId(value);
  }, []);

  const htmlForm = (
    <form
      action={`https://sandbox.payfast.co.za/eng/process`}
      method="post"
      className="flex flex-col justify-center items-center"
      onSubmit={testClick}
    >
      {Object.entries(formData).map(
        ([key, value]) =>
          value !== "" && (
            <input key={key} name={key} type="hidden" value={value.trim()} />
          )
      )}
      <FaCcMastercard
        className="mb-10"
        style={{ color: "black", fontSize: "128" }}
      />

      <div className="flex flex-col gap-y-5 p-5 w-full">
        <h1 className="text-2xl font-medium ">Deposit Details:</h1>
        <div className="flex flex-col gap-y-2">
          <input
            className="p-2 outline-none bg-gray-300 rounded-md"
            placeholder="Deposit amount"
            type="number"
            onChange={(e) => {
              setFormData({ ...formData, amount: e.target.value });
            }}
            value={formData.amount}
          />
          <input
            className="p-2 outline-none bg-gray-300 rounded-md"
            placeholder="First Name"
            onChange={(e) => {
              setFormData({ ...formData, first_name: e.target.value });
            }}
            value={formData.first_name}
          />
          <input
            className="p-2 outline-none bg-gray-300 rounded-md"
            placeholder="Last Name"
            onChange={(e) => {
              setFormData({ ...formData, last_name: e.target.value });
            }}
            value={formData.last_name}
          />
          <input
            className="p-2 outline-none bg-gray-300 rounded-md"
            placeholder="E-Mail Addlress"
            onChange={(e) => {
              setFormData({ ...formData, email_address: e.target.value });
            }}
            value={formData.email_address}
          />
        </div>
        <div className="flex justify-center items-center">
          <button
            className="p-2 w-[20vh] font-semibold bg-gray-500 rounded-md "
            type="submit"
            //onClick={testClick}
          >
            Deposit
          </button>
        </div>
      </div>
    </form>
  );

  return htmlForm;
}
