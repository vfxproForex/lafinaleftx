"use client";
import { useState } from "react";
import HeaderNavigation from "./nav";
import { Syne } from "next/font/google";
import Link from "next/link";
import { IconButton } from "./icon.button";
import MenuIcon from "@/lib/menu.icon";
import { CloseIcon } from "@/lib/close.icon";

const syne = Syne({ subsets: ["latin"] });

export default function HomeNavigation() {
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
      <h1
        className={`font-bold cursor-pointer ${toggleMenu ? "hidden" : null} ${
          syne.className
        }`}
      >
        Pinnacle FTX
      </h1>

      {toggleMenu ? (
        <div>
          <li className="text-gray-500  px-3 py-4">
            <Link href={"/about"}>About</Link>
          </li>
          <li className="text-gray-500  px-3 py-4">
            <Link href={"/copy"}>Copy Trading</Link>
          </li>
          <li className="text-gray-500  px-3 py-4">
            <Link href={"/contactus"}>Contact us</Link>
          </li>
          <li className="text-gray-500  px-3 py-4">
            <Link href={"/signin"}>Sign In</Link>
          </li>
          <li className="border-solid border-2 py-4 border-gray-500 bg-gray-500 text-white rounded-md pt-2 pb-2 pl-4 pr-3 font-semibold">
            <Link href={"/register"}>Register</Link>
          </li>
        </div>
      ) : null}
      {toggleMenu ? (
        <div>
          <IconButton onClick={toggleHandler}>
            <CloseIcon />
          </IconButton>
        </div>
      ) : (
        <IconButton onClick={toggleHandler}>
          <MenuIcon />
        </IconButton>
      )}
    </HeaderNavigation>
  );
}
