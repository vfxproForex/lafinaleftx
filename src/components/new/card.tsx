"use client";
import { ReactNode } from "react";

const CardUI = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div className={`w-full h-full rounded-md relative p-8 border-2`}>
      {children}
    </div>
  );
};

export default CardUI;
