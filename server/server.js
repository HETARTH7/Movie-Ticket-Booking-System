const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://0.0.0.0/moviedb");
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});
// dotenv.config();

app.use("/user", require("./routes/userRouter"));
app.use("/movies", require("./routes/movieRouter"));
app.use("/booking", require("./routes/bookingRouter"));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`listenting at port ${port}`);
});
