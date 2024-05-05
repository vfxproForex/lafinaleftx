"use client";
import Link from "next/link";
import HeaderNavigation from "./nav";
import { useEffect, useState } from "react";
import { IconButton } from "./icon.button";
import MenuIcon from "@/lib/menu.icon";
import { CloseIcon } from "@/lib/close.icon";
import { Syne } from "next/font/google";
import { useAppSelector } from "@/utlis/store";
import { FaHome } from "react-icons/fa";
import Cookies from "js-cookie";
import { redirect, usePathname } from "next/navigation";

const syne = Syne({ subsets: ["latin"] });

export default function AccountNav() {
  const path = usePathname();

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

  //routing detecting
  useEffect(() => {
    setToggleMenu(false);
  }, [path]);
  return (
    <HeaderNavigation>
      {toggleMenu ? (
        <div className="">
          <li className="text-gray-500 shadow-md rounded-md px-3 py-3 animate-pulse shadow-black font-bold mt-2">
            <Link href={"/account/deposits"}>Fund My Account</Link>
          </li>
          <li className="text-gray-500 rounded-md px-3 py-3">
            <Link href={"/account/withdraw"}>Withdraw</Link>
          </li>
          <li className="text-gray-500  px-3 py-3">
            <Link href={"/account/withdrawals/"}>Withdrawals</Link>
          </li>
          <li className="text-gray-500  px-3 py-3">
            <Link href={"/account/transactions/"}>Transactions</Link>
          </li>
          <li className="text-gray-500  px-3 py-3">
            <button
              className={"text-red-500 font-bold"}
              onClick={async () => {
                await Cookies.remove("qid");
                redirect("/signin");
              }}
            >
              Sign Out
            </button>
          </li>
        </div>
      ) : (
        <div className={"px-3 py-3"}>
          <Link
            href={"/account"}
            className={`text-xl font-semibold ${syne.className} flex items-center gap-x-1`}
          >
            <FaHome style={{ color: "white", fontSize: "20px" }} />
            Pinnacle FTX
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
