const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({//creates a new Mongoose schema
  //defines field in the schema
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("appointments", appointmentSchema);//exports the schema as a Mongoose model
