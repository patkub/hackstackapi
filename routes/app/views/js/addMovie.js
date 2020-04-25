$(function () {
  window.hackstack = window.hackstack || {}
  ;(function (hackstack) {
    // render the navbar
    const navbar = new HackStackNavBar("addMovie")
    navbar.inject("#navbar")

    // render the footer
    const footer = new HackStackFooter()
    footer.inject("#footer")

    // remember current number of actors
    let numActors = 0

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
      removeAllActors()

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
      removeAllActors()

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

    $("#movieSearch").on("autocompleteselect", function (_, ui) {
      //console.log(ui.item.value)
      const imdbID = ui.item.value
      // http://www.omdbapi.com/?apikey=[yourkey]&
      const omdb_url = "http://www.omdbapi.com/?apikey={0}&i={1}".format(
        hackstack.API_KEYS.OMDB,
        imdbID
      )
      $.getJSON(omdb_url, (data) => fillFormData(data))
    })

    /**
     * Adding and removing movie actors
     */

    $("#addActor").on("click", (e) => addActorListener(e))
    $("#removeActor").on("click", (e) => removeLastActorListener(e))
    $("#removeAllActors").on("click", (e) => removeAllActorsListener(e))

    function addActorListener(e) {
      e.preventDefault()
      addActor("", "")
    }

    function removeLastActorListener(e) {
      e.preventDefault()
      $("#actors").children().last().remove()
      if (numActors > 0) numActors--
    }

    function removeAllActorsListener(e) {
      e.preventDefault()
      removeAllActors()
    }

    function addActor(name, picture) {
      numActors++
      $("#actors").append(
        $(
          [
            "<div class='form-group'>",
            "<label for='inputActorName{0}'>Actor {1}</label>".format(
              numActors,
              numActors
            ),
            "<input",
            "  id='inputActorName{0}'".format(numActors),
            "  type='text'",
            "  class='inputActorName form-control'",
            "  placeholder='actor&#39;s name'",
            "  value='{0}'".format(name),
            "  required",
            "/>",
            "<input",
            "  id='inputActorPicture{0}'".format(numActors),
            "  type='text'",
            "  class='inputActorPicture form-control'",
            "  placeholder='actor&#39;s picture'",
            "  value='{0}'".format(picture),
            "  required",
            "/>",
            "</div>",
          ].join("\n")
        )
      )
    }

    function removeAllActors() {
      numActors = 0
      $("#actors").children().remove()
    }

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

      // use data.imdbID to get actors
      const credits_url = "https://api.themoviedb.org/3/movie/{0}/credits?api_key={1}".format(
        data.imdbID,
        hackstack.API_KEYS.TMDB
      )
      $.getJSON(credits_url, (data) => {
        // get only the first 5 actors that have a profile image
        const actors = data.cast.filter((a) => a.profile_path).slice(0, 5)
        // add actors to form
        for (const actor of actors) {
          addActor(
            actor.name,
            "https://image.tmdb.org/t/p/w200" + actor.profile_path
          )
        }
      })
    }

    /**
     * Add the new movie
     */
    $("#addNewMovie").submit(function (e) {
      e.preventDefault()

      // get actors from form
      const actorNames = $(".inputActorName")
        .map(function () {
          return $(this).val()
        })
        .get()
      const actorPictures = $(".inputActorPicture")
        .map(function () {
          return $(this).val()
        })
        .get()

      // list of actors
      const actors = []

      $(actorNames).each((i, name) => {
        const new_actor = {
          name: name,
          imagePath: actorPictures[i],
        }
        actors.push(new_actor)
      })

      const data = {
        title: $("#inputTitle").val(),
        year: $("#inputYear").val(),
        genre: $("#inputGenre").val(),
        description: $("#inputDesc").val(),
        rating: $("#inputContentRating").val(),
        imagePath: $("#inputImagePath").val(),
        runtime: $("#inputRuntime").val(),
        /**
         * @param {Object[]} actors movie actors
         * @param {string} actors[].name - The name of an actor
         * @param {string} actors[].imagePath - The profile picture of an actor
         */
        actors: actors,
      }
      //console.log(data)

      // it will return a boolean with whether or not the item was added
      $.ajax({
        type: "POST",
        url: "http://localhost:8080/movies/add",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(data),
      })
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
