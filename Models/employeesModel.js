const mongoose = require("mongoose");
const departmentModel = require("./departmentsModel");

const employeeSchema = new mongoose.Schema({
    // {required: true, type: String} is added to the username & password field to make it required and to specify that it should be a string.
    DepartmentID: String,
    ShiftId: Array,
    FirstName: String,
    LastName: String,
    FullName: String,// I add this property manually - Work with Class will be more efficiency
    StartWorkYear: Number,
    ShiftTime: String // I add this property manually - Work with Class will be more efficiency
});

const employeeModel = mongoose.model("employee", employeeSchema);

module.exports = employeeModel