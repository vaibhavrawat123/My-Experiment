// const mongoose = require('mongoose');

// const authorSchema = new mongoose.Schema( {

//     author_name: String,
//     age:Number,
//     address:String,
//     rating:Number

// }, { timestamps: true });

// module.exports = mongoose.model('NewAuthor', authorSchema)
const mongoose = require('mongoose');
const authorSchema = new mongoose.Schema( {
   

    authorName:String,
    age:Number,
    address:String,
rating:Number




}, { timestamps: true });

module.exports = mongoose.model('NewAuthor', authorSchema)
