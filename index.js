const config = require("./config")

const path = require("path")
const express = require("express")
const app = express()

const appRoutes = require("./routes/app")
app.use("/", appRoutes)

const apiRoutes = require("./routes/api")
app.use("/api", apiRoutes)

app.use(
  "/vendor/jquery",
  express.static(path.join(__dirname, "/node_modules/jquery/dist"))
)
app.use(
  "/vendor/bootstrap",
  express.static(path.join(__dirname, "/node_modules/bootstrap/dist"))
)

app.use(
  "/static/css",
  express.static(path.join(__dirname, "/routes/app/views/css"))
)
app.use(
  "/static/js",
  express.static(path.join(__dirname, "/routes/app/views/js"))
)
app.use(
  "/static/img",
  express.static(path.join(__dirname, "/routes/app/views/img"))
)

app.listen(config.port, () =>
  console.log(`HackStackAPI listening at http://localhost:${config.port}`)
)
