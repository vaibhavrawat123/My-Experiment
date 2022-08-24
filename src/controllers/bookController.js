// const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")

 const createBook= async function (req, res) {
     let book = req.body
     let authorid1 =req.body.author_id
     let authorid = await authorModel.find({_id:authorid1}).select({_id:1})
     let authorid2 =req.body.Publisher_id
     let publisherid = await publisherModel.find({_id:authorid2})
     if(!authorid1){
      res.send("Author ID is require")
     }else if (authorid.length==0){
      res.send("This Author is not present")
     }else if (!authorid){
      res.send("Publisher id is require")
     }else if (publisherid.length ==0){
      res.send ("This publisher is not present")
     }else{
       let bookCreate = await bookModel.create(book)
       res.send({data:bookCreate})
     }
     }
  
  module.exports.createBook= createBook







// const createBook= async function (req, res) {
//     let book = req.body
//     let bookCreated = await bookModel.create(book)
//     res.send({data: bookCreated})
// }

// const getBooksData= async function (req, res) {
//     let books = await bookModel.find()
//     res.send({data: books})
// }

// const getBooksWithAuthorDetails = async function (req, res) {
//     let specificBook = await bookModel.find().populate('author_id')
//     res.send({data: specificBook})

// }

// module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData
// module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
