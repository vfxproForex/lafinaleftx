import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pinnacle FTX Ventures",
  description: "Pinnacle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} h-full w-full overflow-auto bg-cs_bg-100`}
      >
        <div className={"h-full"}>{children}</div>
      </body>
    </html>
  );
}
