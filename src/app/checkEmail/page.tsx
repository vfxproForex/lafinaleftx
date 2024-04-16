"use client";

import { handleClientScriptLoad } from "next/script";

export default function CheckEmailPage() {
  const handleEmailButtonClick = () => {
    // Open the default email client
    window.location.href = `mailto:`;
  };
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center align-middle">
      <h1 className="text-center">Please check your emails and confirm</h1>
      <button onClick={handleEmailButtonClick}>Open E-Mail App</button>
    </div>
  );
}
