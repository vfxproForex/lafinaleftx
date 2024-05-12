"use client";
import { useRef } from "react";

export default function PayTest() {
  const amountRef = useRef(null);

  return (
    <form
      name="Checkout"
      action="https://testsecure.peachpayments.com/checkout"
      method="POST"
      acceptCharset="utf-8"
      className="flex flex-col p-5 bg-blue-200 justify-center items-center"
    >
      <input type="hidden" name="amount" value="350" />
      <input
        type="hidden"
        name="authentication.entityId"
        value="8ac7a4ca68c22c4d0168c2caab2e0025"
      />
      <input type="hidden" name="currency" value="ZAR" />
      <input type="hidden" name="defaultPaymentMethod" value="CARD" />
      <input type="hidden" name="merchantTransactionId" value="Test1234" />
      <input type="hidden" name="nonce" value="JHGJSGHDSKJHGJDHGJH" />
      <input type="hidden" name="paymentType" value="DB" />
      <input
        type="hidden"
        name="shopperResultUrl"
        value="https://webhook.site/4e9b63bf-0d99-4d62-bd24-1d36ca866e1b"
      />
      <input
        type="hidden"
        name="signature"
        value="311ed8e11e2da00d98c7479ca390a5396fe643e13629d850243dada877963afd"
      />
      <input type="submit" value="Continue to Payment Method" />
      <input type="number" placeholder="Amount" ref={amountRef} />

      <button type="submit">Pay</button>
    </form>
  );
}
