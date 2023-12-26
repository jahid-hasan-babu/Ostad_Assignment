const express = require("express");

const app = express();
const router = require("./src/routes/api");
const path = require("path");
require("dotenv").config();

const URL = process.env.DATABASE_URL;

const cookieParser = require("cookie-parser");

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

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());

//Rata limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use(limiter);

//Database connection
mongoose
  .connect(URL)
  .then((res) => {
    console.log("Database connected...");
  })
  .catch((e) => {
    console.log(e);
  });

//api call
app.use("/api/v1", router);

//Front end Tagging
app.use(express.static("client/dist"));
app.use("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
});

app.use("/api/v1", router);

module.exports = app;
