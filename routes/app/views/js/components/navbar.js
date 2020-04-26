class HackStackNavBar {
  constructor(active) {
    /** The active tab. 'home', 'manageCustomers', 'addMovie', or 'inventoryReport' */
    this.active = active
  }

  /**
   * Render the navbar
   * @return template literal html
   */
  render() {
    return `
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">Hack Stack, LLC</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li
              class="nav-item ${this.active === "home" ? "active" : ""}">
              <a class="nav-link" href="/">Home ${
                this.active === "home"
                  ? "<span class='sr-only'>(current)</span>"
                  : ""
              }</a>
            </li>
            <li
              class="nav-item ${
                this.active === "manageCustomers" ? "active" : ""
              }">
              <a class="nav-link" href="/manageCustomers">Manage Customers ${
                this.active === "manageCustomers"
                  ? "<span class='sr-only'>(current)</span>"
                  : ""
              }</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownReports"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Add
              </a>
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownReports"
              >
                <a
                  class="dropdown-item ${
                    this.active === "addMovie" ? "active" : ""
                  }" href="/addMovie">Add a Movie ${
      this.active === "addMovie" ? "<span class='sr-only'>(current)</span>" : ""
    }</a
                >
                <a
                  class="dropdown-item ${
                    this.active === "addGame" ? "active" : ""
                  }" href="/addGame">Add a Game ${
      this.active === "addGame" ? "<span class='sr-only'>(current)</span>" : ""
    }</a
                >
                <a
                  class="dropdown-item ${
                    this.active === "addCustomer" ? "active" : ""
                  }" href="/addCustomer">Add a Customer ${
      this.active === "addCustomer" ? "<span class='sr-only'>(current)</span>" : ""
    }</a
                >
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownReports"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Reports
              </a>
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownReports"
              >
                <a
                  class="dropdown-item ${
                    this.active === "inventoryReport" ? "active" : ""
                  }" href="/inventoryReport"
                  >Inventory Report ${
                    this.active === "inventoryReport"
                      ? "<span class='sr-only'>(current)</span>"
                      : ""
                  }</a
                >
                <a class="dropdown-item disabled" href="#">Customer Report</a>
              </div>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    `
  }
}
