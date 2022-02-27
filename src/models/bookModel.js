const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName:{
        type:String
    },
    authorName:{
        type:String,
        required:true,
    },
    category:{
        type: String,
        enum:["drama","horror","commic","adv","romantic","motivation"]
    },
    year:{
        type:"Number"
    }

}, { timestamps: true });

module.exports = mongoose.model('book', bookSchema) //users



// String, Number
// Boolean, Object/json, array