$(function () {
  window.hackstack = window.hackstack || {}
  ;(function (hackstack) {
    // render the navbar
    const navbar = new HackStackNavBar("inventoryReport")
    navbar.inject("#navbar")
  })(window.hackstack)
})
