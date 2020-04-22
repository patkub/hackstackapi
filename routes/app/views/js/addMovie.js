$(function () {
  window.hackstack = window.hackstack || {}
  ;(function (hackstack) {
    // render the navbar
    const navbar = new HackStackNavBar("addMovie")
    navbar.inject("#navbar")

    $("#imdbID").tooltip({
      trigger: "focus",
      title: "Link to movie on imdb.com",
      placement: "bottom",
    })

    $("#btnFill").click(function (e) {
      // extract imdb id, supported formats:
      // 1) https://www.imdb.com/title/tt1502397/
      // 2) tt1502397
      const imdb_id = $("#imdbID").val().match(/tt\d+/)

      // http://www.omdbapi.com/?apikey=[yourkey]&
      const omdb_url = "http://www.omdbapi.com/?apikey={0}&i={1}".format(
        hackstack.API_KEYS.OMDB,
        imdb_id
      )

      const new_movie = {
        title: "",
        itemID: "",
        genre: "",
        itemDesc: "",
        contentRating: "",
        yearReleased: "",
        rentalStatus: "",
        isLate: "",
        fine: [],
      }

      $.getJSON(omdb_url, function (data) {
        new_movie.title = data.Title
        new_movie.year = data.Year
        new_movie.genre = data.Genre
        new_movie.description = data.Plot
        new_movie.contentRating = data.Rated

        $("#inputTitle").val(new_movie.title)
        $("#inputYear").val(new_movie.year)
        $("#inputGenre").val(new_movie.genre)
        $("#inputDesc").val(new_movie.description)
        $("#inputContentRating").val(new_movie.contentRating)
      })
    })

    $("#addNewMovie").submit(function (e) {
      const new_movie = {
        title: $("#inputTitle").val(),
        itemID: $("#inputId").val(),
        genre: $("#inputGenre").val(),
        itemDesc: $("#inputDesc").val(),
        contentRating: $("#inputContentRating").val(),
        yearReleased: $("#inputYear").val(),
        rentalStatus: "",
        isLate: "",
        fine: [],
      }
      console.log(new_movie)

      let data = {
        title: $("#inputTitle").val(),
        year: $("#inputYear").val(),
        itemID: $("#inputId").val(),
        genre: $("#inputGenre").val(),
        description: $("#inputDesc").val(),
        rating: $("inputContentRating").val(),
      }

      let posted = $.post("http://localhost:8080/movies/add", data)

      //it will return a boolean with whether or not the item was added

      return false
    })
  })(window.hackstack)
})
