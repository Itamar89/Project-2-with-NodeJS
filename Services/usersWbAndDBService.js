const usersWbRepo = require("../Reposetory/usersWbRepo");
const userModel = require("../Models/usersModel")

//GET ALL
const getAllUsers = async () => {
    const users = await userModel.find({});
    return users //will brings all users from DB
}

//Get BY ID
const getUserById = async (CustomId) => {
    const user = await userModel.findOne({ CustomId });
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


const getUsers = async () => {
    const respo = await usersWbRepo.getAllUsers()// we get the all information
    const users = respo.data// here we get the Key Data 
    return users //[{},{},{}.....]
}

const userLogInAuth = async (username, email) => {
    const users = await getUsers()
    //jsonplaceholder contain array with users objects. so I need new array with objects and the properts that I need- username, email, id [{username:"bret", email:"someEmail@", id:1}]
    const users_username_email_id = users.map((user) => ({ username: user.username, email: user.email, id: user.id }))// map return the same size array

    const user = users_username_email_id.find((user) => user.username === username && user.email === email)// the operator AND written as &&

    const userFromDB = await getUserById(user.id)// here i get THE user from DB that match to jsonflaceholder user id

    user.fullName = userFromDB.FullName    //user --> [{username: "Bret", "email:somting@..", fullName:"Itamar Ben Natan"},{},{}]

    return user


}


module.exports = {
    getAllUsers, getUserById, updateUser,
    creatNewUser, deleteUserFromDataBase, getUsers, userLogInAuth
}
