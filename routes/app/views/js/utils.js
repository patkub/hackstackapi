window.hackstack = window.hackstack || {}

// the Java api
window.hackstack.API_SERVER = "http://127.0.0.1:8080/"

// the express.js api for testing purposes
//window.hackstack.API_SERVER = "http://127.0.0.1:3000/api/"

window.hackstack.API_KEYS = Object.freeze({
  OMDB: "87daca5d",
  TMDB: "cf7c502592526f1498d082fd122d7309",
})

if (!String.prototype.format) {
  String.prototype.format = function () {
    var args = arguments
    return this.replace(/{(\d+)}/g, function (match, number) {
      return typeof args[number] != "undefined" ? args[number] : match
    })
  }
}

;(function (hackstack) {
  /**
   * Get item id from url
   * @return {String} item id
   */
  function computeURLItemID() {
    return window.location.href.substring(
      window.location.href.lastIndexOf("/") + 1
    )
  }

  hackstack.computeURLItemID = computeURLItemID
})(window.hackstack)
