const fs = require("fs")

const common = {}

common.loadJSON = function (file) {
  const raw = fs.readFileSync(file)
  return JSON.parse(raw)
}

module.exports = common
