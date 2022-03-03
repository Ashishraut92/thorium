const mongoose = require('mongoose');

 const bookSchema = new mongoose.Schema({
    
        bookname: String,
        author_id: Number,
        price:Number,
        ratings:Number,
 },
 { timestamps: true });

module.exports = mongoose.model('Book', bookSchema)


//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
