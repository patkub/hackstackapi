$(function () {
  window.hackstack = window.hackstack || {}
  ;(function (hackstack) {
    // render the navbar
    const navbar = new HackStackNavBar("addGame")
    navbar.inject("#navbar")

    $("#gameSearch").on("input", function () {
      $("#gameSearch").autocomplete({
        source: function (request, response) {
          return $.ajax({
            url: encodeURI("/api/rentalItem/giantbombSearch/" + request.term),
            dataType: "json",
            success: function (data) {
              response(data)
            },
          })
        },
      })
    })

    $("#gameSearch").on("autocompleteselect", function (_, ui) {
      // Half-Life 2: Episode One
      const gameName = ui.item.value
      //console.log(gameName)

      $.getJSON(
        encodeURI("/api/rentalItem/giantbombInfo/" + gameName),
        (data) => {
          fillFormData(data)
          const gameId = data.id
          console.log(gameId)
          // use gameId to get genre
          $.getJSON(
            encodeURI("/api/rentalItem/giantbomb/" + gameId),
            (data2) => {
              $("#inputGenre").val(data2.genre)
            }
          )
        }
      )
    })

    /**
     * Fill the add game form with data
     * @param {Object} data game data from GiantBomb API
     */
    function fillFormData(data) {
      //console.log(data)
      $("#inputTitle").val(data.title)
      $("#inputYear").val(data.yearReleased)
      $("#inputDesc").val(data.itemDesc)
      $("#inputImagePath").val(data.imagePath)
    }
  })(window.hackstack)
})
