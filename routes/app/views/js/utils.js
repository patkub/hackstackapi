window.hackstack = window.hackstack || {}

// the Java api
window.hackstack.API_SERVER = "http://127.0.0.1:4567/"

// the express.js api for testing purposes
//window.hackstack.API_SERVER = "http://127.0.0.1:3000/api/"

if (!String.prototype.format) {
  String.prototype.format = function () {
    var args = arguments
    return this.replace(/{(\d+)}/g, function (match, number) {
      return typeof args[number] != "undefined" ? args[number] : match
    })
  }
}
