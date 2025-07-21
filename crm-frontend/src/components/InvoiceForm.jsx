import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";

const InvoiceForm = () => {
 const { Invoice } = useAuthStore();
  const [invoice, setInvoice] = useState({ lead: "", issue_date: "", due_date: "", amount: "", status: "Pending" });

  const handleSubmit = async () => {
    try {
      await Invoice(invoice);
      alert("Invoice created");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-white p-6 rounded-xl shadow-2xl ring-1 ring-gray-800 border">
      <h2 className="text-xl font-semibold mb-2">Create Invoice</h2>
     <form onSubmit={handleSubmit} className="space-y-4">
      {["lead", "issue_date", "due_date", "amount", "status"].map((field) => (
        <input
          key={field}
          className="w-full px-3 py-2 border rounded-md"
          type={field.includes("date") ? "date" : "text"}
          placeholder={field}
          value={invoice[field]}
          onChange={(e) => setInvoice({ ...invoice, [field]: e.target.value })}
        />
      ))}
      <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700" onClick={handleSubmit}>
        Submit
      </button>
      </form>
    </div>
  );
};

export default InvoiceForm;
