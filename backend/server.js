const PORT = process.env.PORT || 3005;
const express = require("express");
const connectDatabase = require("./config/database");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

connectDatabase();

const app = express();
dotenv.config();

// config
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "backend/config/config.env" });
}
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const appointment = require("./routes/appointment");

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
  console.log(`Server running`);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  server.close(() => {
    process.exit(1);
  });
});
