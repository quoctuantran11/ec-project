const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path")
const app = express();
const port = process.env.PORT || 3001

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))


mongoose.connect("mongodb+srv://admin:admin@cluster0.axyzp.mongodb.net/book", { useNewUrlParser: true, useUnifiedTopology: true })

app.use("/", require("./routes/bookingRoute"));
app.use("/", require("./routes/locationRoute"));
app.use("/", require("./routes/cancelBooking"));
app.use("/", require("./routes/route"));
app.use("/", require("./routes/viewBooking"));

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'))
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname,'frontend','build','index.html'))
    })
}

app.listen(port, function () {
    console.log(`App deployed on port ${port}`);
})