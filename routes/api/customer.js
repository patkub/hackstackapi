const common = require("../../common")

const path = require("path")
const express = require("express")
const router = express.Router()

router
  // Add a binding for '/customer/'
  .get("/", (req, res) => {
    // render the /customer view
    const data = common.loadJSON(
      path.resolve(__dirname, "./data/customers.json")
    )

    return res.status(200).json(data)
  })

  // Add a binding for '/customer/:id'
  .get("/:id", (req, res) => {
    // render the /customer view

    const id = req.params.id

    const data = common.loadJSON(
      path.resolve(__dirname, "./data/customers.json")
    )

    return res.status(200).json(data[id])
  })

module.exports = router
