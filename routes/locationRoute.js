const express = require("express");
const Location = require("../models/locationModel");
const router = express.Router();

router.route("/location").get((req, res) => {
    Location.find()
        .then(foundData => res.json(foundData));
})

module.exports = router;