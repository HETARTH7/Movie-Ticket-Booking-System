const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/moviedb", {
      useNewUrlParser: "true",
      useUnifiedTopology: "true",
    });
    if (conn) {
      console.log(`Connected with mongodb`);
    }
  } catch (error) {
    console.log(`monogo error ${error.message}`);
  }
};

module.exports = connectDB;
