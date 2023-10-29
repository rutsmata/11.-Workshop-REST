const mongoose = require("mongoose");

const furnitureSchema = new mongoose.Schema({
  make: {
    type: String,
    required: true,
    minLength: [4, "Length should be at leat 4 symbols long"],
  },
  model: {
    type: String,
    required: true,
    minLength: [4, "Length should be at leat 4 symbols long"],
  },
  year: {
    type: Number,
    required: true,
    min: [1950, "Year must be between 1950 and 2050"],
    max: [2050, "Year must be between 1950 and 2050"],
  },
  description: {
    type: String,
    required: true,
    minLength: [11, "Length should be more than 10 symbols long"],
  },
  price: {
    type: Number,
    required: true,
    min: [1, "Price must be positive number"],
  },
  img: {
    type: String,
    required: true,
  },
  material: {
    type: String,
    required: false,
  },
  _ownerId: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
});

const Furniture = mongoose.model("Furniture", furnitureSchema);

module.exports = Furniture;
