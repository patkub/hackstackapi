# HackStackAPI

### UI

- [ ] Renting a movie
- [ ] Reserving a movie
- [ ] Adding a movie
- [ ] Generating an inventory report

Pulls movie and game data from [OMDb](https://www.omdbapi.com/), [TMDb](https://www.themoviedb.org/), and [IGDB](https://www.igdb.com/discover)

### Setup

```
yarn install
```

### Run it!

```
node index.js
```

### Babel Transpile ES6 (ES2015) to ES5

There are ES6 (ES2015) classes in `app/views/js/components`. In order for them to work on browsers that only support ES5 (ex. IE), they need to be transpiled with babel. The JavaScript for each page also needs to be transpiled. These commands will generate `app/views/js/components.js` and `[page].min.js` for each page.

```
yarn transpileComponents
yarn transpilePages
```

### Old Stuff Below

http://127.0.0.1:3000

For testing, set `window.hackstack.API_SERVER` to the api server in `routes/app/views/js/utils.js`. To automate switching APIs, use the following scripts:

```
./scripts/useJavaApi.sh
./scripts/useExpressJs.sh
```

### Examples

Get data from OMDb using IMDb id `tt1502397`

http://127.0.0.1:3000/api/rentalItem/movie/tt1502397

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

http://127.0.0.1:3000/api/rentalItem/movieTMDb/38700

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

http://127.0.0.1:3000/api/rentalItem/game/1

Dependencies are defined in `index.js`. For example, bootstrap is under `/vendor/bootstrap/css/bootstrap.min.css`. App css and js are under `static/css/` and `static/js/` respectively.
