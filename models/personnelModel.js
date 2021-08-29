const mongoose = require('mongoose')

const personnelsSchema = {
    name: String,
    staffID: Number,
    time: Array
}

const Personnel = mongoose.model('Personnel', personnelsSchema)

module.exports = Personnel;