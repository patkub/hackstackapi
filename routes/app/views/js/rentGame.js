$(function () {
  window.hackstack = window.hackstack || {}
  ;(function (hackstack) {
    // render the navbar
    const navbar = new HackStackNavBar("home")
    navbar.inject("#navbar")

    let hsRentalGame

    function setLoadingProgress(val) {
      $("#loadingProgress")
        .css("width", val + "%")
        .attr("aria-valuenow", val)
    }

    // get the game id from url
    const gameID = hackstack.computeURLItemID()
    // get game data
    $.getJSON(
      hackstack.API_SERVER + "rentalItem/game?itemID={0}".format(gameID),
      function (data) {
        setLoadingProgress(50)
        hsRentalGame = new HackStackRentalGame(
          data.itemID,
          data.title,
          data.year,
          data.description,
          data.genre,
          data.imagePath,
          data.rating,
          data.rentalStatus,
          data.late,
          data.fine,
          data.isMultiplayer
        )
        $(
          [
            "<div class='card mb-3'>",
            "   <div class='row no-gutters'>",
            "    <div class='col-md-4 bg-dark'>",
            "      <img",
            "       src='" + hsRentalGame.getImagePath() + "'",
            "       class='card-img rounded-0'",
            "       alt='" + hsRentalGame.getTitle() + " poster'",
            "      />",
            "    </div>",
            "    <div class='col-md-8'>",
            "      <div class='card-body bg-dark'>",
            "        <h5 class='card-title font-weight-bolder'>" +
              hsRentalGame.computeCardTitle(),
            "</h5>",
            "        <div class='card-text'>",
            "          <div class='tags'>",
            hsRentalGame.computeGenreTags(),
            "          </div>",
            "          <div class='badges'>",
            hsRentalGame.isMultiplayer()
              ? "<span class='badge badge-secondary'><i class='fa fa-user-friends'></i> Multiplayer</span> "
              : "<span class='badge badge-secondary'><i class='fa fa-user'></i> Single Player</span> ",
            "             <span class='badge badge-secondary'>Content Rating: " +
              hsRentalGame.getRating() +
              "</span> ",
            "          </div>",
            "          <p class='movie-description'>" +
              hsRentalGame.getDescription() +
              "</p>",
            //getCredits(cast),
            "        </div>",
            "      </div>",
            "      <ul class='list-group list-group-flush'>",
            "        <li class='list-group-item list-group-item-dark'>",
            "          Rental Status: " + hsRentalGame.getRentalStatus(),
            "        </li>",
            hsRentalGame.computeLate(),
            hsRentalGame.computeFine(),
            "      </ul>",
            "      <div class='card-footer bg-dark rounded-0'>",
            "        <a id='btnRent' href='#' class='btn btn-primary'>Rent</a>",
            "        <a id='btnReserve' href='#' class='btn btn-secondary'>Reserve</a>",
            "      </div>",
            "    </div>",
            "  </div>",
            "</div>",
          ].join("\n")
        ).appendTo("#biggame")

        $("#btnRent").click(function () {
          if (hsRentalGame) {
            const data = {
              itemID: hsRentalGame.getItemID(),
            }
            $.post(hackstack.API_SERVER + "rent", data)
              .done(function (msg) {
                // successfully rented
                $("#alert")
                  .removeClass("d-none")
                  .removeClass("alert-danger")
                  .addClass("alert-success")
                  .html("<strong>Game rented successfully!</strong>")
              })
              .fail(function (xhr, textStatus, errorThrown) {
                // failed to rent
                $("#alert")
                  .removeClass("d-none")
                  .removeClass("alert-success")
                  .addClass("alert-danger")
                  .html(
                    "<strong>Oh no! An error occurred trying to rent the game.</strong>"
                  )
              })
          }
        })

        $("#btnReserve").click(function () {
          if (hsRentalGame) {
            const data = {
              itemID: hsRentalGame.getItemID(),
            }
            $.post(hackstack.API_SERVER + "reserve", data)
              .done(function (msg) {
                // successfully reserved
                $("#alert")
                  .removeClass("d-none")
                  .addClass("alert-success")
                  .html("<strong>Game reserved successfully!</strong>")
              })
              .fail(function (xhr, textStatus, errorThrown) {
                // failed to reserve
                $("#alert")
                  .removeClass("d-none")
                  .addClass("alert-danger")
                  .html(
                    "<strong>Oh no! An error occurred trying to reserve the game.</strong>"
                  )
              })
          }
        })

        // done
        setLoadingProgress(100)

        // hide progress after 0.5 seconds
        setTimeout(function () {
          $(".progress").css("display", "none")
        }, 500)
      }
    )
  })(window.hackstack)
})
