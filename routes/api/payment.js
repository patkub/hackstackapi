const common = require("../../common")

const path = require("path")
const express = require("express")
const router = express.Router()

router
  // Add a binding for '/payment/'
  .get("/", (req, res) => {
    // render the /payment view

    const data = common.loadJSON(
      path.resolve(__dirname, "./data/payments.json")
    )

    return res.status(200).json(data)
  })

module.exports = router
