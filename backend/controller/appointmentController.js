// appointmentController.js
const Appointment = require("../model/appointmentModel");

// Create New appointment
exports.newAppointment = async (req, res, next) => {//controller function for creating a new appointment
  console.log("req.body", req.body);
  const { name, date, time, contact } = req.body;// destructuring to extract specific properties

  try {
    //to create a new appointment document in the MongoDB database 
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
      error: error,
    });
  }
};

//retrieves all appointment records from the database and sends them as a response.
exports.getAllAppointment = async (req, res, next) => {
  const response = await Appointment.find();

  res.status(200).json({
    success: true,
    data: response,
  });
};
