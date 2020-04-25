# HackStackAPI

### UI

- [ ] Renting a movie
- [ ] Reserving a movie
- [ ] Adding a movie
- [x] Generating an inventory report

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

There are ES6 (ES2015) classes in `app/views/js/components`. In order for them to work on browsers that only support ES5 (ex. IE), they need to be transpiled with babel. This command will generate `app/views/js/components.js` which is included on every page.

```
yarn transpile
```

Dependencies are defined in `index.js`. For example, bootstrap is under `/vendor/bootstrap/css/bootstrap.min.css`. App css and js are under `static/css/` and `static/js/` respectively.
