const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();//to load these variables from the .env file
const MONGO_URI = process.env.MONGO_URI;//retrieves the MongoDB connection URI from the environment variables

console.log("mongo", process.env);

const connectDatabase = () => {
  mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })//called to establish a connection to the MongoDB database 
    .then(() => {//used to handle the successful connection
      console.log("Mongoose Connected");
    });
};

module.exports = connectDatabase;
