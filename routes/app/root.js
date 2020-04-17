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

  // adding a movie
  .get("/addMovie", (req, res) => {
    fs.readFile(
      path.resolve(__dirname, "./views/addMovie.html"),
      "utf8",
      function (err, contents) {
        res.send(contents)
      }
    )
  })

  // renting a movie
  .get("/rentMovie", (req, res) => {
    fs.readFile(
      path.resolve(__dirname, "./views/rentMovie.html"),
      "utf8",
      function (err, contents) {
        res.send(contents)
      }
    )
  })

  // inventory report
  .get("/inventoryReport", (req, res) => {
    fs.readFile(
      path.resolve(__dirname, "./views/inventoryReport.html"),
      "utf8",
      function (err, contents) {
        res.send(contents)
      }
    )
  })

module.exports = router
