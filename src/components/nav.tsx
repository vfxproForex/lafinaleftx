import { ReactNode } from "react";

export default function HeaderNavigation({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <ul className="flex justify-between p-4 bg-gradient-to-r from-[#BFBFBF] to-[#a2a2a2] ">
      {children}
    </ul>
  );
}
