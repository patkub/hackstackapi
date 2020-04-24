$(function () {
  window.hackstack = window.hackstack || {}

  // TODO: port to Java api
  // the express.js api for testing purposes
  window.hackstack.API_SERVER = "http://127.0.0.1:3000/api/"
  ;(function (hackstack) {
    // render the navbar
    const navbar = new HackStackNavBar("manageCustomers")
    navbar.inject("#navbar")

    $.getJSON(hackstack.API_SERVER + "customer", function (data) {
      function parseEmail(email) {
        return email.recipient + "@" + email.domain
      }
      $.each(data, function (_, val) {
        $(
          [
            "<div class='col-md-6'>",
            "  <div class='card'>",
            "    <div class='card-body'>",
            "      <h5 class='card-title'>" + val.name + "</h5>",
            "      <p class='card-text'>",
            "         Email: <a href='mailto:" + parseEmail(val.email) + "'>",
            parseEmail(val.email) + "</a><br>",
            "         Home Address: " + val.homeAddress + "<br>",
            "         Home Phone: <a href='tel:" + val.homePhone + "'>",
            val.homePhone + "</a><br>",
            "         Mobile Phone: <a href='tel:" + val.mobilePhone + "'>",
            val.mobilePhone + "</a>" + "<br>",
            "      </p><a href='mailto:" +
              parseEmail(val.email) +
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
