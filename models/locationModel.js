const mongoose = require("mongoose");

const locationsSchema = {
    salonId: String,
    address: String,
}

const Location = mongoose.model("Location", locationsSchema);

module.exports = Location;