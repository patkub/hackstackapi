$(function () {
  window.hackstack = window.hackstack || {}
  ;(function (hackstack) {
    // render the navbar
    const navbar = new HackStackNavBar("inventoryReport")
    navbar.inject("#navbar")

    // render the footer
    const footer = new HackStackFooter()
    footer.inject("#footer")

    $.get(hackstack.API_SERVER + "/generate/inventoryReport", (data) => {
      $("#inventoryReport").attr("src", hackstack.API_SERVER + data)
    })
  })(window.hackstack)
})
