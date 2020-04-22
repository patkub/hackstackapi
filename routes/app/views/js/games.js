$(function () {
  // render the navbar
  const navbar = new HackStackNavBar("home")
  navbar.inject("#navbar")

  $.getJSON(window.hackstack.API_SERVER + "games", function (data) {
    // movies per row
    const NUM_CHUNKS = 3

    for (let i = 0; i < data.length; i += NUM_CHUNKS) {
      let temparray = data.slice(i, i + NUM_CHUNKS)

      // make array of chunks
      let movies = []
      $.each(temparray, function (_, val) {
        movies.push(
          $(
            [
              "<div class='card'>",
              "  <img class='card-img-top' src='" +
                val.imagePath +
                "' alt='Poster' />",
              "  <div class='card-body'>",
              "    <h5 class='card-title'>" +
                val.title +
                " " +
                val.year +
                "</h5>",
              "    <p class='card-text'>" + val.description + "</p>",
              "  </div>",
              // These details are not included in card view
              /*"  <ul class='list-group list-group-flush'>",
              "    <li class='list-group-item'>Genre: " + val.genre + "</li>",
              "    <li class='list-group-item'>Content Rating: " +
                val.contentRating +
                "</li>",
              "    <li class='list-group-item'>Year Released: " +
                val.yearReleased +
                "</li>",
              "    <li class='list-group-item'>Rental Status: " +
                val.rentalStatus +
                "</li>",
              "    <li class='list-group-item'>Late: " + val.isLate + "</li>",
              "    <li class='list-group-item'>Fine: " + val.fine + "</li>",
              "  </ul>",*/
              "  <div class='card-footer'>",
              "    <a href='/rentGame/" +
                val.itemID +
                "' class='btn btn-primary'>Rent</a>",
              "    <a href='/rentGame/" +
                val.itemID +
                "' class='btn btn-secondary'>Reserve</a>",
              "  </div>",
              "</div>",
            ].join("\n")
          )
        )
      })

      // make a deck out of these cards
      var deck = $("<div class='card-deck'></div>")
      $.each(movies, function (_, val) {
        deck.append(val)
      })

      // if uneven, add empty cards for spacing
      for (let i = 0; i < NUM_CHUNKS - temparray.length; i++) {
        deck.append("<div class='card' style='visibility: hidden;'></div>")
      }

      // add the current deck to the page
      deck.appendTo("#games")
    }
  })
})
