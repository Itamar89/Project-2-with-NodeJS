const employeeModel = require("../Models/employeesModel");

//Get ALL
const getAllEmployees = async () => {
    // empty object inside find = get all {}
    const employees = await employeeModel.find({});
    return employees;
};

//GET BY ID
const getEmployeeById = async (_id) => {
    // findById will only get the employee with the _id of mongoDB
    const employee = await employeeModel.findById(_id);
    return employee;
};

// // GET Employee's Shifts
// const getEmployeeShifts = async (fullName) => {
//     //return only the ShiftId & FullName fields
//     const projection = { _id: 0, FullName: 1, ShiftId: 1 };//projections can help limit unnecessary network bandwidth usage. return Multiple field specify by projection varibale. mark value as 1- include the field. mark value as 0- exclude the field
//     const employee_shiftsList = await employeeModel.find({ fullName }, projection);// find will retur an Array with objects inside. So, in the employeeModel Scema the 
//     console.log(employee_shiftsList) //console.log() print the information to my terminal
//     return employee_shiftsList;
// };

//PUT-Update
const updateEmployee = async (_id, newEmployeeData) => {//{id: "66608f0a404bef51218fb59f", {First Name: "Danit"}}  היא צריכה את האיי די של העובד והמידע החדש עליו כדי לעדכן אותו
    await employeeModel.findByIdAndUpdate(_id, newEmployeeData);
    return "Update Employee Succeed";
};

//POST-create
async function creatNewEmployee(newEmployee) {
    const employee = new employeeModel(newEmployee);// here I will Get a whole employee obj
    delete employee.ShiftId; //delete ShiftId property

    await employee.save();
    return "New Employee Creat Successfully"; //Creating new employee withot shiftId proprety
};

//Delete
async function deleteEmployeeFromDataBase(_id) {
    await employeeModel.findByIdAndDelete(_id);
    return "Employee deleted";
};

module.exports = {
    getAllEmployees, getEmployeeById, updateEmployee,
    creatNewEmployee, deleteEmployeeFromDataBase, //getEmployeeShifts
};