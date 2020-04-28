# HackStackAPI

### UI

- [ ] Renting a movie
- [ ] Reserving a movie
- [ ] Adding a movie
- [x] Generating an inventory report

Pulls movie data from [OMDb](https://www.omdbapi.com/) and [TMDb](https://www.themoviedb.org/), and game data from [GiantBomb](https://www.giantbomb.com/).

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

### Hack Stack, LLC SSL

Generated SSL certificate using https://github.com/dakshshah96/local-cert-generator

Create root certificate:

```
sh createRootCA.sh
```

```
Country Name (2 letter code) [AU]:US
State or Province Name (full name) [Some-State]:New York
Locality Name (eg, city) []:Rochester
Organization Name (eg, company) [Internet Widgits Pty Ltd]:Hack Stack, LLC
Organizational Unit Name (eg, section) []:Hack Stack, LLC
Common Name (e.g. server FQDN or YOUR name) []:localhost
Email Address []:
```

Create domain certificate for localhost:

```
sh createSelfSigned.sh
```

Edit `index.js` and set the paths to `server.key` and `server.crt`

```
.createServer(
    {
      key: fs.readFileSync("./local-cert-generator/server.key"),
      cert: fs.readFileSync("./local-cert-generator/server.crt"),
      passphrase: "12345",
    },
    app
  )
```

### Import the Certificate into Chrome

1. Go to `chrome://settings/certificates` > Authorities tab > Import `rootCA.pem`.
2. Trust this certificate for identifying websites.
3. Restart chrome.
4. Navigate to `https://localhost:3000/` and you should have a green lock.
