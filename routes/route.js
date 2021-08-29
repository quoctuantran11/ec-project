// const stripe = require('stripe')('sk_test_51JH4fvIcRNzziYtOdWvxk6ak9fYL6vwWH8cw09tAMLQdQTCXPk1ch44GqP9gRSFareWv19vkBhLTCmw5LlDiT5aa005cV1QRDJ');
const express = require('express')
const router = express.Router()
const ObjectId = require('mongodb').ObjectID
// const OrderB = require('../models/orderModel')
const Personnel = require('../models/personnelModel')

// router.route("/booking").post(async (req, res) => {
//   const phone = req.body.phone;
//   const address = req.body.address;
//   const service = req.body.service;
//   const date = req.body.date;
//   const staff = req.body.staff;
//   const time = req.body.time;

//   const newOrderB = new OrderB({
//     phone,
//     address,
//     service,
//     date,
//     staff,
//     time
//   })

//   await newOrderB.save();
// })

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

// router.route("/result").get((req, res) => {
//   OrderB.find({}).sort({ "_id": -1 }).limit(1)
//     .then(foundOrders => res.json(foundOrders))
// })

// router.route('/create-checkout-session').post(async (req, res) => {
//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: [
//       'card',
//     ],
//     line_items: [
//       {
//         price_data: {
//           currency: 'usd',
//           product_data: {
//             name: 'Total charges',
//           },
//           unit_amount: 3000,
//         },
//       },
//     ],
//     mode: 'payment',
//   });

//   res.redirect(303, '/success')
// })

// router.route('/cancel').post((req, res) => {
//   var id = req.body.id
//   OrderB.findByIdAndRemove(id, (err) => {
//     if (err) res.send(err)
//   })

//   res.redirect(303, '/cancel')
// })

module.exports = router