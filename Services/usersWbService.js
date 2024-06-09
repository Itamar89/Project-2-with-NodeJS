const usersWbRepo = require("../Reposetory/usersWbRepo");

const getUsers = async () => {
    const respo = await usersWbRepo.getAllUsers()// we get the all information
    const users = respo.data// here we get the Key Data 
    return users //[{},{},{}.....]
}

const userAuth = async (username, email) => {
    const users = await getUsers()
    //jsonplaceholder contain array with users objects. so I need new array with objects- I made new array with object with the proprtys username,email,id [{username:"bret", email:"someEmail@", id:1}]
    const users_username_email = users.map((user) => ({ username: user.username, email: user.email, id: user.id }))// map return the same size array
    console.log(users_username_email);
    const user = users_username_email.find((user) => user.username === username && user.email === email)// the operator AND written as &&
    return user
}

module.exports = { getUsers, userAuth }