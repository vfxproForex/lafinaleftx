"use client";

import { useEffect } from "react";
import Cookies from "js-cookie";
import { redirect } from "next/navigation";

export default function SuccessPage() {
  //show notifiction

  async function confirmDeposit() {
    if (Cookies.get("amount") !== undefined) {
      const amount = Cookies.get("amount");
      const userId = Cookies.get("qid");

      const requestBody = {
        query: `
            mutation {
                    confirmDeposit(amount: ${amount}, userId: "${userId}")
                }
`,
      };

      try {
        const response = await fetch("http://localhost:3000/graphql", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        });
        const data = await response.json();
        console.log(data.data);

        if (data.data.confirmDeposit === true) {
          console.log(data.data.confirmDeposit);
          Cookies.remove("amount");
          return redirect("/account");
        }
        return response;
      } catch (err) {
        return redirect("/account");
      }
    } else {
      return redirect("/account");
    }
  }

  useEffect(() => {
    confirmDeposit();
  }, []);

  return (
    <div>
      <h1>Deposit Success</h1>
    </div>
  );
}
