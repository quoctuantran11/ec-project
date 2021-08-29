const express = require("express");
const Booking = require("../models/bookingModel");
const router = express.Router();

router.route("/cancel").post((req, res) => {
    var id = req.body._id

    // Booking.updateOne({ "_id": { id }, "status": "Cancel" })
    Booking.findByIdAndUpdate(id, { "status": "Cancel" }, (err) => {
        if (err) res.send(err)
    })
})

module.exports = router;