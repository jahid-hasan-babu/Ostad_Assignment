const mongoose = require("mongoose");

// Define the Mongoose schema
const OrderSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  courses: {
    type: String,
    required: true,
  },
  relationship: {
    type: String,
    required: true,
  },
  admissionDate: {
    type: String,
    required: true,
  },
});

// Create the Mongoose model using the schema
const studentsModel = mongoose.model("students", OrderSchema);

module.exports = studentsModel;
