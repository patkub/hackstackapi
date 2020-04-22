class HackStackRentalItem {
  /**
   * Rental item
   * @param {String} itemID item id
   * @param {String} title item title
   * @param {String} year item year
   * @param {String} description item description
   * @param {String[]} genre item genre
   * @param {String} imagePath poster image
   * @param {String} rentalStatus rental status
   * @param {Boolean} late is item late
   * @param {Double} fine fine
   */
  constructor(
    itemID,
    title,
    year,
    description,
    genre,
    imagePath,
    rentalStatus,
    late,
    fine
  ) {
    /** item id */
    this.itemID = itemID

    /** item title */
    this.title = title

    /** item year */
    this.year = year

    /** item description */
    this.description = description

    /** item genre */
    this.genre = genre

    /** poster image */
    this.imagePath = imagePath

    /** item rental status */
    this.rentalStatus = rentalStatus

    /** is item late */
    this.late = late

    /** item fine */
    this.fine = fine
  }

  /**
   * Get item id
   * @return {String} item id
   */
  getItemID() {
    return this.itemID
  }

  /**
   * Set item id
   * @param {String} itemID item id
   */
  setItemID(itemID) {
    this.itemID = itemID
  }

  /**
   * Get title
   * @return {String} title
   */
  getTitle() {
    return this.title
  }

  /**
   * Set title
   * @param {String} title item title
   */
  setTitle(title) {
    this.title = title
  }

  /**
   * Get year
   * @return {String} year
   */
  getYear() {
    return this.year
  }

  /**
   * Set year
   * @param {String} year item year
   */
  setYear(year) {
    this.year = year
  }

  /**
   * Get description
   * @return {String} description
   */
  getDescription() {
    return this.description
  }

  /**
   * Set description
   * @param {String} description item description
   */
  setDescription(description) {
    this.description = description
  }

  /**
   * Get genre
   * @return {Array} genre
   */
  getGenre() {
    return this.genre
  }

  /**
   * Set genre
   * @param {String[]} genre array of genre tags
   */
  setGenre(genre) {
    this.genre = genre
  }

  /**
   * Get image path
   * @return {String} image url
   */
  getImagePath() {
    return this.imagePath
  }

  /**
   * Set image path
   * @param {String} imagePath image url
   */
  setImagePath(imagePath) {
    this.imagePath = imagePath
  }

  /**
   * Get rental status
   * @return {String} rentalStatus
   */
  getRentalStatus() {
    return this.rentalStatus
  }

  /**
   * Set rental status
   * @param {String} rentalStatus rental status
   */
  setRentalStatus(rentalStatus) {
    this.rentalStatus = rentalStatus
  }

  /**
   * Is item late?
   * @return {Boolean} is item late
   */
  isLate() {
    return this.late
  }

  /**
   * Set item late
   * @param {Boolean} late is item late
   */
  setLate(late) {
    this.late = late
  }

  /**
   * Get fine
   * @return {Double} fine
   */
  getFine() {
    return this.fine
  }

  /**
   * Set fine
   * @param {Double} fine fine for returning item late
   */
  setFine(fine) {
    this.fine = fine
  }

  /**
   * Compute the card title
   * @return {String} card title
   */
  computeCardTitle() {
    return this.title + " " + this.year
  }

  /**
   * Convert genre list into bootstrap badges
   * @return {String} bootstrap tag html
   */
  computeGenreTags() {
    const tags = this.genre.split(", ")
    let content = ""
    for (const tag of tags) {
      // note: space character after </span> tag is important for spacing
      content +=
        "<span class='badge badge-secondary'><i class='fa fa-tag'></i> " +
        tag +
        "</span> "
    }
    return content
  }
}
