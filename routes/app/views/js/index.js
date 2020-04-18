$(function () {
  // unused payments table
  /*$.getJSON("/api/payment", function (data) {
    $.each(data, function (_, val) {
      $(
        [
          "<tr>",
          "  <th scope='row'>" + val.paymentType + "</th>",
          "  <td>" + val.chargeAmount + "</td>",
          "  <td>" + val.changeOwned + "</td>",
          "  <td>" + val.transactionSuccessful + "</td>",
          "</tr>",
        ].join("\n")
      ).appendTo("#payments")
    })
  })*/

  $.getJSON(window.hackstack.API_SERVER + "rentalItem/movies", function (data) {
    // movies per row
    const NUM_CHUNKS = 3

    // convert data json to an array
    let dataArray = $.map(data, function (value, _) {
      return [value]
    })

    for (let i = 0; i < dataArray.length; i += NUM_CHUNKS) {
      let temparray = dataArray.slice(i, i + NUM_CHUNKS)

      // make array of chunks
      let movies = []
      $.each(temparray, function (_, val) {
        movies.push(
          $(
            [
              "<div class='card'>",
              "  <img class='card-img-top' src='" +
                val.poster +
                "' alt='Poster' />",
              "  <div class='card-body'>",
              "    <h5 class='card-title'>" +
                val.title +
                " " +
                val.yearReleased +
                "</h5>",
              "    <p class='card-text'>" + val.itemDesc + "</p>",
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
              "    <a href='/rentMovie/" +
                val.imdb +
                ":" +
                val.tmdb +
                "' class='btn btn-primary'>Rent</a>",
              "    <a href='/rentMovie/" +
                val.imdb +
                ":" +
                val.tmdb +
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
      for (let i = 0; i < (movies.length % NUM_CHUNKS) - 1; i++) {
        deck.append("<div class='card' style='visibility: hidden;'></div>")
      }

      // add the current deck to the page
      deck.appendTo("#movies")
    }
  })

  // unusued omdb frontend
  /*$("#imdbid").keypress(function (e) {
    if (e.keyCode == 13) {
      // enter pressed
      const imdbid = this.value

      $.getJSON("/api/rentalItem/movie/{0}".format(imdbid), function (data) {
        console.log(data)
        $("#omdbOutputTextarea").val(JSON.stringify(data))
      })
    }
  })*/
})
