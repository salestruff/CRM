import React from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import LeadForm from "./components/LeadForm";
import ContactForm from "./components/ContactForm";
import OpportunityForm from "./components/OpportunityForm";
import TaskForm from "./components/TaskForm";
import InvoiceForm from "./components/InvoiceForm";
import BillingForm from "./components/BillingForm";

const App = () => {
  return (
    <>
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <Routes>
        <Route path="/lead" element={<LeadForm />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/opportunity" element={<OpportunityForm />} />
        <Route path="/task" element={<TaskForm />} />
        <Route path="/invoice" element={<InvoiceForm />} />
        <Route path="/billing" element={<BillingForm />} />
        <Route path="*" element={<div className="text-center mt-10 text-lg">Please select a section.</div>} />
      </Routes>
    </div>
    <Toaster/>
    </>
  );
};

export default App;
