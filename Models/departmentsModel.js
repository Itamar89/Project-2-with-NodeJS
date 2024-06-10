const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
    Name: String,
    ManagerIsIdEmployee: String
})

const departmentModel = mongoose.model("user", departmentSchema);

module.exports = departmentModel