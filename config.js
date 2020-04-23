const config = {}

config.port = 3000

config.API_KEYS = Object.freeze({
  OMDB: "87daca5d",
  TMDB: "cf7c502592526f1498d082fd122d7309",
  IGDB: "fde293b445a4f938af26cdd01f53820a",
  GiantBomb: Object.freeze({
    Key: "82e15653dc07b80859e016ec0cde31e0b5a7d176",
    UserAgent: "fakelolz3627",
  }),
})

module.exports = config
