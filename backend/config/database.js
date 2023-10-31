const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const MONGO_URI = process.env.MONGO_URI;//retrieves the MongoDB connection URI from the environment variables

console.log("mongo", process.env);

const connectDatabase = () => {
  mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })//establish a connection to the MongoDB databa
    .then(() => {// to handle the successful connection
      console.log("Mongoose Connected");
    });
};

module.exports = connectDatabase;
