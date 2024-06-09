const mongoose = require("mongoose");
const departmentModel = require("./departmentsModel");

const employeeSchema = new mongoose.Schema({
    // {required: true, type: String} is added to the username & password field to make it required and to specify that it should be a string.
    FirstName: { required: true, type: String },
    LastName: String,
    StartWorkYear: Number,
    departmentId: String
});

const employeeModel = mongoose.model("employee", employeeSchema);

module.exports = employeeModel