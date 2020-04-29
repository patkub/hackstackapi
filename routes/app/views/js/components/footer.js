class HackStackFooter {
  /**
   * Render the footer
   * @return template literal html
   */
  render() {
    return `
      <div class="footer flex-shrink-0">
        <div class="container p-5">
          <div class="row">
            <div class="col-sm-4">
              <a href="https://www.themoviedb.org/" target="_blank"
                ><img
                  width="200px"
                  src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
              /></a>
              <p>
                This product uses the TMDb API but is not endorsed or certified by
                TMDb.
              </p>
            </div>

            <div class="col-sm-4">
              Information courtesy of <a href="http://www.imdb.com" target="_blank">IMDb</a> (<a href="http://www.imdb.com" target="_blank">http://www.imdb.com</a>). Used with
              permission.
            </div>

            <div class="col-sm-4">
              <a href="https://www.giantbomb.com/" target="_blank"
                ><img height="100" src="/static/img/giant-bomb-vector-logo.png"
              /></a>
            </div>
          </div>
        </div>
      </div>
    `
  }
}
