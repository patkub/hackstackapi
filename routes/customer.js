const express = require("express")
const router = express.Router()

router
  // Add a binding for '/customer/'
  .get("/", (req, res) => {
    // render the /customer view
    let customer = {
      name: "",
      homeAddress: "",
      homePhone: "",
      mobilePhone: "",
      email: "",
      customerID: "",
      payments: "",
      fines: "",
    }

    return res.status(200).json(customer)
  })

module.exports = router
