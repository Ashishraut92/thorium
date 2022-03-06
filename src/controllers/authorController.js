// const AuthorModel= require("../models/authorModel")

const AuthorModel= require("../models/authorModel")

const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await AuthorModel.create(author)
    res.send({data: authorCreated})
}

module.exports.createAuthor= createAuthor


// const newAuthor= async function (req, res) {
//     let author = req.body
//     let authorCreated = await AuthorModel.create(author)
//     res.send({data: authorCreated})
// }

// // const getAuthorsData= async function (req, res) {
// //     let authors = await AuthorModel.find()
// //     res.send({data: authors})
// // }

// module.exports.newAuthor= newAuthor
// // module.exports.getAuthorsData= getAuthorsData

// const MyAuthorModel = require("../models/authorModel")
// const mongoose = require("mongoose");


// const newAuthor = async function (req, res) {
//     const author = req.body;
//     let saveddata = await authorModel.create(newAuthor);
//     res.send({ msg: saveddata });
  // };

// module.exports.createAuthor = createAuthor; 