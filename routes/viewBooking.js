const express = require("express");
const Booking = require("../models/bookingModel");
const router = express.Router();

router.route("/viewBooking").get((req, res) => {
    const phone = req.body.phone

    // Booking.find(phone, (err) => {
    //     if (err) res.send(err)
    // }).then(foundData => res.json(foundData));

    // Booking.find({ "phone": `${phone}` })
    //     .then(foundTimes => res.json(foundTimes))

    Booking.find({ "phone": `${req.query.phone}` })
        .then(foundTimes => res.json(foundTimes))
})

module.exports = router;