const express = require("express")
const router = express.Router()

const rootRoutes = require("./root")
const customerRoutes = require("./customer")
const paymentRoutes = require("./payment")
const reservationRoutes = require("./reservation")
const rentalItemRoutes = require("./rentalItem")
const transactionRoutes = require("./transaction")

router.use("/", rootRoutes)
router.use("/customer", customerRoutes)
router.use("/payment", paymentRoutes)
router.use("/reservation", reservationRoutes)
router.use("/rentalItem", rentalItemRoutes)
router.use("/transaction", transactionRoutes)

module.exports = router
