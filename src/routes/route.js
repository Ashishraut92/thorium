let logger = require('./logger/logger')
const express = require('express');
const router = express.Router();
let formatter = require("./validator/formatter")
let helper = require("./util/helper")

router.get('/test-me', function (req, res) {
    logger.welcome()
    formatter.val()
    helper.printdate()
});

module.exports = router;
// adding this comment for no reason