const config = require("./config")

const express = require("express")
const app = express()

const apiRoutes = require("./routes")
app.use("/api", apiRoutes)

app.listen(config.port, () =>
  console.log(`HackStackAPI listening at http://localhost:${config.port}`)
)
