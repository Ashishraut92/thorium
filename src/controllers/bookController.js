const { count } = require("console")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const newBook= async function (req, res) {
    let book = req.body
    console.log(book)
    let authorId = book.author
    let publisherId = book.publisher
    let authorfromrequest = await authorModel.findById(authorId);
    let publisherfromrequest = await publisherModel.findById(publisherId);

    // validation a
    if(!authorfromrequest || !publisherfromrequest){
        res.send('the author or publisher  id is invalid')
    } else{
        let bookcreated = await bookModel.create(book)
        res.send({data:bookcreated})
    }}

//     if(!authorId) {
//         return res.send('The request is not valid as the author details are required.')
//     }

//     //validation b
//     let author = await authorModel.findById(authorId)
//     console.log(author)
//     if(!author){ 
//         return res.send('The request is not valid as no author is present with the given author id')
//     }

//     //validation c
//     if(!publisherId){
//          return res.send('The request is not valid as the publisher details are required.') 
//     }
//     //validation d
//     let publisher = await publisherModel.findById(publisherId)
//     if(!publisher) {
//         return res.send('The request is not valid as no publisher is present with the given publisher id')
//     }
//     let bookCreated = await bookModel.create(book)
//     return res.send({data: bookCreated})
// }

const getBooksdata= async function (req, res) {
    let books = await bookModel.find().populate('author publisher')
    res.send({data: books})
}

const updateBook = async function (req ,res){

    let publisherID = await publisherModel.find(
        { name : { $in : ['HarperCollins' , 'Penguin'] } } ).select( {_id:1} )

    console.log(publisherID)

    let ListOfBk = await bookModel.updateMany(

        { publisher : {$in : publisherID} },
        { $set : {isHardCover : true } },
        { new : true }

            )
            console.log(ListOfBk)


    let authorId = await authorModel.find(
        { ratings : { $gt : 3.5 } }  ).select( { _id:1 } )

    let updatedPrice = await bookModel.updateMany( 
        
        { author : { $in : authorId } },
        { $inc : {price:+10} },
        { new : true}
         
        )
    res.send(updatedPrice)
}

    




module.exports.newBook= newBook
module.exports.getBooksdata= getBooksdata
module.exports.updateBook= updateBook


