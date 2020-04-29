$(function () {
  window.hackstack = window.hackstack || {}
  ;(function (hackstack) {
    // create the components
    const navbar = new HackStackNavBar("home")
    const navtabs = new HackStackNavTabs("games")
    const footer = new HackStackFooter()

    // render the components
    $("#navbar").append(navbar.render())
    $("#navtabs").append(navtabs.render())
    $("#footer").append(footer.render())

    $.getJSON(hackstack.API_SERVER + "games", function (data) {
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

        // make a card deck out of current games
        // aligns empty spaces evenly
        let cardDeck = new HackStackCardDeck(games, NUM_CHUNKS)
        document.getElementById("games").append(cardDeck.render())
      }
    })
  })(window.hackstack)
})
