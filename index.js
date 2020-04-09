const express = require('express')
const app = express()
const port = 3000

const TMDB_API_KEY = "cf7c502592526f1498d082fd122d7309"
const IGDB_API_KEY = "fde293b445a4f938af26cdd01f53820a"

const tmdb = require('moviedb')(TMDB_API_KEY)
const apicalypse = require('apicalypse')
const axios = require('axios');

app.get('/', (req, res) => res.send('Welcome to HackStackAPI!'))

app.get('/rentalItem/movie/:id', (req, res) => {
	console.log(req.params.id)
	const movieID = req.params.id	

	let movie = {
		"title": "",
		"itemID": req.params.id.toString(),
		"genre": "",
		"itemDesc": "",
		"contentRating": "",
		"yearReleased": "",
		"rentalStatus": "",
		"isLate": "",
		"fine": ""
	}

	tmdb.movieInfo({ "id":movieID }, (err, resTMDB) => {
		//console.log(resTMDB)
		if (!err) {
			movie.title = resTMDB.title
			movie.genre = resTMDB.genres.map(({ name }) => name)
			movie.itemDesc = resTMDB.overview
			movie.yearReleased = resTMDB.release_date
			return res.status(200).json(movie)
		}
	})
})

// TODO(patkub): get games by id. Right now this just pulls all games from igdb.
app.get('/rentalItem/game/:id', (req, res) => {
  const games = []

	axios({
	  url: "https://api-v3.igdb.com/games",
  	  method: 'POST',
  	  headers: {
        'Accept': 'application/json',
        'user-key': IGDB_API_KEY
      },
      // age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,collection,cover,created_at,dlcs,expansions,external_games,first_release_date,follows,franchise,franchises,game_engines,game_modes,genres,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,popularity,pulse_count,rating,rating_count,release_dates,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,time_to_beat,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites
  	  data: "fields name,genres,summary,age_ratings,release_dates;"
	})
  	.then(response => {
      //console.log(response.data);

      response.data.forEach(function(game, i) {
        let gameData = {
          "title": game.title,
          "itemID": i.toString(),
          "genre": game.genres,
          "itemDesc": game.summary,
          "contentRating": game.age_ratings,
          "yearReleased": game.release_dates,
          "rentalStatus": "",
          "isLate": "",
          "fine": ""
        }

        games.push(gameData)
      });
      
      return res.status(200).json(games)
  	})
  	.catch(err => {
      console.error(err);
  	});
})

app.listen(port, () => console.log(`HackStackAPI listening at http://localhost:${port}`))
