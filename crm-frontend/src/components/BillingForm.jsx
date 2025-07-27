import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";

const BillingForm = () => {
 const { Billing } = useAuthStore();
  const [billing, setBilling] = useState({
    invoice: "",
    payment_method: "",
    transaction_id: "",
    amount_paid: "",
    status: "Paid",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Billing(billing);
      setBilling({
        invoice: "",
        payment_method: "",
        transaction_id: "",
        amount_paid: "",
        status: "Paid",
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-white p-6 rounded-xl shadow-2xl ring-1 ring-gray-800 border">
      <h2 className="text-xl font-semibold mb-2">Record Billing</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
      {["invoice", "payment_method", "transaction_id", "amount_paid", "status"].map((field) => (
        <input
          key={field}
          className="w-full px-3 py-2 border rounded-md"
          placeholder={field}
          value={billing[field]}
          onChange={(e) => setBilling({ ...billing, [field]: e.target.value })}
        />
      ))}
      <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700" onClick={handleSubmit}>
        Submit
      </button>
      </form>
    </div>
  );
};

export default BillingForm;
