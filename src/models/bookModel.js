const mongoose = require('mongoose');
 const ObjectId = mongoose.Schema.Types.ObjectId


 const bookSchema = new mongoose.Schema( {
     name: String,
     author_id: {
         type: ObjectId,
         ref: "ApnaAuthor",
         require:true
     }, 
     price: Number,
     ratings: Number,
     publisher_id: {
         type: ObjectId,
         ref: "ApnaPublisher"
     }
 }, { timestamps: true });

 




 module.exports = mongoose.model('ApnaBook', bookSchema)
