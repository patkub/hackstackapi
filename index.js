const config = require("./config")

const express = require("express")
const app = express()

const appRoutes = require("./routes/app")
app.use("/", appRoutes)

const apiRoutes = require("./routes/api")
app.use("/api", apiRoutes)

app.use(express.static(__dirname + "/node_modules/bootstrap/dist"))
app.use(express.static(__dirname + "/node_modules/jquery/dist"))

app.listen(config.port, () =>
  console.log(`HackStackAPI listening at http://localhost:${config.port}`)
)
