const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  movieId: String,
  userId: String,
  seatNumber: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
