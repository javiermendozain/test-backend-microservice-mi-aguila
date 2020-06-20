const mongoose = require("mongoose");
const { Schema } = mongoose;

const TripsSchema = new Schema({
  start: {
    date: Date,
    pickup_address: String,
    pickup_location: {
      type: { type: String },
      coordinates: { type: Array },
    },
  },
  end: {
    date: Date,
    pickup_address: String,
    pickup_location: {
      type: { type: String },
      coordinates: { type: Array },
    },
  },
  country: { name: String },
  city: { name: String },
  passenger: { first_name: String, last_name: String },
  driver: { first_name: String, last_name: String },
  car: { plate: String },
  status: String,
  check_code: String,
  createdAt: Date,
  updatedAt: Date,
  price: Number,
  driver_location: {
    type: { type: String },
    coordinates: { type: Array },
  },
});

TripsSchema.methods.toJSON = function () {
  return this.toObject();
};

module.exports = mongoose.model("trips", TripsSchema);
