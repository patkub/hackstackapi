$(function () {
  window.hackstack = window.hackstack || {}
  ;(function (hackstack) {
    // create the components
    const navbar = new HackStackNavBar("home")
    const footer = new HackStackFooter()

    // render the components
    $("#navbar").append(navbar.render())
    $("#footer").append(footer.render())

    let hsRentalMovie

    // get movie id from url
    const movieID = hackstack.computeURLItemID()
    // get movie data
    $.getJSON(
      hackstack.API_SERVER + "rentalItem/movie?itemID={0}".format(movieID),
      function (data) {
        hackstack.setLoadingProgress(50)
        hsRentalMovie = new HackStackRentalMovie(
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
          data.runtime,
          data.actorList
        )
        $(
          [
            "<div class='card mb-3'>",
            "   <div class='row no-gutters'>",
            "    <div class='col-md-4 bg-dark'>",
            "      <img",
            "       src='" + hsRentalMovie.getImagePath() + "'",
            "       class='card-img rounded-0'",
            "       alt='" + hsRentalMovie.getTitle() + " poster'",
            "      />",
            "    </div>",
            "    <div class='col-md-8'>",
            "      <div class='card-body bg-dark'>",
            "        <h5 class='card-title font-weight-bolder'>",
            hsRentalMovie.computeCardTitle(),
            "</h5>",
            "        <div class='card-text'>",
            "          <div class='tags'>",
            hsRentalMovie.computeGenreTags(),
            "          </div>",
            "          <div class='badges mb-3'>",
            "             <span class='badge badge-secondary'><i class='fa fa-clock-o'></i> Runtime: " +
              hsRentalMovie.getRuntime() +
              " min</span> ",
            "             <span class='badge badge-secondary'>Content Rating: " +
              hsRentalMovie.getRating() +
              "</span> ",
            "          </div>",
            "          <p class='movie-description'>" +
              hsRentalMovie.getDescription() +
              "</p>",
            hsRentalMovie.computeActors(),
            "        </div>",
            "      </div>",
            "      <ul class='list-group list-group-flush'>",
            "        <li class='list-group-item list-group-item-dark'>",
            "          Rental Status: " + hsRentalMovie.getRentalStatus(),
            "        </li>",
            hsRentalMovie.computeLate(),
            hsRentalMovie.computeFine(),
            "      </ul>",
            "      <div class='card-footer bg-dark rounded-0'>",
            "        <a id='btnRent' href='#' class='btn btn-primary'>Rent</a>",
            "        <a id='btnReserve' href='#' class='btn btn-secondary'>Reserve</a>",
            "      </div>",
            "    </div>",
            "  </div>",
            "</div>",
          ].join("\n")
        ).appendTo("#bigmovie")

        $("#btnRent").click(function () {
          if (hsRentalMovie) {
            const data = {
              itemID: hsRentalMovie.getItemID(),
            }
            $.post(hackstack.API_SERVER + "rent", data)
              .done(function (msg) {
                // successfully rented
                $("#alert")
                  .removeClass("d-none")
                  .removeClass("alert-danger")
                  .addClass("alert-success")
                  .html("<strong>Movie rented successfully!</strong>")
              })
              .fail(function (xhr, textStatus, errorThrown) {
                // failed to rent
                $("#alert")
                  .removeClass("d-none")
                  .addClass("alert-danger")
                  .html(
                    "<strong>Oh no! An error occurred trying to rent the movie.</strong>"
                  )
              })
          }
        })

        $("#btnReserve").click(function () {
          if (hsRentalMovie) {
            const data = {
              itemID: hsRentalMovie.getItemID(),
            }
            $.post(hackstack.API_SERVER + "reserve", data)
              .done(function (msg) {
                // successfully reserved
                $("#alert")
                  .removeClass("d-none")
                  .removeClass("alert-success")
                  .addClass("alert-success")
                  .html("<strong>Movie reserved successfully!</strong>")
              })
              .fail(function (xhr, textStatus, errorThrown) {
                // failed to reserve
                $("#alert")
                  .removeClass("d-none")
                  .addClass("alert-danger")
                  .html(
                    "<strong>Oh no! An error occurred trying to reserve the movie.</strong>"
                  )
              })
          }
        })

        // done
        hackstack.setLoadingProgress(100)

        // hide progress after 0.5 seconds
        setTimeout(function () {
          $(".progress").css("display", "none")
        }, 500)
      }
    )
  })(window.hackstack)
})
