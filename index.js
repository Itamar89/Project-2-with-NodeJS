const express = require("express");
const app = express()


app.use(express.json())//This Middlewear responsible for converting the request body from JSONs to object

const authController = require("./Controllers/authController")
app.use("/auth", authController)







app.listen(8000, () => {
    console.log("Server is running at http://127.0.0.1:8000")
});