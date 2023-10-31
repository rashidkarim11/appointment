// contactController.js
const Contact = require("../model/contactModel");

// Create New contact
exports.newContact = async (req, res, next) => {
  console.log("req.body", req.body);
  const { name, phone, email } = req.body; // Extract contactInfo from the request body

  try {
    const contactData = await Contact.create({
      name,
      phone,
      email,
    });

    res.status(201).json({
      success: true,
      contact: contactData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error,
    });
  }
};

// appointmentController.js
exports.getAllContacts = async (req, res, next) => {
  // Your code to retrieve appointment data should go here
  const response = await Contact.find();

  res.status(200).json({
    success: true,
    data: response,
  });
};
