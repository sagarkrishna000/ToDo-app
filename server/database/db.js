const mongoose = require("mongoose");
require("dotenv").config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${USERNAME}:${PASSWORD}@todoapp.9q0zthf.mongodb.net/?retryWrites=true&w=majority&appName=ToDoApp`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Database connected");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
