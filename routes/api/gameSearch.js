const express = require("express")
const router = express.Router()

const config = require("../../config")

const GiantBomb = require("giant-bomb")
const gb = new GiantBomb(
  config.API_KEYS.GiantBomb.Key,
  config.API_KEYS.GiantBomb.UserAgent
)

router
  /**
   * Wrapper for giantbomb to get around restrictions
   */
  .get("/giantbomb/:id", (req, res) => {
    const giantBombId = req.params.id

    gb.getGame({
      id: giantBombId,
      fields: [
        "id",
        "name",
        "deck",
        "genres",
        "original_release_date",
        "image",
      ],
      format: "json",
    })
      .then((body) => {
        const data = JSON.parse(body)
        const gameData = getGameData(data)
        return res.status(200).json(gameData)
      })
      .catch((err) => {
        //console.error(err)
      })
  })

  /**
   * Search for a list of games
   */
  .get("/giantbombSearch/:query", (req, res) => {
    const query = req.params.query

    gb.search({
      query: query,
      format: "json",
      fields: ["name"],
      limit: 10,
      resources: ["game"],
    })
      .then((body) => {
        const data = JSON.parse(body)
        // get a list of game names from search results
        const list = data.results.map(({ name }) => name)
        return res.status(200).json(list)
      })
      .catch((err) => {
        //console.log("Promise error")
        //console.log(err)
      })
  })

  .get("/giantbombInfo/:query", (req, res) => {
    const query = req.params.query

    //console.log(query)

    gb.search({
      query: query,
      format: "json",
      fields: [
        "id",
        "name",
        "deck",
        "genres",
        "original_release_date",
        "image",
      ],
      limit: 1,
      resources: ["game"],
    })
      .then((body) => {
        const data = JSON.parse(body)
        const gameData = getGameData(data)
        return res.status(200).json(gameData)
      })
      .catch((err) => {
        //console.log("Promise error")
        //console.log(err)
      })
  })

/**
 * Parse GiantBomb results into Game data needed
 * @param {Object} data
 */
function getGameData(data) {
  const gameData = {
    id: "",
    title: "",
    genre: "",
    itemDesc: "",
    yearReleased: "",
    imagePath: "",
  }

  // get first result
  const result = data.results.length >= 1 ? data.results[0] : data.results

  if (result.id) gameData.id = result.id
  if (result.name) gameData.title = result.name
  if (result.genres)
    gameData.genre = result.genres.map(({ name }) => name).join(", ")
  if (result.deck) gameData.itemDesc = result.deck
  if (result.original_release_date)
    gameData.yearReleased = new Date(result.original_release_date).getFullYear()
  if (result.image && result.image.original_url)
    gameData.imagePath = result.image.original_url

  return gameData
}

module.exports = router
