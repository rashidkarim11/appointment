const PORT = process.env.PORT || 3006;
const express = require("express");
const connectDatabase = require("./config/database");
const bodyParser = require("body-parser");//allows the application to parse the request body data
const cors = require("cors");//It allows your API to be accessed from different domains.

const dotenv = require("dotenv");// used to load environment variables from a ".env" file into the Node.js environment

connectDatabase();

const app = express();//creates an instance of the Express application
dotenv.config();//to load these variables from the .env file.

// config
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "backend/config/config.env" });
}
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const appointment = require("./routes/appointment");
const contact = require("./routes/contact");

//configure the Express application to use the "contact" and "appointment" routers for routes.
app.use("/api/v1", contact);
app.use("/api/v1", appointment);

app.get("/", (req, res) => {
  res.send("Server is Running! 🚀");
});

module.exports = app;
// UncaughtException Error
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  process.exit(1);
});

// connectDatabase();

const server = app.listen(PORT, () => {
  console.log(`Server running`, PORT);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  server.close(() => {
    process.exit(1);
  });
});
