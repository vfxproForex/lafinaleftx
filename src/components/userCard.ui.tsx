"use client";
import { useAppSelector } from "@/utlis/store";
import Link from "next/link";
import { FC } from "react";
import toast, { Toaster } from "react-hot-toast";
import { IoMdNotifications } from "react-icons/io";

const UserCardUI: FC = () => {
  const userDetails = useAppSelector((state) => {
    return state.accountDetails.firstname;
  });
  const notifationHandler = () => {
    toast("No new Notifications.");
  };
  return (
    <div className={`flex p-3 justify-between items-center`}>
      <Link href={"/account/accountDetails"}>
        <div className={`flex justify-between`}>
          <div
            className={
              "w-16 h-16 rounded-full bg-cs_primary-200 flex flex-col justify-center items-center"
            }
          >
            <div className={"w-4 h-4 rounded-full bg-cs_primary-300"}></div>
            <div className="w-7 h-7 rounded-md bg-cs_primary-100"></div>
          </div>

          <div className="grid pt-2 pb-2 pl-5 ">
            <label className="font-bold text-lg text-cs_text-200">
              {userDetails}
            </label>
            <label className="font-semibold text-cs_primary-300">
              Investor
            </label>
          </div>
        </div>
      </Link>
      <div>
        <IoMdNotifications
          className={"w-10 h-10 text-white"}
          onClick={notifationHandler}
        />
      </div>
      <Toaster />
    </div>
  );
};

export default UserCardUI;
