const Booking = require("../models/Bookings");

const BookTicket = async (req, res) => {
  const { movieId, user, seatNumber, date, show } = req.body;
  try {
    const newBooking = new Booking({ movieId, user, seatNumber, date, show });
    await newBooking.save();

    return res.status(201).json({ message: "Ticket booked successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Booking failed" });
  }
};

const GetBookings = async (req, res) => {
  const { movieId, date, show } = req.body;
  try {
    const booking = await Booking.find({
      movieId: movieId,
      date: date,
      show: show,
    });
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    bookedSeates = [];
    booking.forEach((seat) => bookedSeates.push(seat.seatNumber));
    return res.status(200).json(bookedSeates);
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch booking" });
  }
};

module.exports = { BookTicket, GetBookings };
