const mongoose = require("mongoose");

const doorSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
      trim: true,
      unique: true
    },
    price: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Door = mongoose.model("Door", doorSchema, "Doors");

module.exports = Door;
