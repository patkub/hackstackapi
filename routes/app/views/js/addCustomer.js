$(function () {
  window.hackstack = window.hackstack || {}
  ;(function (hackstack) {
    const navbar = new HackStackNavBar("addCustomer")
    const footer = new HackStackFooter()

    // render the navbar and footer
    $("#navbar").append(navbar.render())
    $("#footer").append(footer.render())

    // mask input phone numbers
    $("#inputHomePhone").inputmask({"mask": "(999) 999-9999"});
    $("#inputMobilePhone").inputmask({"mask": "(999) 999-9999"});

    /**
     * Add the new customer
     */
    $("#addNewCustomer").submit(function (e) {
      e.preventDefault()

      const data = {
        name: $("#inputName").val(),
        homeAddress: $("#inputHomeAddress").val(),
        homePhone: $("#inputHomePhone").val(),
        mobilePhone: $("#inputMobilePhone").val(),
        email: $("#inputEmail").val(),
      }
      console.log(data)

      // it will return a boolean with whether or not the item was added
      $.ajax({
        type: "POST",
        url:  hackstack.API_SERVER + "customers/add",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(data),
      })
        .done(function (msg) {
          // successfully added
          $("#alert")
            .removeClass("d-none")
            .addClass("alert-success")
            .html("<strong>Customer added successfully!</strong>")
        })
        .fail(function (xhr, textStatus, errorThrown) {
          // failed to add
          $("#alert")
            .removeClass("d-none")
            .addClass("alert-danger")
            .html(
              "<strong>Oh no! An error occurred trying to add the customer.</strong>"
            )
        })

      // disable default browser form submit action
      return false
    })
  })(window.hackstack)
})
