import { ReactNode } from "react";

export default function HeaderNavigation({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <ul className=" flex justify-between text-cs_text-100 p-4 caret-cs_primary-100 ">
      {children}
    </ul>
  );
}
