$(function () {
  window.hackstack = window.hackstack || {}
  ;(function (hackstack) {
    // render the navbar
    const navbar = new HackStackNavBar("home")
    navbar.inject("#navbar")

    // render the navtabs
    const navtabs = new HackStackNavTabs("movies")
    navtabs.inject("#navtabs")

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

        // make a card deck out of current movies
        // aligns empty spaces evenly
        let cardDeck = new HackStackCardDeck(movies, NUM_CHUNKS)
        document.getElementById("movies").append(cardDeck.render())
      }

      // TODO: get rental status from Java API
      hackstack.showRentalItemSmallOverlay(2, "Unavailable")
    })
  })(window.hackstack)
})
