// appointmentController.js
const Appointment = require("../model/appointmentModel");

// Create New appointment
exports.newAppointment = async (req, res, next) => {//controller function for creating a new appointment
  console.log("req.body", req.body);
  const { name, date, time, contact } = req.body; //destructuring to extract specific properties

  try {
    const appointmentData = await Appointment.create({//new appointment document in the MongoDB database 
      name,
      date,
      time,
      contact,
    });

    res.status(201).json({
      success: true,
      appointment: appointmentData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error,
    });
  }
};

// appointmentController.js
exports.getAllAppointment = async (req, res, next) => {//controller function for retrieving all appointments

  const response = await Appointment.find();//retrieves all records from the "appointments" collection

  res.status(200).json({
    success: true,
    data: response,
  });
};
