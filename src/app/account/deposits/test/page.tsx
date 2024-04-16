"use client";
import { useState } from "react";
// Function to generate signature
function generateSignature(
  data: Record<string, string>,
  passphrase: string
): string {
  // Implementation of generateSignature function
  // (You need to implement this function according to your logic)
  return ""; // Placeholder, replace with your implementation
}

const MyComponent: React.FC = () => {
  // State to hold form data
  const [formData, setFormData] = useState<Record<string, string>>({
    merchant_id: "10000100",
    merchant_key: "46f0cd694581a",
    return_url: "http://www.yourdomain.co.za/return_url",
    cancel_url: "http://www.yourdomain.co.za/cancel_url",
    notify_url: "http://www.yourdomain.co.za/notify_url",
    name_first: "First Name",
    name_last: "Last Name",
    email_address: "test@test.com",
    m_payment_id: "1234",
    amount: "0.00",
    item_name: "Order#123",
  });

  // Generate signature
  const myPassphrase = "jt7NOE43FZPn";
  formData.signature = generateSignature(formData, myPassphrase);

  // Generate HTML form
  const htmlForm = (
    <form action={`https://sandbox.payfast.co.za/eng/process`} method="post">
      {Object.entries(formData).map(
        ([key, value]) =>
          value !== "" && (
            <input key={key} name={key} type="hidden" value={value.trim()} />
          )
      )}
      <input
        value={formData.amount}
        onChange={(e) => {
          const value = e.target.value;

          setFormData({ ...formData, amount: value });
        }}
      />
      <input type="submit" value="Pay Now" />
    </form>
  );

  return htmlForm;
};

export default MyComponent;
