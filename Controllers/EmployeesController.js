const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router()
const employeeService = require("../Services/employeeService");
const { route } = require("./authController");

// http://127.0.0.1:8000/Employees
router.get("/", checkToken, async (req, res) => {
    try {
        const employees = await employeeService.getAllEmployees()

    } catch (e) { return res.json({ success: false, message: e.message }) }
})


const checkToken = (req, res, next) => {
    try {
        const token = req.headers.token

        // verify receives 3 params:
        // 1 - the token itself
        // 2 - secret key- as we defined in the auth controller when we CREAT the TOKEN)- most important
        // 3 - a callback function with EITHER error, or the decoded token
        // if the err occured we will return an error to the client, else, the token has been verified and we return the data to the client
        jwt.verify(token, "secret", (erorr, decoded) => {
            //verify() is synchronic- it doesn't get Async. but it gets Callback function- with first param as erorr if token not verify, and second param (decoded) the verify token if it does

            if (err) {// Note: it's GOOD PRACTICE TO DO CHECKS FIRST
                return res.json({ msg: err.message })
            } else {
                next()
            }
        })
    } catch (e) {
        return res.json({ success: false, message: e.message })
    }

}
module.exports = router