$(function () {
  window.hackstack = window.hackstack || {}
  ;(function (hackstack) {
    // render the navbar
    const navbar = new HackStackNavBar("home")
    navbar.inject("#navbar")

    function setLoadingProgress(val) {
      $("#loadingProgress")
        .css("width", val + "%")
        .attr("aria-valuenow", val)
    }

    /**
     * HTML for the credits (actors/actresses)
     */
    function getCredits(credits) {
      let content = ""
      for (const credit of credits) {
        content += [
          "<figure class='figure'>",
          "<img src='https://image.tmdb.org/t/p/original/" +
            credit.profile_path +
            "' alt='actor' class='img-thumbnail figure-img img-fluid rounded' style='height: 75px'>",
          "<figcaption class='figure-caption'>" + credit.name + "</figcaption>",
          "</figure>",
        ].join("\n")
      }
      return content
    }

    // get movie id from url
    const movieID = hackstack.computeURLItemID()
    // get movie data
    $.getJSON(
      hackstack.API_SERVER + "rentalItem/movie?itemID={0}".format(movieID),
      function (data) {
        setLoadingProgress(50)
        const hsRentalMovie = new HackStackRentalMovie(
          movieID,
          data.title,
          data.year,
          data.description,
          data.genre,
          data.imagePath,
          data.rating,
          data.rentalStatus,
          data.late,
          data.fine,
          data.runtime
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
            "          <div class='badges'>",
            "             <span class='badge badge-secondary'><i class='fa fa-clock-o'></i> Runtime: " +
              hsRentalMovie.getRuntime() +
              "min</span> ",
            "             <span class='badge badge-secondary'>Content Rating: " +
              hsRentalMovie.getRating() +
              "</span> ",
            "          </div>",
            "          <p class='movie-description'>" +
              hsRentalMovie.getDescription() +
              "</p>",
            //getCredits(cast),
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
          //alert( "Rent button clicked" );
          $("#alert")
            .removeClass("d-none")
            .html("<strong>You Rented the Movie!</strong>")
        })

        $("#btnReserve").click(function () {
          //alert( "Reserve button clicked" );
          $("#alert")
            .removeClass("d-none")
            .html("<strong>You Reserved the Movie!</strong>")
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
