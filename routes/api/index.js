const express = require("express")
const router = express.Router()

const rootRoutes = require("./root")
const gameSearchRoutes = require("./gameSearch")

router.use("/", rootRoutes)
router.use("/gameSearch", gameSearchRoutes)

module.exports = router
