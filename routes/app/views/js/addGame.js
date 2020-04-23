$(function () {
  window.hackstack = window.hackstack || {}
  ;(function (hackstack) {
    // render the navbar
    const navbar = new HackStackNavBar("addGame")
    navbar.inject("#navbar")

    /**
     * Automatically fill out the form using Giant Bomb API
     */
    $("#giantBombID").on("input", function (e) {
      // extract giant bomb id, supported formats:
      // 1) https://www.giantbomb.com/half-life-2/3030-1539/
      // 2) 3030-1539
      const giantBombId = $("#giantBombID")
        .val()
        .match(/\d+-\d+/)

      console.log("Giant Bomb ID: " + giantBombId)

      $.ajax({
        url: "/api/rentalItem/giantbomb/{0}".format(giantBombId),
        dataType: "json",
        method: "GET",
      })
        .then((data) => {
          console.log(data)
          $("#inputTitle").val(data.title)
          $("#inputYear").val(data.yearReleased)
          $("#inputImagePath").val(data.imagePath)
          $("#inputGenre").val(data.genre)
        })
        .catch((err) => {
          console.error(err)
        })
    })
  })(window.hackstack)
})
