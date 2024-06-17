const mongoose = require("mongoose")

const shiftSchema = new mongoose.Schema({
    Date: String,
    ShiftTime: String,
    StartingHour: Number,
    EndingHour: Number,
    EmployeesNamesAtShift: Array
});

const shiftModel = mongoose.model("shift", shiftSchema)

module.exports = shiftModel