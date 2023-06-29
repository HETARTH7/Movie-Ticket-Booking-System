const userModel = require('../models/userModel')
const bcrypt = require('bcryptjs')

const registerController = async(req, res)=>{
    try {
        const existing = await userModel.findOne({ username: req.body.username })
        if (existing) {
            return res.status(200).send({ success: false})
        }
        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        req.body.password = hashedPassword
        const newUser = new userModel(req.body)
        await newUser.save()
        res.status(201).send({success: true })

    } catch (error) {
        console.log(error);
        res.status(500).send({ success: false })
    }
}

module.exports  = {registerController}