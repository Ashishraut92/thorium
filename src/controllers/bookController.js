const bookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await bookModel.create(data)
    res.send({msg: savedData})
}

const getbookData= async function (req, res) {
    // let books = req.query.params
    let allBooks= await bookModel.find()
    console.log(allBooks)
    res.send({msg: allBooks})
}

module.exports.createBook= createBook
module.exports.getbookData= getbookData