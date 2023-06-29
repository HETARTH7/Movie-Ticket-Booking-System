const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true, 'username is required']
    },
    password:{
        type:String,
        required:[true, 'password is required']
    },
})

const userModel = mongoose.model('users', userSchema)

module.exports = userModel