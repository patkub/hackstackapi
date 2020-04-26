class HackStackNavTabs {
  constructor(active) {
    /** The active tab. 'movies', or 'games' */
    this.active = active
  }

  /**
   * Render the tabs
   * @return template literal html
   */
  render() {
    return `
      <ul class="nav nav-pills nav-justified mb-3">
        <li class="nav-item">
          <a class="nav-link ${
            this.active === "movies" ? "active" : ""
          }" href="${this.active === "movies" ? "#" : "/"}">Movies</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ${
            this.active === "games" ? "active" : ""
          }" href="${this.active === "games" ? "#" : "/games"}">Games</a>
        </li>
      </ul>
    `
  }
}
