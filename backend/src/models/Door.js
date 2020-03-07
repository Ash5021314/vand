const mongoose = require("mongoose");

const doorSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
      trim: true
    },
    hero_image: {
      type: String,
      required: true
    },
    colorfrontDoor: {
      type: String,
      required: true,
      trim: true
    },
    sideDoor: {
      type: String,
      required: true,
      trim: true
    },
    picDoor: {
      type: String,
      required: true,
      trim: true
    },
    manufacture: {
      type: String,
      required: true,
      trim: true
    },
    doorName: {
      type: String,
      required: true,
      trim: true
    },
    blockSize: {
      type: String,
      required: true,
      trim: true
    },
    seria: {
      type: String,
      required: true,
      trim: true
    },
    tolPol: {
      type: String,
      required: true,
      trim: true
    },
    tolList: {
      type: String,
      required: true,
      trim: true
    },
    classStrong: {
      type: String,
      required: true,
      trim: true
    },
    valEks: {
      type: String,
      required: true,
      trim: true
    },
    classProchnost: {
      type: String,
      required: true,
      trim: true
    },
    petli: {
      type: String,
      required: true,
      trim: true
    },
    protivosyom: {
      type: String,
      required: true,
      trim: true
    },
    regulirovka: {
      type: String,
      required: true,
      trim: true
    },
    box: {
      type: String,
      required: true,
      trim: true
    },
    vilet: {
      type: String,
      required: true,
      trim: true
    },
    kreplenie: {
      type: String,
      required: true,
      trim: true
    },
    utiplitel: {
      type: String,
      required: true,
      trim: true
    },
    usilenieWinter: {
      type: String,
      required: true,
      trim: true
    },
    nightMove: {
      type: String,
      required: true,
      trim: true
    },
    termorazriv: {
      type: String,
      required: true,
      trim: true
    },
    cinkogrunt: {
      type: String,
      required: true,
      trim: true
    },
    doorHeight: {
      type: String,
      required: true,
      trim: true
    },
    price: {
      type: String,
      required: true,
      trim: true
    },
    fullPrice: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

const Door = mongoose.model("Door", doorSchema, "Doors");

module.exports = Door;
