const config = require("./config")

const express = require("express")
const app = express()
const router = express.Router()
const port = 3000

const indexRoutes = require("./routes/index")
const customerRoutes = require("./routes/customer")
const rentalItemRoutes = require("./routes/rentalItem")

app.use("/", indexRoutes)
app.use("/customer", customerRoutes)
app.use("/rentalItem", rentalItemRoutes)

app.listen(port, () =>
  console.log(`HackStackAPI listening at http://localhost:${port}`)
)
