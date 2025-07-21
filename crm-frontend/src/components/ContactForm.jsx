import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";

const ContactForm = () => {
  const { Contact } = useAuthStore();
  const [contact, setContact] = useState({ lead: "", message: "" });

  const handleSubmit = async () => {
    try {
      await Contact(contact);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-white p-6 rounded-xl shadow-2xl ring-1 ring-gray-800 border">
      <h2 className="text-xl font-semibold mb-2">Add Contact Message</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
      <input
        className="w-full px-3 py-2 border rounded-md"
        placeholder="Lead ID"
        name="lead"
        value={contact.lead}
        onChange={(e) => setContact({ ...contact, lead: e.target.value })}
      />
      <textarea
        className="w-full px-3 py-2 border rounded-md"
        placeholder="Message"
        name="message"
        value={contact.message}
        onChange={(e) => setContact({ ...contact, message: e.target.value })}
      />
      <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700" onClick={handleSubmit}>
        Submit
      </button>
      </form>
    </div>
  );
};

export default ContactForm;
