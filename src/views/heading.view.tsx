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
      <div className="rounded-md justify-center flex flex-col">
        <div className="">
          <Image
            className="max-h-[60vh]"
            src={headingImage}
            alt=""
            quality={100}
            placeholder="blur"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className="absolute text-white p-2 flex flex-col rounded-lg h-[1/2]  md:bg-opacity-30">
          <h1 className="text-3xl">Welcome to Pinnacle FTX</h1>
          <p className="text-sm">An Important Step towards Financial Success</p>
          <div className="p-2">
            <Link
              href={"/register"}
              className="bg-gray-500 p-2 rounded-lg mt-3 "
            >
              Get Started
            </Link>
          </div>
          <h1 className={`mt-7 text-xl ${sync.className}`}>
            Trade Triumphantly
          </h1>
        </div>
      </div>
    </div>
  );
}
