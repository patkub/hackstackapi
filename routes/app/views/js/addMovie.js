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
    $("#imdbID").on("input", function (e) {
      // clear movie search
      $("#movieSearch").val("")

      // extract imdb id, supported formats:
      // 1) https://www.imdb.com/title/tt1502397/
      // 2) tt1502397
      const imdb_id = $("#imdbID").val().match(/tt\d+/)

      // http://www.omdbapi.com/?apikey=[yourkey]&
      const omdb_url = "http://www.omdbapi.com/?apikey={0}&i={1}".format(
        hackstack.API_KEYS.OMDB,
        imdb_id
      )

      $.getJSON(omdb_url, (data) => fillFormData(data))
    })

    /**
     * Movie auto-complete code is adapted from: https://jsfiddle.net/yassarikhan786/0kcpqeg5/
     */

    $("#movieSearch").on("input", function () {
      // clear imdb id
      $("#imdbID").val("")

      $("#movieSearch").autocomplete({
        source: function (request, response) {
          // replace spaces with a '+'
          const search = request.term.replace(/\s/g, "+")
          return $.ajax({
            // http://www.omdbapi.com/?apikey=[yourkey]&
            url: "http://www.omdbapi.com/?apikey={0}&s={1}&type=movie&r=json".format(
              hackstack.API_KEYS.OMDB,
              search
            ),
            dataType: "json",
            success: function (data) {
              var results = []
              const list = data.Search
              if (list != undefined) {
                // we only care about the imdbID, so we can use it to query all the data we need
                results = $.map(list, function (v, i) {
                  return {
                    label: v.Title + " (" + v.Year + ")",
                    value: v.imdbID,
                  }
                })
              } else results = undefined
              response(results)
            },
          })
        },
      })
    })

    $("#movieSearch").on("autocompleteselect", function (e, ui) {
      console.log(ui.item.value)
      const imdbID = ui.item.value
      // http://www.omdbapi.com/?apikey=[yourkey]&
      const omdb_url = "http://www.omdbapi.com/?apikey={0}&i={1}".format(
        hackstack.API_KEYS.OMDB,
        imdbID
      )
      $.getJSON(omdb_url, (data) => fillFormData(data))
    })

    /**
     * Fill the add movie form with data
     * @param {Object} data movie data from OMDb API
     */
    function fillFormData(data) {
      $("#inputTitle").val(data.Title)
      $("#inputYear").val(data.Year)
      $("#inputGenre").val(data.Genre)
      $("#inputDesc").val(data.Plot)
      $("#inputContentRating").val(data.Rated)
      if (data.Poster !== "N/A") {
        $("#inputImagePath").val(data.Poster)
      }
      $("#inputRuntime").val(data.Runtime.match(/\d+/)[0])
    }

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
        imagePath: $("#inputImagePath").val(),
        runtime: $("#inputRuntime").val(),
      }
      console.log(data)

      // it will return a boolean with whether or not the item was added
      $.post("http://192.168.122.1:8080/movies/add", data)
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
