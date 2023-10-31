import React from "react";
import { useState } from "react";
import { addToContacts } from "../../api/contact";

const ContactForm = () => {
  const [contact, setcontact] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [addContact, setAddContact] = useState(false);

  const addDataToContacts = async (e) => {
    e.preventDefault();
    try {
      setAddContact(true);
      const data = await addToContacts(contact);
      setAddContact(false);
      alert("Added Contact");
    } catch (error) {
      setAddContact(false);
      alert("Cannot add Contact");
      console.log(error);
    }
  };
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
            value={contact.name}
            onChange={(e) => setcontact({ ...contact, name: e.target.value })}
          />
        </div>

        <div className="mb-4 flex flex-col px-10">
          <label className="text-left">Phone:</label>
          <input
            type="number"
            placeholder="Enter your Phone phone"
            required
            className="border-none rounded border-gray-700 px-4 py-3 mt-2"
            value={contact.phone}
            onChange={(e) => setcontact({ ...contact, phone: e.target.value })}
          />
        </div>

        <div className="mb-4 flex flex-col px-10">
          <label className="text-left">Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="border-none rounded border-gray-700 px-4 py-3 mt-2"
            value={contact.email}
            onChange={(e) => setcontact({ ...contact, email: e.target.value })}
          />
        </div>

        <button
          className="border-none bg-white rounded border-gray-700 px-10  py-3 mt-2"
          onClick={addDataToContacts}
          type="submit"
        >
          {addContact ? (
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
};

export default ContactForm;
