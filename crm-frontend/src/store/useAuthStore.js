import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";
export const useAuthStore = create(() => ({
  Lead: async (lead) => {
    try {
      await axiosInstance.post("/leads/", lead);
      alert("Lead Created!");
    } catch (error) {
      alert(error.response?.data?.message);
    }
  },
}));
