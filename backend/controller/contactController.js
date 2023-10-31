// contactController.js
const Contact = require("../model/contactModel");

// Create New contact
exports.newContact = async (req, res, next) => {//controller function for creating a new contact
  console.log("req.body", req.body);
  const { name, phone, email } = req.body; //destructuring to extract specific properties

  try {
    const contactData = await Contact.create({//new appointment document in the MongoDB database 
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
exports.getAllContacts= async (req, res, next) => {//controller function for retrieving all appointments

  const response = await Contact.find();//retrieves all records from the "appointments" collection

  res.status(200).json({
    success: true,
    data: response,
  });
};
