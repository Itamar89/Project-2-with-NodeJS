const axios = require("axios");

const usersWbUrl = 'https://jsonplaceholder.typicode.com/users'

const getAllUsers = () => {
    return axios.get(usersWbUrl)

}

module.exports = { getAllUsers }

