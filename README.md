# HackStackAPI

Pulls movie data from tmdb

### Setup

```
yarn install
```

### Run it!

```
node index.js
```

### Example

Pull json data from tmdb movie id `38700`

```
http://127.0.0.1:3000/rentalItem/movie/38700
```

JSON Response:

```
{
    "title": "Bad Boys for Life",
    "itemID": "38700",
    "genre": ["Thriller", "Action", "Crime"],
    "itemDesc": "Marcus and Mike are forced to confront new threats, career changes, and midlife crises as they join the newly created elite team AMMO of the Miami police department to take down the ruthless Armando Armas, the vicious leader of a Miami drug cartel.",
    "contentRating": "",
    "yearReleased": "2020-01-15",
    "rentalStatus": "",
    "isLate": "",
    "fine": ""
}
```

Get a list of games from igdb. id is unimplemented, this just gets a list of all games from igdb.

```
http://127.0.0.1:3000/rentalItem/game/1
```
