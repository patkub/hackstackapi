$(function () {
  window.hackstack = window.hackstack || {}
  ;(function (hackstack) {
    // render the navbar
    const navbar = new HackStackNavBar("inventoryReport")
    navbar.inject("#navbar")

    $.get(hackstack.API_SERVER + "/generate/inventoryReport", (data) => {
      $("#inventoryReport").attr("src", hackstack.API_SERVER + data)
    })
  })(window.hackstack)
})
