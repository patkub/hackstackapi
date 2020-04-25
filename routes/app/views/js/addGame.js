$(function () {
  window.hackstack = window.hackstack || {}
  ;(function (hackstack) {
    // render the navbar
    const navbar = new HackStackNavBar("addGame")
    navbar.inject("#navbar")

    // render the footer
    const footer = new HackStackFooter()
    footer.inject("#footer")

    $("#gameSearch").on("input", function () {
      $("#gameSearch").autocomplete({
        source: function (request, response) {
          return $.ajax({
            url: encodeURI(
              hackstack.WRAPPER_API_SERVER +
                "/gameSearch/giantbombSearch/" +
                request.term
            ),
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
        encodeURI(
          hackstack.WRAPPER_API_SERVER + "/gameSearch/giantbombInfo/" + gameName
        ),
        (data) => {
          fillFormData(data)
          const gameId = data.id
          console.log(gameId)
          // use gameId to get genre
          $.getJSON(
            encodeURI(
              hackstack.WRAPPER_API_SERVER + "/gameSearch/giantbomb/" + gameId
            ),
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
      console.log(data)

      // it will return a boolean with whether or not the item was added
      $.post(hackstack.API_SERVER + "games/add", data)
        .done(function (msg) {
          // successfully added
          $("#alert")
            .removeClass("d-none")
            .addClass("alert-success")
            .html("<strong>Game added successfully!</strong>")
        })
        .fail(function (xhr, textStatus, errorThrown) {
          // failed to add
          $("#alert")
            .removeClass("d-none")
            .addClass("alert-danger")
            .html(
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
      //console.log(data)
      $("#inputTitle").val(data.title)
      $("#inputYear").val(data.yearReleased)
      $("#inputDesc").val(data.itemDesc)
      $("#inputImagePath").val(data.imagePath)
    }
  })(window.hackstack)
})
