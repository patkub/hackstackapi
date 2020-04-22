class Injectable {
  constructor() {}

  /**
   * Inject html to page
   * @param {String} selector query selector
   */
  inject(selector) {
    document
      .querySelector(selector)
      .insertAdjacentHTML("afterend", this.render())
  }
}
