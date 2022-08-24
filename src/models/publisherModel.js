// const mongoose = require('mongoose');
// const ObjectId = mongoose.Schema.Types.ObjectId
// const publisherSchema = new mongoose.Schema( {
// name: String,
// headQuarter: String,
// author_id: {
//             type: ObjectId,
//             ref: "newAuthor"
// }
//   }, { timestamps: true });
// module.exports = mongoose.model('newpublisher', publisherSchema)
const mongoose = require('mongoose');

const publisherSchema= new mongoose.Schema({
    
        name:String,
        headQuarter:String
        
},
{ timestamps: true });

module.exports = mongoose.model('Apnapublisher', publisherSchema)
