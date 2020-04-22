$(function () {
  // render the navbar
  const navbar = new HackStackNavBar("home")
  navbar.inject("#navbar")

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

  $.getJSON(window.hackstack.API_SERVER + "movies", function (data) {
    // movies per row
    const NUM_CHUNKS = 3

    for (let i = 0; i < data.length; i += NUM_CHUNKS) {
      let temparray = data.slice(i, i + NUM_CHUNKS)

      // make array of chunks
      let movies = []
      $.each(temparray, function (_, val) {
        const smallRentalItem = new HackStackRentalItemSmall(
          "movie",
          val.itemID,
          val.title,
          val.year,
          val.description,
          val.imagePath,
          "/rentMovie/"
        )

        movies.push(smallRentalItem.render())
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
