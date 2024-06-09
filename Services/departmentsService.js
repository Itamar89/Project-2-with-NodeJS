const departmentModel = require("../Models/departmentsModel");

//GET ALL
const getAllDepartments = async () => {
    const departments = await departmentModel.find({})    ///[{},{},{}....]
    return departments
}

//GET BY ID
const getDepartmentById = async (_id) => {
    const department = await departmentModel.findById(_id)
    return department
}

//PUT
const updateDepartment = async (_id, newData) => {
    departmentModel.findByIdAndUpdate(_id, newData)
    return "Updated"

}

//POST
const craetDepartment = async (newDepartment) => {

    const department = new departmentModel(newDepartment)
    await department.save()

    return "New Department Created"
}

//Delet
const deleteDepartment = async (_id) => {
    await departmentModel.findByIdAndDelete(_id)
    return "Department Deleted"

}

module.exports = { getAllDepartments, getDepartmentById, updateDepartment, craetDepartment, deleteDepartment }