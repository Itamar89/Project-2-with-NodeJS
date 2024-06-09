const shiftModel = require("../Models/shiftsModel");

//Get all
const getAllShifts = async () => {
    const shifts = await shiftModel.find({})
    return shifts
}


//get by id
const getShiftById = async (_id) => {
    const shift = await shiftModel.findById(_id);
    return shift
}

//put- update shift
async function update_shift(_id, newData) {
    shiftModel.findByIdAndUpdate(_id, newData)
    return "Update Succeed"

}

//POST
async function creatNewShift(newShift) {
    const shift = new shiftModel(newShift)

    await newShift.save()
    return "Created"
}

//Delete
const deleteShift = async (_id) => {
    await shiftModel.findByIdAndDelete(_id);
    return "Deleted"

}


module.exports = { getAllShifts, getShiftById, update_shift, creatNewShift, deleteShift }