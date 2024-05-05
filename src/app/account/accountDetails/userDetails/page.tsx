"use client";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import cookies from "js-cookie";
import { useAppDispatch, useAppSelector } from "@/utlis/store";
import CreateUserDetailsApi from "@/app/actions/addUserDetailsApi";
import { createAccountDetailsAction } from "@/utlis/accountDetails";
import SubmitButton from "@/components/submitButton";

export default function UserDetailsPage() {
  const accountDetails = useAppSelector((state) => state.accountDetails);
  const dispatch = useAppDispatch();

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

    const userId = cookies.get("qid");

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

    try {
      const userDetails = await toast.promise(
        CreateUserDetailsApi(
          firstName!,
          middleName!,
          lastname!,
          contactNumber!,
          bankName!,
          accountName!,
          accountNumber!,
          accountType!,
          nameOnCard!,
          cardNumber!,
          expiryDate!,
          cvvNumber!,
          userId!
        ),
        {
          loading: "Loading",
          success: "Saved",
          error: "Error",
        }
      );
      dispatch(createAccountDetailsAction(userDetails));
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  const router = useRouter();
  const setToken = async () => {
    const cookie = await cookies.get("qid");

    if (!cookie) {
      return router.push("/signin");
    }
  };

  useEffect(() => {
    if (accountDetails.userId !== undefined || null) {
      firstNameRef.current!.value = accountDetails.firstname || "";
      middleNameRef.current!.value = accountDetails.middleName || "";
      lastNameRef.current!.value = accountDetails.lastname || "";
      contactNumberRef.current!.value = accountDetails.contactNumber || "";
      bankNameRef.current!.value = accountDetails.bankName || "";
      nameOnCardRef.current!.value = accountDetails.nameOnCard || "";
      accountTypeRef.current!.value = accountDetails.accountType || "";
      accountNameRef.current!.value = accountDetails.accountName || "";
      accountNumberRef.current!.value = accountDetails.accountNumber || "";
      cardNumberRef.current!.value = accountDetails.cardNumber || "";
      expiryDateRef.current!.value = accountDetails.expiryDate || "";
      cvvNumberRef.current!.value = accountDetails.cvv || "";
    }
    setToken();
  }, []);
  return (
    <div className="flex flex-col gap-y-5 p-2">
      <h1
        className={`p-2 m-2 text-lg bg-cs_bg-200 shadow-lg text-cs_text-200 rounded-md flex-none w-2/4`}
      >
        User Details
      </h1>
      <input
        className="bg-cs_primary-100 text-white outline-none p-2 rounded-md m-2"
        type="text"
        placeholder="First name"
        ref={firstNameRef}
      />
      <input
        className="bg-cs_primary-100 text-white outline-none p-2 rounded-md m-2"
        type="text"
        placeholder="Middle name"
        ref={middleNameRef}
      />
      <input
        className="bg-cs_primary-100 text-white outline-none p-2 rounded-md m-2"
        type="text"
        placeholder="Last name"
        ref={lastNameRef}
      />
      <input
        className="bg-cs_primary-100 text-white outline-none p-2 rounded-md m-2"
        type="text"
        placeholder="Contact Number"
        ref={contactNumberRef}
      />

      <div className="flex flex-col gap-y-5">
        <p
          className={`p-2 m-2 text-lg bg-cs_bg-200 shadow-lg text-cs_text-200 rounded-md flex-none w-2/4`}
        >
          For withdrawals purposes:
        </p>
        <input
          className="bg-cs_primary-100 text-white outline-none p-2 rounded-md m-2"
          type="text"
          placeholder="Bank name"
          ref={bankNameRef}
        />
        <input
          className="bg-cs_primary-100 text-white outline-none p-2 rounded-md m-2"
          type="text"
          placeholder="Account type"
          ref={accountTypeRef}
        />
        <input
          className="bg-cs_primary-100 text-white outline-none p-2 rounded-md m-2"
          type="text"
          placeholder="Account name"
          ref={accountNameRef}
        />
        <input
          className="bg-cs_primary-100 text-white outline-none p-2 rounded-md m-2"
          type="text"
          placeholder="Account number"
          ref={accountNumberRef}
        />
        <input
          className="bg-cs_primary-100 text-white outline-none p-2 rounded-md m-2"
          type="text"
          placeholder="Card No."
          ref={cardNumberRef}
        />
        <input
          className="bg-cs_primary-100 text-white outline-none p-2 rounded-md m-2"
          type="text"
          placeholder="Name on Card"
          ref={nameOnCardRef}
        />
        <input
          className="bg-cs_primary-100 text-white outline-none p-2 rounded-md m-2"
          type="text"
          placeholder="Expiry Date"
          ref={expiryDateRef}
        />
        <input
          className="bg-cs_primary-100 text-white outline-none p-2 rounded-md m-2"
          type="text"
          placeholder="CVV no."
          ref={cvvNumberRef}
        />
      </div>
      <div className="flex justify-center">
        <SubmitButton
          key={"save user deitalsc"}
          loadingTitle="Saving..."
          buttonCaption="Save"
        />
      </div>
      <Toaster />
    </div>
  );
}
