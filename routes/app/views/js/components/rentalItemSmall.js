class HackStackRentalItemSmall {
  constructor(type, itemID, title, year, description, imagePath, rentLink) {
    /** 'movie' or 'game' */
    this.type = type

    /** item id */
    this.itemID = itemID

    /** item title */
    this.title = title

    /** item year */
    this.year = year

    /** item description */
    this.description = description

    /** poster image */
    this.imagePath = imagePath

    /** path to rent this item */
    this.rentLink = rentLink
  }

  _computeCardTitle() {
    return this.title + " " + this.year
  }

  _computeRentLink() {
    return this.rentLink + this.itemID
  }

  /**
   * Render the small rental item
   * @return template literal html
   */
  render() {
    return `
      <div class='card mb-3'>
        <div id="rentalItemSmallOverlay${
          this.itemID
        }">
          <img class='card-img-top' src='${this.imagePath}' alt='Poster' />
          <div class="rentalItemSmall--overlay-text"></div>
        </div>
        <div class='card-body'>
          <h5 class='card-title font-weight-bold'>${this._computeCardTitle()}</h5>
          <p class='card-text'>${this.description}</p>
        </div>
        <div class='card-footer'>
          <a href='${this._computeRentLink()}' class='btn btn-primary'>Rent</a>
          <a href='${this._computeRentLink()}' class='btn btn-secondary'>Reserve</a>
        </div>
      </div>`
  }
}
