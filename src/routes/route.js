const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createNewBook  )

// router.get("/getBooksData", BookController.getBooksData)

router.post("/createNewAuthor", BookController.createNewAuthor)

router.post("/createNewBook", BookController.createNewBook)

router.get("/allBooks", BookController.allBooks)

router.get("/upadatedBookPrice", BookController.upadatedBookPrice)

router.get("/authorsName", BookController.authorsName)

module.exports = router;