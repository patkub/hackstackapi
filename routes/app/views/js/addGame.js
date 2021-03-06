$(function () {
  window.hackstack = window.hackstack || {}
  ;(function (hackstack) {
    const navbar = new HackStackNavBar("addGame")
    const footer = new HackStackFooter()

    // render the navbar and footer
    $("#navbar").append(navbar.render())
    $("#footer").append(footer.render())

    $("#gameSearch").on("input", function () {
      $("#gameSearch").autocomplete({
        source: function (request, response) {
          return $.ajax({
            url:
              hackstack.WRAPPER_API_SERVER +
              "/gameSearch/giantbombSearch/" +
              encodeURIComponent(request.term),
            dataType: "json",
            success: function (data) {
              response(data)
            },
          })
        },
      })
    })

    $("#gameSearch").on("autocompleteselect", function (_, ui) {
      const gameName = ui.item.value

      $.getJSON(
        hackstack.WRAPPER_API_SERVER + "/gameSearch/giantbombInfo/" + encodeURIComponent(gameName),
        (data) => {
          fillFormData(data)
          const gameId = data.id
          // use gameId to get genre
          $.getJSON(
            hackstack.WRAPPER_API_SERVER + "/gameSearch/giantbomb/" + gameId,
            (data2) => {
              $("#inputGenre").val(data2.genre)
            }
          )
        }
      )
    })

    /**
     * Add the new game
     */
    $("#addNewGame").submit(function () {
      const data = {
        title: $("#inputTitle").val(),
        year: $("#inputYear").val(),
        genre: $("#inputGenre").val(),
        description: $("#inputDesc").val(),
        rating: $("#inputContentRating").val(),
        imagePath: $("#inputImagePath").val(),
        isMultiplayer: $("#isMultiplayer").is(":checked"),
      }

      $.post(hackstack.API_SERVER + "games/add", data)
        .done(function (msg) {
          // successfully added
          hackstack.alertSuccess("<strong>Game added successfully!</strong>")
        })
        .fail(function (xhr, textStatus, errorThrown) {
          // failed to add
          hackstack.alertDanger(
            "<strong>Oh no! An error occurred trying to add the game.</strong>"
          )
        })

      // disable default browser form submit action
      return false
    })

    /**
     * Fill the add game form with data
     * @param {Object} data game data from GiantBomb API
     */
    function fillFormData(data) {
      $("#inputTitle").val(data.title)
      $("#inputYear").val(data.yearReleased)
      $("#inputDesc").val(data.itemDesc)
      $("#inputImagePath").val(data.imagePath)
    }
  })(window.hackstack)
})
