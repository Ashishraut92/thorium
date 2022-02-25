const express = require('express');
const router = express.Router();

let players = []
router.post('/players', function (req, res) {

    let player = req.body
    let playerName = player.name 
    for (let i = 0; i < players.length; i++) {
        if (players[i].name == playerName) {
            res.send("player is already exist")
        }
    }
    players.push(player)
    // console.log(player,"here is the player array")
    res.send(players)
})



router.post('/players/:playerName/bookings/:bookingId', function (req, res) {
    let name = req.params.playerName;
    // let bookid = req.params.bookingId;

    let booking = req.body
    // let bookid = booking.bookingNumber
    let bookingId = req.params.bookingId

    for (let i = 0; i < players.length; i++) {
        if (players[i].name == name) {
            for (let j = 0; j < players[i].bookings.length; j++) {
                if (players[i].bookings[j].bookingNumber == bookingId) {
                    return res.send('booking already done with with this Id')
                }
            }
        }
        players[i].bookings.push(booking)
        res.send(players[i])
    }
})








// console.log(players) 

// router.get('/students/:name', function(req, res) {
//     let studentName = req.params.name
//     console.log(studentName)
//     res.send(studentName)
// })














// router.post("/test-post-3", function(req, res) {
// let id = req.body.user
// let pwd= req.body.password

// console.log( id , pwd)

//     console.log( req.body )

//     res.send(  { msg: "hi" , status: true }  )
// })





module.exports = router;