const express = require("express");
const app = new express();
const router = require("./src/routes/api");
require("dotenv").config();

const URL = process.env.DATABASE_URL;

//security middleware
const cors = require("cors");
const helmet = require("helmet");
const hpp = require("hpp");
const mongoSanitizer = require("express-mongo-sanitize");
const rateLimit = require("express-rate-limit");
const xss = require("xss-clean");

//Database
const mongoose = require("mongoose");

//Security middleware implement

app.use(cors());
app.use(helmet());
app.use(xss());
app.use(hpp());
app.use(mongoSanitizer());

//Rata limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use(limiter);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

//Database connection
mongoose
  .connect(URL)
  .then((res) => {
    console.log("Database Connected...");
  })
  .catch((err) => {
    console.log(err);
  });

//api call

app.use("/api/v1", router);

// undefine route
app.use("*", (req, res) => {
  res.status(404).json({ status: "fail", data: "Not Found" });
});

module.exports = app;
