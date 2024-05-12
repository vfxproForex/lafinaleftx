import { ReactNode } from "react";
import graphImage from "../../../public/luanch.jpeg";

export default function RegisterLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div
      style={{
        backgroundImage: `url(${graphImage.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="w-screen h-screen backdrop-blur-lg"
    >
      {children}
    </div>
  );
}
