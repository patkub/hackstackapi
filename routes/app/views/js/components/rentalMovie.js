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
   * @param {Object[]} actorList {actorID, name, imagePath} movie actors
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
    runtime,
    actorList
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
    this.setActors(actorList)
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

  /**
   * Get actors
   * @return {Object[]} movie actors
   * @return {Object[]} actors - list of movie actors
   * @return {string} actors[].actorID - The id of an actor
   * @return {string} actors[].name - The name of an actor
   * @return {string} actors[].imagePath - The profile picture of an actor
   */
  getActors() {
    return this.actors
  }

  /**
   * Set actors
   * @param {Object[]} actors list of movie actors
   * @param {string} actors[].actorID - The id of an actor
   * @param {string} actors[].name - The name of an actor
   * @param {string} actors[].imagePath - The profile picture of an actor
   */
  setActors(actors) {
    this.actors = actors
  }

  /**
   * HTML for the credits (actors/actresses)
   */
  computeActors() {
    let content = ""
    for (const actor of this.actors) {
      content += [
        "<figure class='figure mr-3'>",
        "<img src='" +
          actor.imagePath +
          "' alt='actor' class='img-thumbnail figure-img img-fluid rounded' style='height: 75px'>",
        "<figcaption class='figure-caption'>" + actor.name + "</figcaption>",
        "</figure>",
      ].join("\n")
    }
    return content
  }
}
