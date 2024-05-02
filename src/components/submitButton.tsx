"use client";
import { FC } from "react";
import { useFormStatus } from "react-dom";
import { Toaster } from "react-hot-toast";

interface IProps {
  buttonCaption: string;
  loadingTitle: string;
}
const SubmitButton: FC<IProps> = (props) => {
  const { pending } = useFormStatus();

  return (
    <button
      aria-disabled={pending}
      className={`p-2 ${
        pending
          ? "bg-cs_primary-300 text-cs_primary-300"
          : "text-cs_primary-100 bg-cs_accent-200"
      }  w-[20vh] mb-6 rounded-md font-semibold `}
      type="submit"
    >
      {!pending ? props.buttonCaption : props.loadingTitle}
      <Toaster />
    </button>
  );
};
export default SubmitButton;
