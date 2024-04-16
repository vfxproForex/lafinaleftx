import HomeNavigation from "@/components/homeNav";
import Image from "next/image";
import headingImage from "../../public/trade3.jpg";
import Link from "next/link";
import { Syne } from "next/font/google";

const sync = Syne({ subsets: ["latin"], style: ["normal"] });

export default function HeadingViews() {
  return (
    <div>
      <HomeNavigation />
      <div className="mt-5 rounded-md justify-center flex flex-col">
        <Image
          src={headingImage}
          alt=""
          quality={100}
          placeholder="blur"
          style={{
            objectFit: "contain",
          }}
        />
        <div className="absolute  w-full gap-y-5  text-white flex flex-col items-center align-middle justify-center ">
          <h1 className="text-3xl">Welcome to Pinnacle FTX</h1>
          <p className="text-sm">An Important Step towards Financial Success</p>
          <Link href={"/register"} className="bg-gray-500 p-3 rounded-md">
            Get Started
          </Link>
          <h1 className={`mt-7 text-xl ${sync.className}`}>
            Trade Triumphantly
          </h1>
        </div>
      </div>
    </div>
  );
}
