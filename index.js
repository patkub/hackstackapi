const express = require('express')
const app = express()
const port = 3000
const TMDB_API_KEY = "cf7c502592526f1498d082fd122d7309"
const tmdb = require('moviedb')(TMDB_API_KEY);

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/rentalItem/:id', (req, res) => {
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

app.listen(port, () => console.log(`HackStackAPI listening at http://localhost:${port}`))
