const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://sibansu:root@cluster0.ouhxf89.mongodb.net/?retryWrites=true&w=majority",
            {
                useNewUrlParser: "true",
                useUnifiedTopology: "true"
            })
        if (conn) {
            console.log(`Connected with mongodb`);
        }
    } catch (error) {
        console.log(`monogo error ${error.message}`);
    }
}

module.exports = connectDB;