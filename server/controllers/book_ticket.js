const Booking = require("../models/Bookings");

const BookTicket = async (req, res) => {
  const { movieId, userId, seatNumber } = req.body;
  try {
    const newBooking = new Booking({ movieId, userId, seatNumber });
    await newBooking.save();

    return res.status(201).json({ message: "Ticket booked successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Booking failed" });
  }
};

const GetBookings = async (req, res) => {
  const { bookingId } = req.params;
  try {
    const booking = await Booking.findById(bookingId);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    return res.status(200).json(booking);
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch booking" });
  }
};

module.exports = { BookTicket,GetBookings };
