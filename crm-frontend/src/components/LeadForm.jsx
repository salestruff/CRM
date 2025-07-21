import React, { useState } from 'react';
import { useAuthStore } from "../store/useAuthStore";
const LeadForm = () => {
 const { Lead } = useAuthStore();
  const [lead, setLead] = useState({
    name: '',
    email: '',
    phone: '',
    status: '',
  });

  const handleChange = (e) => {
    setLead({ ...lead, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await Lead(lead);
    setLead({ name: '', email: '', phone: '', status: '' });
  } catch (err) {
    console.error("Unexpected error:", err);
  }
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-white p-6 rounded-xl shadow-2xl ring-1 ring-gray-800 border">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Lead</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {['name', 'email', 'phone', 'status'].map((field) => (
          <input
            key={field}
            name={field}
            value={lead[field]}
            onChange={handleChange}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        ))}
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LeadForm;
