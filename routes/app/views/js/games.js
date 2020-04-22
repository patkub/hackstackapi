$(function () {
  // render the navbar
  const navbar = new HackStackNavBar("home")
  navbar.inject("#navbar")

  $.getJSON(window.hackstack.API_SERVER + "games", function (data) {
    // games per row
    const NUM_CHUNKS = 3

    for (let i = 0; i < data.length; i += NUM_CHUNKS) {
      let temparray = data.slice(i, i + NUM_CHUNKS)

      // make array of chunks
      let games = []
      $.each(temparray, function (_, val) {
        const smallRentalItem = new HackStackRentalItemSmall(
          "game",
          val.itemID,
          val.title,
          val.year,
          val.description,
          val.imagePath,
          "/rentGame/"
        )

        games.push(smallRentalItem.render())
      })

      // make a deck out of these cards
      var deck = $("<div class='card-deck'></div>")
      $.each(games, function (_, val) {
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
