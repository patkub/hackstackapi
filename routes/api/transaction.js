const common = require("../../common")

const path = require("path")
const express = require("express")
const router = express.Router()

router
  // Add a binding for '/transaction/'
  .get("/", (req, res) => {
    // render the /transaction view

    const data = common.loadJSON(
      path.resolve(__dirname, "./data/transactions.json")
    )

    return res.status(200).json(data)
  })

  // Add a binding for '/transaction/:id'
  .get("/:id", (req, res) => {
    // render the /transaction view

    const id = req.params.id

    const data = common.loadJSON(
      path.resolve(__dirname, "./data/transactions.json")
    )

    return res.status(200).json(data[id])
  })

module.exports = router
