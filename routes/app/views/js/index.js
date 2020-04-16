$.getJSON("/api/customer", function (data) {
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
        "<a href='tel:" + val.homePhone + "' class='card-link'>Home Phone</a>",
        "    </div>",
        "  </div>",
        "</div>",
      ].join("\n")
    ).appendTo("#customers")
  })
})

$.getJSON("/api/payment", function (data) {
  $.each(data, function (_, val) {
    $(
      [
        "<tr>",
        "  <th scope='row'>" + val.paymentType + "</th>",
        "  <td>" + val.chargeAmount + "</td>",
        "  <td>" + val.changeOwned + "</td>",
        "  <td>" + val.transactionSuccessful + "</td>",
        "</tr>",
      ].join("\n")
    ).appendTo("#payments")
  })
})
