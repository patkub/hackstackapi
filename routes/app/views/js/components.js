"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Injectable = /*#__PURE__*/function () {
  function Injectable() {
    _classCallCheck(this, Injectable);
  }
  /**
   * Inject html to page
   * @param {String} selector query selector
   */


  _createClass(Injectable, [{
    key: "inject",
    value: function inject(selector) {
      document.querySelector(selector).insertAdjacentHTML("afterend", this.render());
    }
  }]);

  return Injectable;
}();
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * Makes an evenly aligned deck out of cards
 */
var HackStackCardDeck = /*#__PURE__*/function (_Injectable) {
  _inherits(HackStackCardDeck, _Injectable);

  var _super = _createSuper(HackStackCardDeck);

  /**
   * Constructor
   * @param {Array} cards array of cards
   * @param {Integer} itemsPerRow number of cards per row
   */
  function HackStackCardDeck(cards, itemsPerRow) {
    var _this;

    _classCallCheck(this, HackStackCardDeck);

    _this = _super.call(this);
    /** the cards */

    _this.cards = cards;
    /** number of cards per row */

    _this.itemsPerRow = itemsPerRow;
    return _this;
  }

  _createClass(HackStackCardDeck, [{
    key: "_createCardDeck",
    value: function _createCardDeck() {
      var deck = document.createElement("div");
      deck.setAttribute("class", "card-deck"); // add each card to deck

      var _iterator = _createForOfIteratorHelper(this.cards),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var card = _step.value;
          deck.insertAdjacentHTML("beforeend", card);
        } // if uneven, add empty cards for spacing

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      for (var i = 0; i < this.itemsPerRow - this.cards.length; i++) {
        deck.appendChild(this._emptyCard());
      }

      return deck;
    }
    /**
     * Create an empty card for spacing
     * @return {HTMLElement}
     */

  }, {
    key: "_emptyCard",
    value: function _emptyCard() {
      var emptyCard = document.createElement("div");
      emptyCard.setAttribute("class", "card");
      emptyCard.style.visibility = "hidden";
      return emptyCard;
    }
    /**
     * Render the card deck
     * @return html
     */

  }, {
    key: "render",
    value: function render() {
      return this._createCardDeck();
    }
  }]);

  return HackStackCardDeck;
}(Injectable);
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var HackStackNavBar = /*#__PURE__*/function (_Injectable) {
  _inherits(HackStackNavBar, _Injectable);

  var _super = _createSuper(HackStackNavBar);

  function HackStackNavBar(active) {
    var _this;

    _classCallCheck(this, HackStackNavBar);

    _this = _super.call(this);
    /** The active tab. 'home', 'manageCustomers', 'addMovie', or 'inventoryReport' */

    _this.active = active;
    return _this;
  }
  /**
   * Render the navbar
   * @return template literal html
   */


  _createClass(HackStackNavBar, [{
    key: "render",
    value: function render() {
      return "\n      <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n        <a class=\"navbar-brand\" href=\"/\">Hack Stack, LLC</a>\n        <button\n          class=\"navbar-toggler\"\n          type=\"button\"\n          data-toggle=\"collapse\"\n          data-target=\"#navbarSupportedContent\"\n          aria-controls=\"navbarSupportedContent\"\n          aria-expanded=\"false\"\n          aria-label=\"Toggle navigation\"\n        >\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n          <ul class=\"navbar-nav mr-auto\">\n            <li\n              class=\"nav-item ".concat(this.active === "home" ? "active" : "", "\">\n              <a class=\"nav-link\" href=\"/\">Home ").concat(this.active === "home" ? "<span class='sr-only'>(current)</span>" : "", "</a>\n            </li>\n            <li\n              class=\"nav-item ").concat(this.active === "manageCustomers" ? "active" : "", "\">\n              <a class=\"nav-link\" href=\"/manageCustomers\">Manage Customers ").concat(this.active === "manageCustomers" ? "<span class='sr-only'>(current)</span>" : "", "</a>\n            </li>\n            <li class=\"nav-item dropdown\">\n              <a\n                class=\"nav-link dropdown-toggle\"\n                href=\"#\"\n                id=\"navbarDropdownReports\"\n                role=\"button\"\n                data-toggle=\"dropdown\"\n                aria-haspopup=\"true\"\n                aria-expanded=\"false\"\n              >\n                Add\n              </a>\n              <div\n                class=\"dropdown-menu\"\n                aria-labelledby=\"navbarDropdownReports\"\n              >\n                <a\n                  class=\"dropdown-item ").concat(this.active === "addMovie" ? "active" : "", "\" href=\"/addMovie\">Add a Movie ").concat(this.active === "addMovie" ? "<span class='sr-only'>(current)</span>" : "", "</a\n                >\n                <a\n                  class=\"dropdown-item ").concat(this.active === "addGame" ? "active" : "", "\" href=\"/addGame\">Add a Game ").concat(this.active === "addGame" ? "<span class='sr-only'>(current)</span>" : "", "</a\n                >\n              </div>\n            </li>\n            <li class=\"nav-item dropdown\">\n              <a\n                class=\"nav-link dropdown-toggle\"\n                href=\"#\"\n                id=\"navbarDropdownReports\"\n                role=\"button\"\n                data-toggle=\"dropdown\"\n                aria-haspopup=\"true\"\n                aria-expanded=\"false\"\n              >\n                Reports\n              </a>\n              <div\n                class=\"dropdown-menu\"\n                aria-labelledby=\"navbarDropdownReports\"\n              >\n                <a\n                  class=\"dropdown-item ").concat(this.active === "inventoryReport" ? "active" : "", "\" href=\"/inventoryReport\"\n                  >Inventory Report ").concat(this.active === "inventoryReport" ? "<span class='sr-only'>(current)</span>" : "", "</a\n                >\n                <a class=\"dropdown-item disabled\" href=\"#\">Customer Report</a>\n              </div>\n            </li>\n          </ul>\n          <form class=\"form-inline my-2 my-lg-0\">\n            <input\n              class=\"form-control mr-sm-2\"\n              type=\"search\"\n              placeholder=\"Search\"\n              aria-label=\"Search\"\n            />\n            <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">\n              Search\n            </button>\n          </form>\n        </div>\n      </nav>\n    ");
    }
  }]);

  return HackStackNavBar;
}(Injectable);
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var HackStackNavTabs = /*#__PURE__*/function (_Injectable) {
  _inherits(HackStackNavTabs, _Injectable);

  var _super = _createSuper(HackStackNavTabs);

  function HackStackNavTabs(active) {
    var _this;

    _classCallCheck(this, HackStackNavTabs);

    _this = _super.call(this);
    /** The active tab. 'movies', or 'games' */

    _this.active = active;
    return _this;
  }
  /**
   * Render the tabs
   * @return template literal html
   */


  _createClass(HackStackNavTabs, [{
    key: "render",
    value: function render() {
      return "\n      <ul class=\"nav nav-pills nav-justified\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link ".concat(this.active === "movies" ? "active" : "", "\" href=\"").concat(this.active === "movies" ? "#" : "/", "\">Movies</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link ").concat(this.active === "games" ? "active" : "", "\" href=\"").concat(this.active === "games" ? "#" : "/games", "\">Games</a>\n        </li>\n      </ul>\n    ");
    }
  }]);

  return HackStackNavTabs;
}(Injectable);
"use strict";

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var HackStackRentalItem = /*#__PURE__*/function () {
  /**
   * Rental item
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
   */
  function HackStackRentalItem(itemID, title, year, description, genre, imagePath, rating, rentalStatus, late, fine) {
    _classCallCheck(this, HackStackRentalItem);

    /** item id */
    this.itemID = itemID;
    /** item title */

    this.title = title;
    /** item year */

    this.year = year;
    /** item description */

    this.description = description;
    /** item genre */

    this.genre = genre;
    /** poster image */

    this.imagePath = imagePath;
    /** content rating */

    this.rating = rating;
    /** item rental status */

    this.rentalStatus = rentalStatus;
    /** is item late */

    this.late = late;
    /** item fine */

    this.fine = fine;
  }
  /**
   * Get item id
   * @return {String} item id
   */


  _createClass(HackStackRentalItem, [{
    key: "getItemID",
    value: function getItemID() {
      return this.itemID;
    }
    /**
     * Set item id
     * @param {String} itemID item id
     */

  }, {
    key: "setItemID",
    value: function setItemID(itemID) {
      this.itemID = itemID;
    }
    /**
     * Get title
     * @return {String} title
     */

  }, {
    key: "getTitle",
    value: function getTitle() {
      return this.title;
    }
    /**
     * Set title
     * @param {String} title item title
     */

  }, {
    key: "setTitle",
    value: function setTitle(title) {
      this.title = title;
    }
    /**
     * Get year
     * @return {String} year
     */

  }, {
    key: "getYear",
    value: function getYear() {
      return this.year;
    }
    /**
     * Set year
     * @param {String} year item year
     */

  }, {
    key: "setYear",
    value: function setYear(year) {
      this.year = year;
    }
    /**
     * Get description
     * @return {String} description
     */

  }, {
    key: "getDescription",
    value: function getDescription() {
      return this.description;
    }
    /**
     * Set description
     * @param {String} description item description
     */

  }, {
    key: "setDescription",
    value: function setDescription(description) {
      this.description = description;
    }
    /**
     * Get genre
     * @return {Array} genre
     */

  }, {
    key: "getGenre",
    value: function getGenre() {
      return this.genre;
    }
    /**
     * Set genre
     * @param {String[]} genre array of genre tags
     */

  }, {
    key: "setGenre",
    value: function setGenre(genre) {
      this.genre = genre;
    }
    /**
     * Get image path
     * @return {String} image url
     */

  }, {
    key: "getImagePath",
    value: function getImagePath() {
      return this.imagePath;
    }
    /**
     * Set image path
     * @param {String} imagePath image url
     */

  }, {
    key: "setImagePath",
    value: function setImagePath(imagePath) {
      this.imagePath = imagePath;
    }
    /**
     * Get content rating
     * @return {String} content rating
     */

  }, {
    key: "getRating",
    value: function getRating() {
      return this.rating;
    }
    /**
     * Set image path
     * @param {String} rating content rating
     */

  }, {
    key: "setRating",
    value: function setRating(rating) {
      this.rating = rating;
    }
    /**
     * Get rental status
     * @return {String} rentalStatus
     */

  }, {
    key: "getRentalStatus",
    value: function getRentalStatus() {
      return this.rentalStatus;
    }
    /**
     * Set rental status
     * @param {String} rentalStatus rental status
     */

  }, {
    key: "setRentalStatus",
    value: function setRentalStatus(rentalStatus) {
      this.rentalStatus = rentalStatus;
    }
    /**
     * Is item late?
     * @return {Boolean} is item late
     */

  }, {
    key: "isLate",
    value: function isLate() {
      return this.late;
    }
    /**
     * Set item late
     * @param {Boolean} late is item late
     */

  }, {
    key: "setLate",
    value: function setLate(late) {
      this.late = late;
    }
    /**
     * Get fine
     * @return {Double} fine
     */

  }, {
    key: "getFine",
    value: function getFine() {
      return this.fine;
    }
    /**
     * Set fine
     * @param {Double} fine fine for returning item late
     */

  }, {
    key: "setFine",
    value: function setFine(fine) {
      this.fine = fine;
    }
    /**
     * Compute the card title
     * @return {String} card title
     */

  }, {
    key: "computeCardTitle",
    value: function computeCardTitle() {
      return this.title + " " + this.year;
    }
    /**
     * Convert genre list into bootstrap badges
     * @return {String} bootstrap tag html
     */

  }, {
    key: "computeGenreTags",
    value: function computeGenreTags() {
      var tags = this.genre.split(", ");
      var content = "";

      var _iterator = _createForOfIteratorHelper(tags),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var tag = _step.value;
          // note: space character after </span> tag is important for spacing
          content += "<span class='badge badge-secondary'><i class='fa fa-tag'></i> " + tag + "</span> ";
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return content;
    }
    /**
     * Compute the late list item
     * @return {String} bootstrap list group item html
     */

  }, {
    key: "computeLate",
    value: function computeLate() {
      return this.isLate() ? "<li class='list-group-item list-group-item-warning'>Late</li>" : "";
    }
    /**
     * Compute the fine list item
     * @return {String} bootstrap list group item html
     */

  }, {
    key: "computeFine",
    value: function computeFine() {
      return this.getFine() > 0 ? "<li class='list-group-item list-group-item-danger'>Fine: " + this.getFine() + "</li>" : "";
    }
  }]);

  return HackStackRentalItem;
}();
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var HackStackRentalMovie = /*#__PURE__*/function (_HackStackRentalItem) {
  _inherits(HackStackRentalMovie, _HackStackRentalItem);

  var _super = _createSuper(HackStackRentalMovie);

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
  function HackStackRentalMovie(itemID, title, year, description, genre, imagePath, rating, rentalStatus, late, fine, runtime, actorList) {
    var _this;

    _classCallCheck(this, HackStackRentalMovie);

    _this = _super.call(this, itemID, title, year, description, genre, imagePath, rating, rentalStatus, late, fine);

    _this.setRuntime(runtime);

    _this.setActors(actorList);

    return _this;
  }
  /**
   * Get runtime
   * @return {String} movie runtime
   */


  _createClass(HackStackRentalMovie, [{
    key: "getRuntime",
    value: function getRuntime() {
      return this.runtime;
    }
    /**
     * Set runtime
     * @param {String} runtime movie runtime
     */

  }, {
    key: "setRuntime",
    value: function setRuntime(runtime) {
      this.runtime = runtime;
    }
    /**
     * Get actors
     * @return {Object[]} movie actors
     * @return {Object[]} actors - list of movie actors
     * @return {string} actors[].actorID - The id of an actor
     * @return {string} actors[].name - The name of an actor
     * @return {string} actors[].imagePath - The profile picture of an actor
     */

  }, {
    key: "getActors",
    value: function getActors() {
      return this.actors;
    }
    /**
     * Set actors
     * @param {Object[]} actors list of movie actors
     * @param {string} actors[].actorID - The id of an actor
     * @param {string} actors[].name - The name of an actor
     * @param {string} actors[].imagePath - The profile picture of an actor
     */

  }, {
    key: "setActors",
    value: function setActors(actors) {
      this.actors = actors;
    }
    /**
     * HTML for the credits (actors/actresses)
     */

  }, {
    key: "computeActors",
    value: function computeActors() {
      var content = "";

      var _iterator = _createForOfIteratorHelper(this.actors),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var actor = _step.value;
          content += ["<figure class='figure'>", "<img src='" + actor.imagePath + "' alt='actor' class='img-thumbnail figure-img img-fluid rounded' style='height: 75px'>", "<figcaption class='figure-caption'>" + actor.name + "</figcaption>", "</figure>"].join("\n");
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return content;
    }
  }]);

  return HackStackRentalMovie;
}(HackStackRentalItem);
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var HackStackRentalGame = /*#__PURE__*/function (_HackStackRentalItem) {
  _inherits(HackStackRentalGame, _HackStackRentalItem);

  var _super = _createSuper(HackStackRentalGame);

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
  function HackStackRentalGame(itemID, title, year, description, genre, imagePath, rating, rentalStatus, late, fine, multiplayer) {
    var _this;

    _classCallCheck(this, HackStackRentalGame);

    _this = _super.call(this, itemID, title, year, description, genre, imagePath, rating, rentalStatus, late, fine);

    _this.setMultiplayer(multiplayer);

    return _this;
  }
  /**
   * Is multiplayer game?
   * @return {Boolean} is multiplayer game
   */


  _createClass(HackStackRentalGame, [{
    key: "isMultiplayer",
    value: function isMultiplayer() {
      return this.multiplayer;
    }
    /**
     * Set multiplayer
     * @param {Boolean} multiplayer is multiplayer game
     */

  }, {
    key: "setMultiplayer",
    value: function setMultiplayer(multiplayer) {
      this.multiplayer = multiplayer;
    }
  }]);

  return HackStackRentalGame;
}(HackStackRentalItem);
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var HackStackRentalItemSmall = /*#__PURE__*/function (_Injectable) {
  _inherits(HackStackRentalItemSmall, _Injectable);

  var _super = _createSuper(HackStackRentalItemSmall);

  function HackStackRentalItemSmall(type, itemID, title, year, description, imagePath, rentLink) {
    var _this;

    _classCallCheck(this, HackStackRentalItemSmall);

    _this = _super.call(this);
    /** 'movie' or 'game' */

    _this.type = type;
    /** item id */

    _this.itemID = itemID;
    /** item title */

    _this.title = title;
    /** item year */

    _this.year = year;
    /** item description */

    _this.description = description;
    /** poster image */

    _this.imagePath = imagePath;
    /** path to rent this item */

    _this.rentLink = rentLink;
    return _this;
  }

  _createClass(HackStackRentalItemSmall, [{
    key: "_computeCardTitle",
    value: function _computeCardTitle() {
      return this.title + " " + this.year;
    }
  }, {
    key: "_computeRentLink",
    value: function _computeRentLink() {
      return this.rentLink + this.itemID;
    }
    /**
     * Render the small rental item
     * @return template literal html
     */

  }, {
    key: "render",
    value: function render() {
      return "\n      <div class='card'>\n        <img class='card-img-top' src='".concat(this.imagePath, "' alt='Poster' />\n        <div class='card-body'>\n          <h5 class='card-title'>").concat(this._computeCardTitle(), "</h5>\n          <p class='card-text'>").concat(this.description, "</p>\n        </div>\n        <div class='card-footer'>\n          <a href='").concat(this._computeRentLink(), "' class='btn btn-primary'>Rent</a>\n          <a href='").concat(this._computeRentLink(), "' class='btn btn-secondary'>Reserve</a>\n        </div>\n      </div>");
    }
  }]);

  return HackStackRentalItemSmall;
}(Injectable);
