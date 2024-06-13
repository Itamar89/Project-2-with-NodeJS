const express = require("express");
const app = express()
const mongoose = require("mongoose")


app.use(express.json())//This Middlewear responsible for converting the request body from JSONs to object

require("./Configs/connectDB")

const authController = require("./Controllers/authController")
app.use("/auth", authController)

const employeeController = require("./Controllers/employeesController")
app.use("/employees", employeeController)




app.listen(8000, () => {
    console.log("Server is running at http://127.0.0.1:8000")
});