const express = require("express");
const router = express.Router()//Creat the router object witch activat handel http request 
usersWbService = require("../Services/usersWbAndDBService");//require usersService file
const jwt = require("jsonwebtoken")


// the Base url for this controller- http://127.0.0.1:8000/auth
//this is the link for this router- http://127.0.0.1:8000/auth/login
router.post("/login", async (req, res) => {
    try {
        const username = req.body.username
        const email = req.body.email

        // Check if username and password are provided, if not return an error message and sucess: false in the response for the client to know what went wrong.
        if (!username || !email) return res.json({ success: false, message: "username and email are required" })

        const user = await usersWbService.userAuth(username, email)
        //check if user found in the serves
        if (!user) return res.json({ success: false, message: "Invalid username or email, try again" })

        //else
        const token = jwt.sign({ id: user.id }, "secret", {})//why without the id it wasent work?
        return res.json({ success: true, token: token, message: "Login seccessful, Welcome", name: user.fullName })
    } catch (e) {
        return res.json({ success: false, message: e.message })
    }

});


//Don't forget- need to be also LOGOUT router
// didn't do user actions limitation yet

module.exports = router