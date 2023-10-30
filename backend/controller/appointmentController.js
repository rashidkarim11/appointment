// appointmentController.js
const Appointment = require("../model/appointmentModel");

// Create New appointment
exports.newAppointment = async (req, res, next) => {
  console.log("req.body", req.body);
  const { name, date, time, contact } = req.body; // Extract appointmentInfo from the request body
  
  try {
    const appointmentData = await Appointment.create({
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
      error: "Appointment could not be created",
    });
  }
};

// appointmentController.js
exports.getAllAppointment = async (req, res, next) => {
  // Your code to retrieve appointment data should go here
  res.status(200).json({
    success: true,
    // Data retrieved from your database
  });
};
