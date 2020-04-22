/**
 * Makes an evenly aligned deck out of cards
 */
class HackStackCardDeck extends Injectable {
  /**
   * Constructor
   * @param {Array} cards array of cards
   * @param {Integer} itemsPerRow number of cards per row
   */
  constructor(cards, itemsPerRow) {
    super()

    /** the cards */
    this.cards = cards

    /** number of cards per row */
    this.itemsPerRow = itemsPerRow
  }

  _createCardDeck() {
    var deck = document.createElement("div")
    deck.setAttribute("class", "card-deck")

    // add each card to deck
    for (const card of this.cards) {
      deck.insertAdjacentHTML("beforeend", card)
    }

    // if uneven, add empty cards for spacing
    for (let i = 0; i < this.itemsPerRow - this.cards.length; i++) {
      deck.appendChild(this._emptyCard())
    }

    return deck
  }

  /**
   * Create an empty card for spacing
   * @return {HTMLElement}
   */
  _emptyCard() {
    var emptyCard = document.createElement("div")
    emptyCard.setAttribute("class", "card")
    emptyCard.style.visibility = "hidden"
    return emptyCard
  }

  /**
   * Render the card deck
   * @return html
   */
  render() {
    return this._createCardDeck()
  }
}
