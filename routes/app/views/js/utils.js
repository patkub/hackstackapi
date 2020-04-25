window.hackstack = window.hackstack || {}

if (!String.prototype.format) {
  String.prototype.format = function () {
    var args = arguments
    return this.replace(/{(\d+)}/g, function (match, number) {
      return typeof args[number] != "undefined" ? args[number] : match
    })
  }
}

;(function (hackstack) {
  // the Java api
  hackstack.API_SERVER = "http://127.0.0.1:8080/"

  // the express.js api wrapper used for game search
  hackstack.WRAPPER_API_SERVER = "http://127.0.0.1:3000/api/"

  hackstack.API_KEYS = Object.freeze({
    OMDB: "87daca5d",
    TMDB: "cf7c502592526f1498d082fd122d7309",
  })

  /**
   * Get item id from url
   * @return {String} item id
   */
  function computeURLItemID() {
    return window.location.href.substring(
      window.location.href.lastIndexOf("/") + 1
    )
  }

  /**
   * Set loading progress
   * Looks for element with id #loadingProgress on the page
   *
   * @param {String} val Progress percentage
   */
  function setLoadingProgress(val) {
    $("#loadingProgress")
      .css("width", val + "%")
      .attr("aria-valuenow", val)
  }

  /**
   * Show overlay text on small rental item
   * @param {String} itemID item index starting at 0
   * @param {String} text text to overlay
   */
  function showRentalItemSmallOverlay(itemID, text) {
    const overlay = document.getElementById(
      "rentalItemSmallOverlay{0}".format(itemID)
    )
    overlay.style.display = "block"
    const textEl = overlay.querySelector(".rentalItemSmall--overlay-text")
    textEl.textContent = text
  }

  hackstack.computeURLItemID = computeURLItemID
  hackstack.setLoadingProgress = setLoadingProgress
  hackstack.showRentalItemSmallOverlay = showRentalItemSmallOverlay
})(window.hackstack)
