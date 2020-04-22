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

    /**
     * Automatically fill out the form using OMDb API
     */
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

    /**
     * Add the new movie
     */
    $("#addNewMovie").submit(function () {
      const data = {
        title: $("#inputTitle").val(),
        year: $("#inputYear").val(),
        genre: $("#inputGenre").val(),
        description: $("#inputDesc").val(),
        rating: $("#inputContentRating").val(),
      }
      console.log(data)

      // it will return a boolean with whether or not the item was added
      $.post("http://localhost:8080/movies/add", data)
        .done(function (msg) {
          // successfully added
          $("#alert")
            .removeClass("d-none")
            .addClass("alert-success")
            .html("<strong>Movie added successfully!</strong>")
        })
        .fail(function (xhr, textStatus, errorThrown) {
          // failed to add
          $("#alert")
            .removeClass("d-none")
            .addClass("alert-danger")
            .html(
              "<strong>Oh no! An error occurred trying to add the movie.</strong>"
            )
        })

      // disable default browser form submit action
      return false
    })
  })(window.hackstack)
})
