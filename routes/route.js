const express = require('express')
const router = express.Router()
const Personnel = require('../models/personnelModel')

router.route("/booking/staff").get((req, res) => {
  Personnel.find({}, { "name": 1 }, { "_id": 0 })
    .then(foundNames => res.json(foundNames))
})

router.route("/booking/time").get((req, res) => {
  if (typeof req.query.name === 'undefined') {
    Personnel.distinct("time")
      .then(foundTimes => res.json(foundTimes))
  }
  else {
    Personnel.find({ "name": `${req.query.name}` }, { "time": 1, "_id": 0 })
      .then(foundTimes => res.json(foundTimes))
  }
})

module.exports = router