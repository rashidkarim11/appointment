
import React from "react";
import { useState } from "react";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};


function AppointmentForm() {
  const [date, setDate] = useState(""); // Initialize date state with useState
  const [time, setTime] = useState(""); 

  return (
    <div className="px-8 mt-8 mb-4 text-[poppins]">
      <h1 className="text-center">Take An Appointment </h1>

      <form className="bg-blue-400 py-10 mx-auto text-center mt-4 border-none border-gray-700 sm:w-3/4 md:w-2/4 lg:w-5/4 py-16">
        <div className="mb-4 flex flex-col px-10">
          <label  className="text-left">
            Name:
          </label>
          <input
            type="text"
            placeholder=" Enter your name"
            required
            className="border-none rounded border-gray-700 px-4 py-3 mt-2"
          />
        </div>
        <div className="mb-4 flex flex-col px-10">
          <label className="text-left">
            Contact: 
          </label>
          <input
            type="number"
            placeholder="Contact"
            required
            className="border-none rounded border-gray-700 px-4 py-3 mt-2"
          />
        </div>
        <div className="mb-4 flex flex-col px-10">
          <label className="text-left">
            Date: 
            </label>
            <input
            type="date"
            name="date"
            min={getTodayString()}
            value={date}
            onChange={(e) =>  setDate(e.target.value)}
            required
            aria-label="Date Picker"
            className="border-none rounded border-gray-700 px-4 py-3 mt-2"
          />
        </div>
        <div className="mb-4 flex flex-col px-10">
          <label className="text-left">
            Time: 
            </label>
            <input
          type="time"
          name="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          aria-label="Time Picker"
          className="border-none rounded border-gray-700 px-4 py-3 mt-2"
        />
        </div>
        <button
          type="submit"
          className="border-none bg-white rounded border-gray-700 px-10  py-3 mt-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AppointmentForm;

