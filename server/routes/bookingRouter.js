const { BookTicket, GetBookings } = require("../controllers/book_ticket");

const router = require("express").Router();

router.post("/", BookTicket);
router.get("/:bookingId", GetBookings);

module.exports = router;
