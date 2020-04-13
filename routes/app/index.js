const express = require("express")
const router = express.Router()

const rootRoutes = require("./root")

router.use("/", rootRoutes)

module.exports = router
