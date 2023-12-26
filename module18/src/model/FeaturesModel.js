const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    img: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const FeaturesModel = mongoose.model("features", DataSchema);

module.exports = FeaturesModel;
