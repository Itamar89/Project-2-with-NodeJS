const userModel = require("../Models/usersModel")

//GET ALL
const getAllUsers = async () => {
    const users = await userModel.find({});
    return users
}

//Get BY ID
const getUserById = async (_id) => {
    const user = await userModel.findById(id);
    return user
}

//Put
const updateUser = async (_id, newData) => {
    await userModel.findByIdAndUpdate(_id, newData)
    return "Updated Secceed"
}

//Post
const creatNewUser = async (newUser) => {
    const user = new userModel(newUser);
    await user.save()

    return "NEW USER CREATED"

}

//Delete
const deleteUserFromDataBase = async (_id) => {
    await userModel.findByIdAndDelete(_id);
    return "USER DELETED"
}

module.exports = {
    getAllUsers, getUserById, updateUser,
    creatNewUser, deleteUserFromDataBase
}