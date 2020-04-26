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
        password: $("inputPassword").val(),
        homeAddress: $("#inputHomeAddress").val(),
        homePhone: $("#inputHomePhone").val(),
        mobilePhone: $("#inputMobilePhone").val(),
        email: $("#inputEmail").val(),
      }

      $.post(hackstack.API_SERVER + "customers/add", data)
        .done(function (msg) {
          // successfully added
          hackstack.alertSuccess("<strong>Customer added successfully!</strong>")
        })
        .fail(function (xhr, textStatus, errorThrown) {
          // failed to add
          hackstack.alertDanger("<strong>Oh no! An error occurred trying to add the customer.</strong>")
        })

      // disable default browser form submit action
      return false
    })
  })(window.hackstack)
})
