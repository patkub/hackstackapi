$(function () {
  window.hackstack = window.hackstack || {}
  ;(function (hackstack) {
    // create the components
    const navbar = new HackStackNavBar("inventoryReport")
    const footer = new HackStackFooter()

    // render the components
    $("#navbar").append(navbar.render())
    $("#footer").append(footer.render())

    $.get(hackstack.API_SERVER + "/generate/inventoryReport", (data) => {
      $("#inventoryReport").attr("src", hackstack.API_SERVER + data)
    })
  })(window.hackstack)
})
