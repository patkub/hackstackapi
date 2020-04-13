const config = require("./config")

const express = require("express")
const app = express()

const indexRoutes = require("./routes/index")
const customerRoutes = require("./routes/customer")
const paymentRoutes = require("./routes/payment")
const reservationRoutes = require("./routes/reservation")
const rentalItemRoutes = require("./routes/rentalItem")
const transactionRoutes = require("./routes/transaction")

app.use("/", indexRoutes)
app.use("/customer", customerRoutes)
app.use("/payment", paymentRoutes)
app.use("/reservation", reservationRoutes)
app.use("/rentalItem", rentalItemRoutes)
app.use("/transaction", transactionRoutes)

app.listen(config.port, () =>
  console.log(`HackStackAPI listening at http://localhost:${config.port}`)
)
