const fs = require("fs")
const path = require("path")
const express = require("express")
const router = express.Router()

router
  // Add a binding for '/'
  .get("/", (req, res) => {
    fs.readFile(
      path.resolve(__dirname, "./views/index.html"),
      "utf8",
      function (err, contents) {
        res.send(contents)
      }
    )
  })

module.exports = router
