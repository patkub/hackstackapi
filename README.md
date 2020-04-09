# HackStackAPI

Pulls movie and game data from [OMDb](https://www.omdbapi.com/), [TMDb](https://www.themoviedb.org/), and [IGDB](https://www.igdb.com/discover)

### Setup

```
yarn install
```

### Run it!

```
node index.js
```

### Examples

Get data from OMDb using IMDb id `tt1502397`

```
http://127.0.0.1:3000/rentalItem/movie/tt1502397
```

```
{
    "title": "Bad Boys for Life",
    "itemID": "tt1502397",
    "genre": "Action, Comedy, Crime, Thriller",
    "itemDesc": "The Bad Boys Mike Lowrey and Marcus Burnett are back together for one last ride in the highly anticipated Bad Boys for Life.",
    "contentRating": "R",
    "yearReleased": "2020",
    "rentalStatus": "",
    "isLate": "",
    "fine": ""
}
```

Get data from TMDb using TMDb id `38700`

```
http://127.0.0.1:3000/rentalItemTMDb/movie/38700
```

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

Get a list of games from IGDB. id is unimplemented, this just gets a list of all games from IGDB.

```
http://127.0.0.1:3000/rentalItem/game/1
```
