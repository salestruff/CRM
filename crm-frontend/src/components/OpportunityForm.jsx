import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";

const OpportunityForm = () => {
  const { Opportunity } = useAuthStore();
  const [opportunity, setOpportunity] = useState({ lead: "", stage: "", amount: "", close_date: "" });

  const handleSubmit = async () => {
    try {
      await Opportunity(opportunity);
      alert("Opportunity saved");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-white p-6 rounded-xl shadow-2xl ring-1 ring-gray-800 border">
      <h2 className="text-xl font-semibold mb-2">Add Opportunity</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
      {["lead", "stage", "amount", "close_date"].map((field) => (
        <input
          key={field}
          className="w-full px-3 py-2 border rounded-md"
          placeholder={field}
          name={field}
          type={field.includes("date") ? "date" : "text"}
          value={opportunity[field]}
          onChange={(e) => setOpportunity({ ...opportunity, [field]: e.target.value })}
        />
      ))}
      <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700" onClick={handleSubmit}>
        Submit
      </button>
      </form>
    </div>
  );
};

export default OpportunityForm;
