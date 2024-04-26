"use client";
export default function CheckEmailPage() {
  const handleEmailButtonClick = () => {
    // Open the default email client
    window.location.href = `mailto:`;
  };
  return (
    <div className="h-screen w-screen flex flex-col justify-center gap-y-3 items-center align-middle">
      <h1 className="text-center">Please check your emails and confirm</h1>
      <button
        onClick={handleEmailButtonClick}
        className="p-2 bg-gray-500 rounded-md "
      >
        Open E-Mail App
      </button>
    </div>
  );
}
