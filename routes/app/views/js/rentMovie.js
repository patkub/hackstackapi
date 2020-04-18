$(function () {
  // get the movie id from url
  const movieIDUrl = window.location.href.substring(
    window.location.href.lastIndexOf("/") + 1
  )
  // split out the api ids
  const movieIDParts = movieIDUrl.split(":")
  const imdbID = movieIDParts[0]
  const tmdbID = movieIDParts[1]

  function setLoadingProgress(val) {
    $("#loadingProgress")
      .css("width", val + "%")
      .attr("aria-valuenow", val)
  }

  /**
   * Convert genre list into bootstrap badges
   * @param genre {String} tags "Action, Crime, Drama"
   * @return {String} bootstrap tag html
   */
  function getTags(genre) {
    const tags = genre.split(", ")
    let content = ""
    for (const tag of tags) {
      // note: space character after </span> tag is important for spacing
      content +=
        "<span class='badge badge-secondary'><i class='fa fa-tag'></i>" +
        tag +
        "</span> "
    }
    return content
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

  // get movie OMDb api data using imdb id
  $.getJSON("/api/rentalItem/movie/{0}".format(imdbID), function (dataOMDB) {
    setLoadingProgress(50)
    // now grab the movie backdrop from tmdb
    $.getJSON("/api/rentalItem/movieTMDb/{0}".format(tmdbID), function (
      dataTMDB
    ) {
      setLoadingProgress(75)
      // now get the cast from tmdb
      $.getJSON(
        "/api/rentalItem/movieTMDbCredits/{0}".format(tmdbID),
        function (dataTMDBCredits) {
          // keep only first 5 cast members that have a name and picture
          const cast = dataTMDBCredits.cast
            .filter(function (el) {
              return el.name !== null && el.profile_path !== null
            })
            .slice(0, 5)

          $(
            [
              "<div class='card mb-3'>",
              "   <div class='row no-gutters'>",
              "    <div class='col-md-4 bg-dark'>",
              "      <img",
              "       src='" + dataOMDB.poster + "'",
              "       class='card-img rounded-0'",
              "       alt='" + dataOMDB.title + " poster'",
              "      />",
              "    </div>",
              "    <div class='col-md-8'>",
              "      <div class='card-body' style=\"background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://image.tmdb.org/t/p/original" +
                dataTMDB.backdropPath +
                "') center center/cover no-repeat #ccc;\">",
              "        <h5 class='card-title font-weight-bolder'>" +
                dataOMDB.title +
                " " +
                dataOMDB.yearReleased +
                "</h5>",
              "        <div class='card-text'>",
              "          <div class='tags' id='tags'>",
              getTags(dataOMDB.genre),
              "          </div>",
              "          <p class='movie-description'>" +
                dataOMDB.itemDesc +
                "</p>",
              getCredits(cast),
              "        </div>",
              "      </div>",
              "      <ul class='list-group list-group-flush'>",
              "        <li class='list-group-item list-group-item-dark'>",
              "          Content Rating: " + dataOMDB.contentRating,
              "        </li>",
              "        <li class='list-group-item list-group-item-dark'>",
              "          Rental Status: " + dataOMDB.rentalStatus,
              "        </li>",
              "        <li class='list-group-item list-group-item-warning'>Late:" +
                dataOMDB.isLate +
                "</li>",
              "        <li class='list-group-item list-group-item-danger'>Fine:" +
                dataOMDB.fine +
                "</li>",
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
    })
  })
})