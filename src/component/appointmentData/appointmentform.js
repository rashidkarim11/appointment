import React from "react";
import { useState } from "react";
import axios from "axios";
import { addToAppointment } from "../../api/appointment";

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

function AppointmentForm() {
  const [appointment, setappointment] = useState({
    name: "",
    date: "",
    time: "",
    contact: "",
  });

  const [addAppointment, setAddAppointment] = useState(false);

  const addDataToAppointment = async (e) => {
    e.preventDefault();
    try {
      setAddAppointment(true);
      const data = await addToAppointment(appointment);
      setAddAppointment(false);
      alert("Added Appointment");
    } catch (error) {
      setAddAppointment(false);
      alert("Cannot Appointment");
      console.log(error);
    }
  };

  return (
    <div className="px-8 mt-8 mb-4 text-[poppins]">
      <h1 className="text-center">Take An Appointment </h1>

      <form className="bg-blue-400 py-10 mx-auto text-center mt-4 border-none border-gray-700 sm:w-3/4 md:w-2/4 lg:w-5/4 py-16">
        <div className="mb-4 flex flex-col px-10">
          <label className="text-left">Name:</label>
          <input
            type="text"
            placeholder=" Enter your name"
            required
            className="border-none rounded border-gray-700 px-4 py-3 mt-2"
            value={appointment.name}
            onChange={(e) =>
              setappointment({ ...appointment, name: e.target.value })
            }
          />
        </div>
        <div className="mb-4 flex flex-col px-10">
          <label className="text-left">Contact:</label>
          <input
            type="number"
            placeholder="Contact"
            required
            className="border-none rounded border-gray-700 px-4 py-3 mt-2"
            value={appointment.contact}
            onChange={(e) =>
              setappointment({ ...appointment, contact: e.target.value })
            }
          />
        </div>
        <div className="mb-4 flex flex-col px-10">
          <label className="text-left">Date:</label>
          <input
            type="date"
            name="date"
            min={getTodayString()}
            value={appointment.date}
            onChange={(e) =>
              setappointment({ ...appointment, date: e.target.value })
            }
            required
            aria-label="Date Picker"
            className="border-none rounded border-gray-700 px-4 py-3 mt-2"
          />
        </div>
        <div className="mb-4 flex flex-col px-10">
          <label className="text-left">Time:</label>
          <input
            type="time"
            name="time"
            value={appointment.time}
            onChange={(e) =>
              setappointment({ ...appointment, time: e.target.value })
            }
            required
            aria-label="Time Picker"
            className="border-none rounded border-gray-700 px-4 py-3 mt-2"
          />
        </div>
        <button
          className="border-none bg-white rounded border-gray-700 px-10  py-3 mt-2"
          onClick={addDataToAppointment}
          type="submit"
        >
          {addAppointment ? (
            <div class="relative w-10 h-10">
              <div class="absolute top-0 left-0 w-full h-full">
                <div class="animate-spin rounded-full h-8 w-8 border-t-4 border-blue-500 border-solid border-4 border-r-0"></div>
              </div>
              <div class="flex items-center justify-center w-8 h-8 absolute top-0 left-0"></div>
            </div>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
}

export default AppointmentForm;
