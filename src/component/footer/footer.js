import React from "react";
import { FaPhone, FaCalendarPlus } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-blue-500 p-4 mt-8">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-sm font-bold flex items-center gap-4">
          <FaPhone /> Call us: (123) 456-7890
        </div>
        <div className="space-x-4 flex items-center text-white hover:text-gray-300">
          <FaPhone />
          <a href="/contact">Add Contact</a>
          <FaCalendarPlus />
          <a href="/appointment" className="text-white hover:text-gray-300">
            Add Appointment
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;