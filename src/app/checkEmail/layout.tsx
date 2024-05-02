import { ReactNode } from "react";
import graphImage from "../../../public/luanch.jpeg";

export default function CheckEmailLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div
      style={{
        backgroundImage: `url(${graphImage.src})`,
        objectFit: "cover",
      }}
      //className="w-screen h-screen backdrop-blur-lg"
    >
      {children}
    </div>
  );
}
