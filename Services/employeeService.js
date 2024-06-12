const employeeModel = require("../Models/employeeModel")

//Get ALL
const getAllEmployees = async () => {
    // empty object inside find = get all {}
    const employees = await employeeModel.find({})
    return employees
}

//GET BY ID
const getEmployeeById = async (_id) => {
    // findbyid will only get the user with the _id of mongoDB
    const employee = await employeeModel.findById(_id);
    return employee
}

//PUT-Update
const updateEmployee = async (_id, newData) => {//{id: "66608f0a404bef51218fb59f", {First Name: "Danit"}}  היא צריכה את האיי די של העובד והמידע החדש עליו כדי לעדכן אותו
    await employeeModel.findByIdAndUpdate(_id, newData);
    return "Update Employee Succeed"
}

//POST-creat
async function creatNewEmployee(newEmployee) {
    const employee = new employeeModel(newEmployee)

    await employee.save()
    return "New Employee Creat Successfully"

}

//Delete
async function deleteEmployeeFromDataBase(_id) {
    await employeeModel.findByIdAndDelete(_id)
    return "Employee deleted"
}
module.exports = {
    getAllEmployees, getEmployeeById, updateEmployee,
    creatNewEmployee, deleteEmployeeFromDataBase
}