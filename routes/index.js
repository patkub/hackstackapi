const fs = require("fs")
const marked = require("marked")
const express = require("express")
const router = express.Router()

router
  // Add a binding for '/'
  .get("/", (req, res) => {
    fs.readFile("index.md", "utf8", function (err, contents) {
      res.send(marked(contents))
    })
  })

  .get("/README.md", (req, res) => {
    fs.readFile("README.md", "utf8", function (err, contents) {
      res.send(marked(contents))
    })
  })

module.exports = router
