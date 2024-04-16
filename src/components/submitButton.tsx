"use client";

import { FC, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { Toaster, toast } from "react-hot-toast";

interface IProps {
  buttonCaption: string;
  loadingTitle: string;
}
const SubmitButton: FC<IProps> = (props) => {
  const { pending } = useFormStatus();

  //useEffect(() => {
  //if(!pending){
  //toast.promise('Registering', {
  //duration: 4000,
  //position: 'top-center',
  //},
  //loading: 'Loading',
  //success: 'Got the data',
  //error: 'Error when fetching',
  //)
  //}
  //}, []);

  return (
    <button
      aria-disabled={pending}
      className={`p-2 ${
        pending ? "bg-gray-300" : "bg-gray-500"
      }  w-[20vh] mb-6 rounded-md`}
      type="submit"
    >
      {!pending ? props.buttonCaption : props.loadingTitle}
      <Toaster />
    </button>
  );
};
export default SubmitButton;
