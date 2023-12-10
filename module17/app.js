const express = require("express");
const app = express();
const router = require("./src/routes/api");
require("dotenv").config();
const mongoose = require("mongoose");
const url = process.env.DATABASE_URL;

//security middleware
const cors = require("cors");
const helmet = require("helmet");
const hpp = require("hpp");
const mongoSanitize = require("express-mongo-sanitize");
const rateLimit = require("express-rate-limit");

//security middleware implement
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(mongoSanitize());

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

//reteLimit configure
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });
app.use(limiter);

mongoose
  .connect(url)
  .then((res) => {
    console.log("Database connected...");
  })
  .catch((e) => {
    console.log(e);
  });

//api call
app.use("/api/v1", router);

//undefine route
app.use("*", (req, res) => {
  res.status(404).json({ status: "fail", data: "not found" });
});

module.exports = app;
