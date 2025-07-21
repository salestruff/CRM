// src/store/useAuthStore.js
import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";
import { toast } from "react-hot-toast";
export const useAuthStore = create(() => ({
  // Lead
  Lead: async (lead) => {
    try {
      await axiosInstance.post("/leads/", lead);
      toast.success("Lead Created!");
    } catch (error) {
      toast.error(error.response?.data?.message || "Lead creation failed");
    }
  },

  // Contact
  Contact: async (contact) => {
    try {
      await axiosInstance.post("/contacts/", contact);
      toast.success("Contact Message Created!");
    } catch (error) {
      toast.error(error.response?.data?.message || "Contact creation failed");
    }
  },

  // Opportunity
  Opportunity: async (opportunity) => {
    try {
      await axiosInstance.post("/opportunities/", opportunity);
      toast.success("Opportunity Created!");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Opportunity creation failed"
      );
    }
  },

  // Task
  Task: async (task) => {
    try {
      await axiosInstance.post("/tasks/", task);
      toast.success("Task Created!");
    } catch (error) {
      toast.error(error.response?.data?.message || "Task creation failed");
    }
  },

  // Invoice
  Invoice: async (invoice) => {
    try {
      await axiosInstance.post("/invoices/", invoice);
      toast.success("Invoice Created!");
    } catch (error) {
      toast.error(error.response?.data?.message || "Invoice creation failed");
    }
  },

  // Billing
  Billing: async (billing) => {
    try {
      await axiosInstance.post("/billings/", billing);
      toast.success("Billing Saved!");
    } catch (error) {
      toast.error(error.response?.data?.message || "Billing creation failed");
    }
  },
}));
