const express = require("express")
const router = express.Router()

router
  // Add a binding for '/payment/'
  .get("/", (req, res) => {
    // render the /payment view
    let payment = {
      paymentType: "Cash",
      chargeAmount: 25.0,
      changeOwned: 3.88,
      transactionSuccessful: true,
    }

    return res.status(200).json(payment)
  })

  .get("/cash", (req, res) => {
    // render the /payment/cash view
    let payment = {
      paymentType: "Cash",
      chargeAmount: 25.0,
      changeOwned: 3.88,
      transactionSuccessful: true,
      value: 25.0,
    }

    return res.status(200).json(payment)
  })

module.exports = router
