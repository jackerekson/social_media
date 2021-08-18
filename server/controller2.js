const users = require('./db.json')

let globalUserId = 4

module.exports = {
    getUsers: (req,res) => {    
        res.status(200).send(users)
    },
    deleteUser: (req,res) => {
        let index = users.findIndex(elem => elem.id === +req.params.id)
    },
    createUser: (req,res) => {
        let { email, first_name, last_name, password, location } = req.body
        let newUser = {
            id: globalUserId,
            email,
            first_name,
            last_name,
            password,
            location
        }
        users.push(newUser)
        res.status(200).send(users)
        globalUserId++
    }
}