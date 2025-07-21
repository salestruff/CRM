import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Optional: `npm install lucide-react`

const navItems = [
  { path: "/lead", label: "Lead" },
  { path: "/contact", label: "Contact" },
  { path: "/opportunity", label: "Opportunity" },
  { path: "/task", label: "Task" },
  { path: "/invoice", label: "Invoice" },
  { path: "/billing", label: "Billing" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md rounded-md p-4 mb-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-blue-700">CRM Dashboard</h1>
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`mt-4 flex-col gap-2 md:mt-0 md:flex md:flex-row md:items-center md:justify-center ${
          open ? "flex" : "hidden md:flex"
        }`}
      >
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`px-4 py-2 rounded text-sm font-medium transition ${
              isActive(item.path)
                ? "bg-blue-600 text-white"
                : "text-blue-700 hover:bg-blue-100"
            }`}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
