const express = require("express");
const Booking = require("../models/bookingModel");
const router = express.Router();

router.route("/booking").post((req, res) => {
    const phone = req.body.phone;
    const address = req.body.address;
    const note = req.body.note;
    const service = req.body.service;
    const date = req.body.date;
    const staff = req.body.staff;
    const time = req.body.time;
    const status = req.body.status;

    const newBooking = new Booking({
        phone,
        address,
        note,
        service,
        date,
        staff,
        time,
        status,
    });

    newBooking.save()
})

router.route("/booking").get((req, res) => {
    Booking.find().sort({ _id: -1 }).limit(1)
        .then(foundData => res.json(foundData));
})

module.exports = router;