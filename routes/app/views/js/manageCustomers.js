$(function () {
  window.hackstack = window.hackstack || {}
  ;(function (hackstack) {
    // create the components
    const navbar = new HackStackNavBar("manageCustomers")
    const footer = new HackStackFooter()

    // render the components
    $("#navbar").append(navbar.render())
    $("#footer").append(footer.render())

    $.getJSON(hackstack.API_SERVER + "customers", function (data) {
      $.each(data, function (_, val) {
        $(
          [
            "<div class='col-md-6'>",
            "  <div class='card mb-3'>",
            "    <div class='card-body'>",
            "      <h5 class='card-title'>" + val.name + "</h5>",
            "      <p class='card-text'>",
            "         Email: <a href='mailto:" + val.email + "'>",
            val.email + "</a><br>",
            "         Home Address: " + val.homeAddress + "<br>",
            "         Home Phone: <a href='tel:" + val.homePhone + "'>",
            val.homePhone + "</a><br>",
            "         Mobile Phone: <a href='tel:" + val.mobilePhone + "'>",
            val.mobilePhone + "</a>" + "<br>",
            "      </p><a href='mailto:" +
              val.email +
              "' class='card-link'>Email",
            "      </a>",
            "<a href='tel:" +
              val.homePhone +
              "' class='card-link'>Home Phone</a>",
            "<a href='tel:" +
              val.mobilePhone +
              "' class='card-link'>Mobile Phone</a>",
            "    </div>",
            "  </div>",
            "</div>",
          ].join("\n")
        ).appendTo("#customers")
      })
    })
  })(window.hackstack)
})
