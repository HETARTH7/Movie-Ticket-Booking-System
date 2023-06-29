const express = require("express")
const dotenv = require("dotenv");
const connectDB = require("./config/db");

connectDB()

const app = express()
app.use(express.json())
dotenv.config()


app.use('/api/v1/user', require('./routes/userRoutes'))


const port = process.env.PORT || 9000


//listen port

app.listen(port, ()=>{
    console.log(`listenting at port ${port}`);
})