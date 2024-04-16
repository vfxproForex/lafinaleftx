import { FacebookIcon, InstagramIcon, TwitterIcon } from "@/lib/facebook.icon";

export default function ContactUsView() {
  return (
    <div className="bg-gray-300 p-2">
      <h1 className="text-3xl mb-6 font-semibold">Contact Us.</h1>
      <div id="address " className="gap-y-3 pl-5 flex flex-col mb-10">
        <p>Pinnacle FTX</p>
        <p>500 Francois Street</p>
        <p>San Francisco, CA 94158</p>
      </div>

      <div className="gap-y-3 flex flex-col pl-5 mb-10">
        <p>Tel. 123-456-7890</p>
        <p>E-mail. info@pinnacleftx.com</p>
      </div>

      <div className="flex gap-x-6 mb-10 pl-5 mt-10">
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
      </div>

      <div className="mb-6 mt-6 gap-y-7 flex flex-col">
        <h3 className="text-xl font-semibold">Subscribe to Newsletter</h3>
        <input
          type="text"
          placeholder="Enter your E-mail"
          className="p-2 rounded-lg"
        />
        <button className="p-2 bg-gray-500 rounded-lg text-lg font-semibold">
          Join
        </button>
      </div>

      <div>
        <p className="text-center text-gray-500">
          {new Date().getFullYear().toString()} &copy; Pinnacle FTX
        </p>
      </div>
    </div>
  );
}
