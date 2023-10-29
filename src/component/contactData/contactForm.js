import React from "react";

const ContactForm = () => {
  return (
    <div className="px-8 mt-8 mb-4 text-[poppins]">
      <h1 className="text-center">Add Contact </h1>

      <form className="bg-blue-400 py-10 mx-auto text-center mt-4 border-none border-gray-700 sm:w-3/4 md:w-2/4 lg:w-5/4 py-16">
        <div className="mb-4 flex flex-col px-10">
          <label className="text-left">Name:</label>
          <input
            type="text"
            placeholder=" Enter your name"
            required
            className="border-none rounded border-gray-700 px-4 py-3 mt-2"
          />
        </div>

        <div className="mb-4 flex flex-col px-10">
          <label className="text-left">Phone:</label>
          <input
            type="number"
            placeholder="Enter your Phone number"
            required
            className="border-none rounded border-gray-700 px-4 py-3 mt-2"
          />
        </div>

        <div className="mb-4 flex flex-col px-10">
          <label className="text-left">Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="border-none rounded border-gray-700 px-4 py-3 mt-2"
          />
        </div>

        <button
          type="submit"
          className="border-none bg-white rounded border-gray-700 px-10  py-3 mt-2"
        >
          Add Contacts
        </button>
      </form>
    </div>
  );
};

export default ContactForm;