"use client";
import AccountNav from "@/components/accountNav";
import { AppStore, makeStore } from "@/utlis/store";
import { ReactNode, useRef } from "react";
import { Provider } from "react-redux";

export default function AccountLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }
  return (
    <div className="max-w-screen h-screen overflow-x-hidden mx-auto">
      <Provider store={storeRef.current}>
        <AccountNav />
        {children}
      </Provider>
    </div>
  );
}
