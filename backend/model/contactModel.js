const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({//creates a new Mongoose schema 
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("contact", contactSchema);//exports the schema as a Mongoose model
