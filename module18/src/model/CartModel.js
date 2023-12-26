const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    productID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    //if we use price in cart model we have suffers many problem in production level
    price: {
      type: String,
      required: true,
    },
    qty: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const CartModel = mongoose.model("carts", DataSchema);
module.exports = CartModel;
