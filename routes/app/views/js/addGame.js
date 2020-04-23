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

      // TODO: extract game link
      // 1) https://www.igdb.com/games/team-fortress-2

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
          $("#inputGenre").val(data.genre)
          $("#inputDesc").val(data.itemDesc)
          $("#inputImagePath").val(data.imagePath)
        })
        .catch((err) => {
          console.error(err)
        })
    })

    $("#gameSearch").on("input", function () {
      // clear giant bomb id
      $("#giantBombID").val("")

      $("#gameSearch").autocomplete({
        source: function (request, response) {
          return $.ajax({
            // http://www.omdbapi.com/?apikey=[yourkey]&
            url: encodeURI("/api/rentalItem/giantbombSearch/" + request.term),
            dataType: "json",
            success: function (data) {
              response(data)
            },
          })
        },
      })
    })

    $("#gameSearch").on("autocompleteselect", function (e, ui) {
      // Half-Life 2: Episode One
      const gameName = ui.item.value
      console.log(gameName)

      $.getJSON(
        encodeURI("/api/rentalItem/giantbombInfo/" + gameName),
        (data) => fillFormData(data)
      )
    })

    /**
     * Fill the add game form with data
     * @param {Object} data game data from GiantBomb API
     */
    function fillFormData(data) {
      console.log(data)
      $("#inputTitle").val(data.title)
      $("#inputYear").val(data.yearReleased)
      $("#inputGenre").val(data.genre)
      $("#inputDesc").val(data.itemDesc)
      $("#inputImagePath").val(data.imagePath)
    }
  })(window.hackstack)
})
