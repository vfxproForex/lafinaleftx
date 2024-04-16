export default function PasswordResetPage() {
  return (
    <div>
      <h1 className="text-4xl">Password Reset</h1>

      <input type="email" placeholder="E-Mail Address" />
      <button className={"bg-gray-500 font-semibold"}>Reset</button>
    </div>
  );
}
