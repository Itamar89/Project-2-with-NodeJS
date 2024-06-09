const usersWbRepo = require("../Reposetory/usersWbRepo");
const userModel = require("../Models/usersModel")

//GET ALL
const getAllUsers = async () => {
    const users = await userModel.find({});
    return users
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

const userAuth = async (username, email) => {
    const users = await getUsers()
    //jsonplaceholder contain array with users objects. so I need new array with objects- I made new array with object with the proprtys username,email,id [{username:"bret", email:"someEmail@", id:1}]
    const users_username_email = users.map((user) => ({ username: user.username, email: user.email, id: user.id }))// map return the same size array
    // console.log(users_username_email);
    const user = users_username_email.find((user) => user.username === username && user.email === email)// the operator AND written as &&

    const userFromDB = await getUserById(user.id)// here i get the user from DB
    user.fullName = userFromDB.FullName
    return user


}


module.exports = {
    getAllUsers, getUserById, updateUser,
    creatNewUser, deleteUserFromDataBase, getUsers, userAuth
}
