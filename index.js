const config = require("./config")

const express = require("express")
const app = express()

const appRoutes = require("./routes/app")
app.use("/", appRoutes)

const apiRoutes = require("./routes/api")
app.use("/api", apiRoutes)

app.listen(config.port, () =>
  console.log(`HackStackAPI listening at http://localhost:${config.port}`)
)
