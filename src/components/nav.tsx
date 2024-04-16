import { ReactNode } from "react";

export default function HeaderNavigation({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <ul className="flex justify-between p-4 bg-gray-300 ">{children}</ul>;
}
