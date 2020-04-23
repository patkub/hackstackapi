$(function () {
  window.hackstack = window.hackstack || {}
  ;(function (hackstack) {
    // render the navbar
    const navbar = new HackStackNavBar("addGame")
    navbar.inject("#navbar")

    /**
     * Automatically fill out the form using Giant Bomb API
     */
    $("#giantBombID").on("input", function (e) {
      // extract giant bomb id, supported formats:
      // 1) https://www.giantbomb.com/half-life-2/3030-1539/
      // 2) 3030-1539
      const giantBombId = $("#giantBombID")
        .val()
        .match(/\d+-\d+/)

      console.log("Giant Bomb ID: " + giantBombId)

      $.ajax({
        url: "https://cors-anywhere.herokuapp.com/www.giantbomb.com/api/game/{0}/".format(
          giantBombId
        ),
        dataType: "xml",
        method: "GET",
        data: {
          api_key: hackstack.API_KEYS.GiantBomb,
        },
      })
        .then((xml) => {
          // parse the giant bomb xml with CDATA response
          console.log(xml)

          const nameEl = xml.querySelector("response > results > name")
          if (nameEl) {
            $("#inputTitle").val(nameEl.textContent)
          }

          const yearEl = xml.querySelector(
            "response > results > original_release_date"
          )
          if (yearEl) {
            $("#inputYear").val(new Date(yearEl.textContent).getFullYear())
          }

          const posterEl = xml.querySelector(
            "response > results > image > original_url"
          )
          if (posterEl) {
            $("#inputImagePath").val(posterEl.textContent)
          }

          const genres = [
            ...xml.querySelectorAll(
              "response > results > genres > genre > name"
            ),
          ]
            .map((g) => g.textContent)
            .join(", ")
          $("#inputGenre").val(genres)
        })
        .catch((err) => {
          console.error(err)
        })
    })
  })(window.hackstack)
})
