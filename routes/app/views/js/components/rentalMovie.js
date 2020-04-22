class HackStackRentalMovie extends HackStackRentalItem {
  /**
   * Rental movie
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
   * @param {String} runtime movie runtime
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
    runtime
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
    this.setRuntime(runtime)
  }

  /**
   * Get runtime
   * @return {String} movie runtime
   */
  getRuntime() {
    return this.runtime
  }

  /**
   * Set runtime
   * @param {String} runtime movie runtime
   */
  setRuntime(runtime) {
    this.runtime = runtime
  }
}
