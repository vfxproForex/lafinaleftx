"use client";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import cookies from "js-cookie";
import { useAppSelector } from "@/utlis/store";

export default function UserDetailsPage() {
  const accountDetails = useAppSelector((state) => state.accountDetails);

  const firstNameRef = useRef<HTMLInputElement>(null);
  const middleNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const contactNumberRef = useRef<HTMLInputElement>(null);
  const bankNameRef = useRef<HTMLInputElement>(null);
  const nameOnCardRef = useRef<HTMLInputElement>(null);
  const accountTypeRef = useRef<HTMLInputElement>(null);
  const accountNameRef = useRef<HTMLInputElement>(null);
  const accountNumberRef = useRef<HTMLInputElement>(null);
  const cardNumberRef = useRef<HTMLInputElement>(null);
  const expiryDateRef = useRef<HTMLInputElement>(null);
  const cvvNumberRef = useRef<HTMLInputElement>(null);

  async function postUserDetails(e: any) {
    e.preventDefault();

    const userIdCookie = cookies.get("qid");

    const firstName = firstNameRef.current?.value;
    const middleName = middleNameRef.current?.value;
    const lastname = lastNameRef.current?.value;
    const contactNumber = contactNumberRef.current?.value;
    const bankName = bankNameRef.current?.value;
    const nameOnCard = nameOnCardRef.current?.value;
    const accountType = accountTypeRef.current?.value;
    const accountName = accountNameRef.current?.value;
    const accountNumber = accountNumberRef.current?.value;
    const cardNumber = cardNumberRef.current?.value;
    const expiryDate = expiryDateRef.current?.value;
    const cvvNumber = cvvNumberRef.current?.value;

    const requestBody = {
      query: `
mutation {
  updateDetailsOrCrateDetails(
    userDetailsInput:{
      firstname:"${firstName}",
      middleName: "${middleName}",
      lastname: "${lastname}",
      contactNumber: "${contactNumber}",
      bankName: "${bankName}",
      accountName: "${accountName}",
      accountNumber: "${accountNumber}",
      accountType: "${accountType}",
      nameOnCard: "${nameOnCard}",
      cardNumber:"${cardNumber}",
      expiryDate: "${expiryDate}",
      cvv: "${cvvNumber}",
      userId: "${userIdCookie}",
    }
    userId: "${userIdCookie}"
  ) {


    firstname
    middleName
    lastname
    contactNumber
    bankName
    accountName
    accountNumber
    accountType
    nameOnCard
    cardNumber
    expiryDate
    cvv
  }
}
`,
    };

    const response = await fetch("http://localhost:3000/graphql", {
      method: "post",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
      },
    });

    toast.promise(response.json(), {
      loading: "Loading",
      success: "Saved",
      error: "Error",
    });
  }

  const router = useRouter();
  const setToken = async () => {
    const cookie = await cookies.get("qid");

    if (!cookie) {
      return router.push("/signin");
    }
  };

  useEffect(() => {
    setToken();
  }, []);
  return (
    <div className="flex flex-col gap-y-5 p-2">
      <h1 className="text-2xl">User Details</h1>
      <input
        className="bg-gray-300 outline-none p-2 rounded-md "
        type="text"
        placeholder="First name"
        ref={firstNameRef}
      />
      <input
        className="bg-gray-300 outline-none p-2 rounded-md "
        type="text"
        placeholder="Middle name"
        ref={middleNameRef}
      />
      <input
        className="bg-gray-300 outline-none p-2 rounded-md "
        type="text"
        placeholder="Last name"
        ref={lastNameRef}
      />
      <input
        className="bg-gray-300 outline-none p-2 rounded-md "
        type="text"
        placeholder="Contact Number"
        ref={contactNumberRef}
      />

      <div className="flex flex-col gap-y-5">
        <p>For withdrawals purposes:</p>
        <input
          className="bg-gray-300 outline-none p-2 rounded-md "
          type="text"
          placeholder="Bank name"
          ref={bankNameRef}
        />
        <input
          className="bg-gray-300 outline-none p-2 rounded-md "
          type="text"
          placeholder="Account type"
          ref={accountTypeRef}
        />
        <input
          className="bg-gray-300 outline-none p-2 rounded-md "
          type="text"
          placeholder="Account name"
          ref={accountNameRef}
        />
        <input
          className="bg-gray-300 outline-none p-2 rounded-md "
          type="text"
          placeholder="Account number"
          ref={accountNumberRef}
        />
        <input
          className="bg-gray-300 outline-none p-2 rounded-md "
          type="text"
          placeholder="Card No."
          ref={cardNumberRef}
        />
        <input
          className="bg-gray-300 outline-none p-2 rounded-md "
          type="text"
          placeholder="Name on Card"
          ref={nameOnCardRef}
        />
        <input
          className="bg-gray-300 outline-none p-2 rounded-md "
          type="text"
          placeholder="Expiry Date"
          ref={expiryDateRef}
        />
        <input
          className="bg-gray-300 outline-none p-2 rounded-md "
          type="text"
          placeholder="CVV no."
          ref={cvvNumberRef}
        />
      </div>
      <div className="flex justify-center">
        <button
          className="bg-gray-500 w-[15vh] text-center p-2 rounded-md"
          onClick={postUserDetails}
        >
          Save
        </button>
      </div>
      <Toaster />
    </div>
  );
}
