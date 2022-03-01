const { count } = require("console")
// const bookModel = require("../models/bookModel")
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}


const getBooksData= async function (req, res) {

    let allBooks= await BookModel.find().select({ bookName: 1, authorName: 1, _id: 0})  //normally this is an asynchronous call..but await makes it synchronous
    console.log(allBooks)
 
    res.send({msg: allBooks})
}


const getBooksinYear = async function(req, res){
    // let book=req.body
    let year = req.body.year
    

    let booksyear = await BookModel.find({year} )
    // let booksyear= await BookModel.find()
    res.send({msg: booksyear})
}

const getXINRBooks = async function(req, res){
    // let booksvalue= await BookModel.find()
    
    let booksvalue= await BookModel.find({$or: [ {"prices.indianPrice": "INR100" } ,{"prices.indianPrice": "INR200"} ,{"prices.indianPrice": "INR500" } ]})

    // { 
    //     $or: [ {authorName : "Chetan Bhagat" } , { isPublished: true } , {  "year": 1991 }]
    res.send({msg: booksvalue})
}


const getRandombooks = async function(req, res){
    let random= await BookModel.find({ totalPages: { $gt:  500 },stockAvailable:true  })

    // let random= await BookModel.find()
    res.send({msg: random})
    
}

const  getPericularbook= async function(req, res){
    // let book=req.body
    let data = req.body
    

    let perticular = await BookModel.find( data )
    // let booksyear= await BookModel.find()
    res.send({msg: perticular})
}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getPericularbook= getPericularbook

module.exports.getBooksinYear= getBooksinYear
module.exports.getXINRBooks= getXINRBooks
module.exports.getRandombooks= getRandombooks