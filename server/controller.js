const post =  require('./db.json')

let globalId = 4

module.exports = {
    getAllPOSTS: (req,res) => {
        // console.log('good')
        res.status(200).send(post)
    },
    deletePOST: (req,res) => {
        let index = post.findIndex(elem => elem.id === +req.params.id)
        post.splice(index, 1)
        res.status(200).send(post)
    },
    createPOST: (req,res) => {
        let { address, imageURL } = req.body
        let newPost = {
            id: globalId,
            address,
            imageURL
        }
        post.push(newPost)
        res.status(200).send(post)
        globalId++
    }
}