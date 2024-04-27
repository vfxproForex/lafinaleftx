"use client";
import Link from "next/link";
import HeaderNavigation from "./nav";
import { useState } from "react";
import { IconButton } from "./icon.button";
import MenuIcon from "@/lib/menu.icon";
import { CloseIcon } from "@/lib/close.icon";
import { Syne } from "next/font/google";
import { useAppSelector } from "@/utlis/store";

const syne = Syne({ subsets: ["latin"] });

export default function AccountNav() {
  const userBalance = useAppSelector((state) => {
    const currentBalance = new Intl.NumberFormat("en-ZA", {
      style: "currency",
      currency: "ZAR",
    }).format(state.userState.balance);
    return currentBalance;
  });
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  function toggleHandler() {
    if (toggleMenu) {
      return setToggleMenu(false);
    } else if (!toggleMenu) {
      return setToggleMenu(true);
    }
  }
  return (
    <HeaderNavigation>
      {toggleMenu ? (
        <div>
          <li className="text-gray-500  px-3 py-3">
            <Link href={"/account/accountDetails/"}>Account Details</Link>
          </li>
          <li className="text-gray-500 shadow-md rounded-md px-3 py-3">
            <Link href={"/account/deposits"}>Make a Deposit</Link>
          </li>
          <li className="text-gray-500 rounded-md px-3 py-3">
            <Link href={"/account/withdraw"}>Withdraw</Link>
          </li>
          <li className="text-gray-500  px-3 py-3">
            <Link href={"#"}>Sign Out</Link>
          </li>
          <li className="px-3 py-3 ">
            <p>Current Balance: {userBalance}</p>
          </li>
        </div>
      ) : (
        <div className={"px-3 py-3"}>
          <Link
            href={"/account"}
            className={`text-xl font-semibold ${syne.className}`}
          >
            Pinnacle
          </Link>
        </div>
      )}
      {toggleMenu ? (
        <div className={"px-3 py-3"}>
          <IconButton onClick={toggleHandler}>
            <CloseIcon />
          </IconButton>
        </div>
      ) : (
        <div className={"px-3 py-3"}>
          <IconButton onClick={toggleHandler}>
            <MenuIcon />
          </IconButton>
        </div>
      )}
    </HeaderNavigation>
  );
}
