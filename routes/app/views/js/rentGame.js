$(function () {
  // render the navbar
  const navbar = new HackStackNavBar("home")
  navbar.inject("#navbar")

  // get the game id from url
  const gameID = window.location.href.substring(
    window.location.href.lastIndexOf("/") + 1
  )

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
        "<span class='badge badge-secondary'><i class='fa fa-tag'></i> " +
        tag +
        "</span> "
    }
    return content
  }

  // get game data
  $.getJSON(
    window.hackstack.API_SERVER + "rentalItem/game?itemID={0}".format(gameID),
    function (data) {
      console.log(data)
      setLoadingProgress(50)
      $(
        [
          "<div class='card mb-3'>",
          "   <div class='row no-gutters'>",
          "    <div class='col-md-4 bg-dark'>",
          "      <img",
          "       src='" + data.imagePath + "'",
          "       class='card-img rounded-0'",
          "       alt='" + data.title + " poster'",
          "      />",
          "    </div>",
          "    <div class='col-md-8'>",
          "      <div class='card-body bg-dark'>",
          "        <h5 class='card-title font-weight-bolder'>" +
            data.title +
            " " +
            data.year +
            "</h5>",
          "        <div class='card-text'>",
          "          <div class='tags'>",
          getTags(data.genre),
          "          </div>",
          "          <div class='badges'>",
          data.isMultiplayer
            ? "<span class='badge badge-secondary'><i class='fa fa-user-friends'></i> Multiplayer</span> "
            : "<span class='badge badge-secondary'><i class='fa fa-user'></i> Single Player</span> ",
          "             <span class='badge badge-secondary'>Content Rating: " +
            data.rating +
            "</span> ",
          "          </div>",
          "          <p class='movie-description'>" + data.description + "</p>",
          //getCredits(cast),
          "        </div>",
          "      </div>",
          "      <ul class='list-group list-group-flush'>",
          "        <li class='list-group-item list-group-item-dark'>",
          "          Rental Status: " + data.rentalStatus,
          "        </li>",
          data.late
            ? "<li class='list-group-item list-group-item-warning'>Late</li>"
            : "",
          data.fine > 0
            ? "<li class='list-group-item list-group-item-danger'>Fine: " +
              data.fine +
              "</li>"
            : "",
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
        //alert( "Rent button clicked" );
        $("#alert")
          .removeClass("d-none")
          .html("<strong>You Rented the Game!</strong>")
      })

      $("#btnReserve").click(function () {
        //alert( "Reserve button clicked" );
        $("#alert")
          .removeClass("d-none")
          .html("<strong>You Reserved the Game!</strong>")
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
