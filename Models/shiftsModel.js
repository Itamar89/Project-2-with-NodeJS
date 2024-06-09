const mongoose = require("mongoose")

const shiftSchema = new mongoose.Schema({
    Date: String,
    StartingHour: Number,
    EndingHour: Number,
    ShiftTime: String
});

const shiftModel = mongoose.model("shift", shiftSchema)

module.exports = shiftModel