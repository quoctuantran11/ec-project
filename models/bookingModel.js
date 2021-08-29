const mongoose = require("mongoose");

mongoose.set('useFindAndModify', false);
// mongoose.set('returnOriginal', false);

const bookingsSchema = {
    phone: String,
    address: String,
    note: String,
    service: Array,
    date: String,
    staff: String,
    time: String,
    status: String,
}

const Booking = mongoose.model("Booking", bookingsSchema);

module.exports = Booking;