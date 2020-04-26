const config = require("./config")

const fs = require("fs")
const path = require("path")
const https = require("https")
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
  "/vendor/jquery-ui",
  express.static(path.join(__dirname, "/node_modules/jquery-ui-dist"))
)
app.use(
  "/vendor/inputmask",
  express.static(path.join(__dirname, "/node_modules/inputmask/dist"))
)
app.use(
  "/vendor/jquery-mask-plugin",
  express.static(path.join(__dirname, "/node_modules/jquery-mask-plugin/dist/"))
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

// we will pass our 'app' to 'https' server
https
  .createServer(
    {
      key: fs.readFileSync("./key.pem"),
      cert: fs.readFileSync("./cert.pem"),
      passphrase: "12345",
    },
    app
  )
  .listen(config.port, () =>
    console.log(`HackStackAPI listening at https://localhost:${config.port}`)
  )
