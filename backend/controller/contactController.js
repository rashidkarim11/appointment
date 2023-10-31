// contactController.js
const Contact = require("../model/contactModel");

// Create New contact
exports.newContact = async (req, res, next) => {//controller function for creating a new appointment
  console.log("req.body", req.body);
  const { name, phone, email } = req.body;// destructuring to extract specific properties

  try {
    const contactData = await Contact.create({//to create a new appointment document in the MongoDB database 
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

//retrieves all appointment records from the database and sends them as a response.
exports.getAllContacts = async (req, res, next) => {
  const response = await Contact.find();

  res.status(200).json({
    success: true,
    data: response,
  });
};
