const express = require("express")
const router = express.Router()

const rootRoutes = require("./root")
const customerRoutes = require("./customer")
const gameSearchRoutes = require("./gameSearch")

router.use("/", rootRoutes)
router.use("/customer", customerRoutes)
router.use("/gameSearch", gameSearchRoutes)

module.exports = router
