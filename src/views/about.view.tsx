import Image from "next/image";
import aboutImage from "../../public/trade2.jpg";

export default function AboutUsSection() {
  return (
    <div className="mt-6 p-2 text-white">
      <div className="bg-cs_primary-100 p-4 rounded-lg">
        <h1 className="text-3xl mb-6 font-bold">About Us</h1>
        <p className="mb-6 text-sm text-justify">
          Why choose Pinnacle FTX to handle your tradings and financial
          services? For individuals looking for help with tax filing, we offer a
          personal touch and precision that is unattainable with do-it-yourself
          software. For businesses, we provide services that assess overall
          financial health, and we deliver regular reports that are clear,
          digestible and actionable.
        </p>
        <Image
          src={aboutImage}
          alt=""
          style={{
            objectFit: "cover",
            borderRadius: 10,
            opacity: 80,
          }}
          placeholder="blur"
        />
      </div>
    </div>
  );
}
