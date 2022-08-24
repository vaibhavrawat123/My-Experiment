const AuthorModel= require("../models/authorModel")

const createAuthor= async function (req, res) {
    const author = req.body
    const authorCreated = await AuthorModel.create(author)
    res.send({data: authorCreated})

//--------------------------(a)--------------------------------------------------------------//




}

module.exports.createAuthor= createAuthor