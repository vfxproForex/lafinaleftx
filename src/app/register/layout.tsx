import { ReactNode } from "react";
import graphImage from "../../../public/luanch.jpeg";

export default function RegisterLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div
      style={{
        backgroundImage: `url(${graphImage.src})`,
      }}
      className="w-screen h-screen backdrop-blur-lg"
    >
      {children}
    </div>
  );
}
