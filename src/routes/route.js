let logger = require('./logger/logger')
const express = require('express');
const router = express.Router();
let formatter = require("./validator/formatter")
let helper = require("./util/helper")
const lodash = require('lodash')

router.get('/test-me', function (req, res) {
    logger.welcome()
    formatter.val()
    helper.printdate()
    helper.printmonth()
    helper.getBatchinfo()
    res.send('My First ever api')
});
router.get('/hello', function (req, res) {
    let arr = ["jan", "feb", "march","april","may", "june", "july", "august", "sept", "october", "november", "december" ]
    console.log(lodash.chunk(arr,4))
    res.send('my first lodash')
})
module.exports = router;
// adding this comment for no reason