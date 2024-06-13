const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router()
const employeeService = require("../Services/employeesService");


const checkToken = (req, res, next) => {

    try {
        const token = req.headers.token// pull the token from the headers key in req obj

        if (!token) // Note: it's GOOD PRACTICE TO DO CHECKS FIRST "what if not..." 


            return res.json({ success: false, message: "Token is required!" });

        jwt.verify(token, "secret", (err, decoded) => {
            //verify() is synchronic- it doesn't get Async.
            // verify receives 3 params:
            // 1 - the token itself
            // 2 - secret key- as we defined in the auth controller when we CREAT the TOKEN)- most important
            // 3 - a callback function with EITHER error, or the decoded token
            if (err) {

                // if the err occured we will return an error to the client, else, the token has been verified and we return the data to the client
                return res.json({ success: false, message: err.message });
            }

            next()
        })

    } catch (e) {

        return res.json({ success: false, message: e.message });
    }
}

// http://127.0.0.1:8000/employees
router.get("/", checkToken, async (req, res) => {
    try {
        const employees = await employeeService.getAllEmployees();

        return res.json({ success: true, employees: employees });

    } catch (e) { return res.json({ success: false, message: e.message }) }
})

//POST - CREAT EMPLOYEE
router.post("/", checkToken, async (req, res) => {

    const employee = req.body;

    const status = await employeeService.creatNewEmployee(employee);

    if (!employee) return res.json({ success: false, message: "Invalid employee, check the body data." });

    return res.json({ success: true, msg: status });
})

module.exports = router