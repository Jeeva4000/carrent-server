const express = require('express');
const router = express.Router();
// const user = require("../models/userModel")
const User = require("../models/userModel")
const bcrypt = require('bcrypt');


//login
router.post("/login", async (req, res) => {
    const { username, password } = req.body
    console.log(req.body)
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        console.log(hashedPassword)
        const user = await User.findOne({ username, })
        const users = bcrypt.compare(req.body.password, user.password)
        console.log(users)
        if (users) {
            res.status(200).json(user);
        } else {
            return res.status(500).json({ message: "password mismatch" });
        }
    } catch (error) {
        console.log(error)
        return res.status(400).json({ message: "login not success" });


    }
})

//register

// router.post("/register", async (req, res) => {
//     res.send(200).json("register")
//     try {
//         const newuser = new User(req.body)
//         await newuser.save()
//         res.send(200).json("User Register Successfully ")
//     } catch (error) {
//         return res.send(400).json(error);

//     }
// })
// router.post("/register", async (req, res) => {
//     try {
//         const salt = await bcrypt.genSalt(10);
//         const newuser = new User(req.body);
//         await newuser.save();
//         res.status(200).json("User Registered Successfully"); // Sending a success response
//     } catch (error) {
//         console.error(error);
//         res.status(400).json({ error: "An error occurred" }); // Sending an error response
//     }
// });

router.post("/register", async (req, res) => {
    try {
        // Generate a salt and hash the user's password
        console.log(req.body)
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        // Create a new user with the hashed password
        const newUser = new User({
            username: req.body.username,
            password: hashedPassword,
            // Other user properties here
        });

        // Save the user to the database
        await newUser.save();

        res.status(200).json({ data: "User Registered Successfully" }); // Sending a success response
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: "An error occurred" }); // Sending an error response
    }
});

module.exports = router