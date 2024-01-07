const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    product: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const SalesModel = mongoose.model("sales", DataSchema);

module.exports = SalesModel;
