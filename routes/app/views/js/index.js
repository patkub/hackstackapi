$(function () {
  window.hackstack = window.hackstack || {}
  ;(function (hackstack) {
    // create the components
    const navbar = new HackStackNavBar("home")
    const navtabs = new HackStackNavTabs("movies")
    const footer = new HackStackFooter()

    // render the components
    $("#navbar").append(navbar.render())
    $("#navtabs").append(navtabs.render())
    $("#footer").append(footer.render())

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

      $(data).each((_, val) => {
        // show rental status overlay
        if (hackstack.overlayStates.indexOf(val.rentalStatus) >= 0) {
          hackstack.showRentalItemSmallOverlay(val.itemID, val.rentalStatus)
        }
      })
    })
  })(window.hackstack)
})
