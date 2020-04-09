const express = require("express")
const app = express()
const port = 3000

const API_KEYS = Object.freeze({
  OMDB: "87daca5d",
  TMDB: "cf7c502592526f1498d082fd122d7309",
  IGDB: "fde293b445a4f938af26cdd01f53820a",
})

const OmdbApi = require("omdb-api-pt")
const omdb = new OmdbApi({
  apiKey: API_KEYS.OMDB,
})

const tmdb = require("moviedb")(API_KEYS.TMDB)
const axios = require("axios")

app.get("/", (req, res) => res.send("Welcome to HackStackAPI!"))

/**
 * OMDb implementation
 * OMDb has more information that we need than TMDb.
 *
 * @param imdb IMDb id
 * @return JSON movie object {title, itemID, genre, itemDesc, contentRating, yearReleased, rentalStatus, isLate, fine}
 */
app.get("/rentalItem/movie/:imdb", (req, res) => {
  const movieID = req.params.imdb

  let movie = {
    title: "",
    itemID: movieID.toString(),
    genre: "",
    itemDesc: "",
    contentRating: "",
    yearReleased: "",
    rentalStatus: "",
    isLate: "",
    fine: "",
  }

  // show is an IMDb ID string
  omdb
    .byId({
      imdb: movieID.toString(),
    })
    .then((resOMDb) => {
      //console.log(resOMDb)
      movie.title = resOMDb.Title
      movie.genre = resOMDb.Genre
      movie.itemDesc = resOMDb.Plot
      movie.contentRating = resOMDb.Rated
      movie.yearReleased = resOMDb.Year
      return res.status(200).json(movie)
    })
})

/**
 * TMDb implementation
 */
app.get("/rentalItem/movieTMDb/:id", (req, res) => {
  const movieID = req.params.id

  let movie = {
    title: "",
    itemID: movieID.toString(),
    genre: "",
    itemDesc: "",
    contentRating: "",
    yearReleased: "",
    rentalStatus: "",
    isLate: "",
    fine: "",
  }

  tmdb.movieInfo({ id: movieID }, (err, resTMDb) => {
    //console.log(resTMDb)
    if (!err) {
      movie.title = resTMDb.title
      movie.genre = resTMDb.genres.map(({ name }) => name)
      movie.itemDesc = resTMDb.overview
      movie.yearReleased = resTMDb.release_date
      return res.status(200).json(movie)
    }
  })
})

// TODO(patkub): get games by id. Right now this just pulls all games from IGDB.
app.get("/rentalItem/game/:id", (req, res) => {
  const games = []

  axios({
    url: "https://api-v3.igdb.com/games",
    method: "POST",
    headers: {
      Accept: "application/json",
      "user-key": API_KEYS.IGDB,
    },
    // age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,collection,cover,created_at,dlcs,expansions,external_games,first_release_date,follows,franchise,franchises,game_engines,game_modes,genres,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,popularity,pulse_count,rating,rating_count,release_dates,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,time_to_beat,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites
    data: "fields name,genres,summary,age_ratings,release_dates;",
  })
    .then((response) => {
      //console.log(response.data);

      response.data.forEach(function (game, i) {
        let gameData = {
          title: game.title,
          itemID: i.toString(),
          genre: game.genres,
          itemDesc: game.summary,
          contentRating: game.age_ratings,
          yearReleased: game.release_dates,
          rentalStatus: "",
          isLate: "",
          fine: "",
        }

        games.push(gameData)
      })

      return res.status(200).json(games)
    })
    .catch((err) => {
      console.error(err)
    })
})

app.listen(port, () =>
  console.log(`HackStackAPI listening at http://localhost:${port}`)
)
