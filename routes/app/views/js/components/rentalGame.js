class HackStackRentalGame extends HackStackRentalItem {
  /**
   * Rental game
   * @param {String} itemID item id
   * @param {String} title item title
   * @param {String} year item year
   * @param {String} description item description
   * @param {String[]} genre item genre
   * @param {String} imagePath poster image
   * @param {String} rating content rating
   * @param {String} rentalStatus rental status
   * @param {Boolean} late is item late
   * @param {Double} fine fine
   * @param {Boolean} multiplayer is multiplayer game
   */
  constructor(
    itemID,
    title,
    year,
    description,
    genre,
    imagePath,
    rating,
    rentalStatus,
    late,
    fine,
    multiplayer
  ) {
    super(
      itemID,
      title,
      year,
      description,
      genre,
      imagePath,
      rating,
      rentalStatus,
      late,
      fine
    )
    this.setMultiplayer(multiplayer)
  }

  /**
   * Is multiplayer game?
   * @return {Boolean} is multiplayer game
   */
  isMultiplayer() {
    return this.multiplayer
  }

  /**
   * Set multiplayer
   * @param {Boolean} multiplayer is multiplayer game
   */
  setMultiplayer(multiplayer) {
    this.multiplayer = multiplayer
  }
}
