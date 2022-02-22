/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/HamburgerMenu.ts":
/*!*********************************!*\
  !*** ./src/ts/HamburgerMenu.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * Class StickyElement\n *\n * Needed to stick HTML elements on top of the page.\n *\n * @since 2022-02-09\n */\nvar HamburgerMenu =\n/** @class */\nfunction () {\n  /**\n  * Initializing class\n  *\n  * @param selector   HTML selector for navigation.\n  * @param untilWidth Show Hamburger menu until this width of site content.\n  *\n  * @since 2022-02-09\n  */\n  function HamburgerMenu(selector, untilWidth) {\n    var _this = this;\n\n    this.hamburgerSVG = '<svg id=\"Layer_1\" style=\"enable-background:new 0 0 32 32;\" version=\"1.1\" viewBox=\"0 0 32 32\" width=\"32px\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><path d=\"M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z\"/></svg>';\n    this.navElement = document.querySelector(selector);\n    this.untilWidth = untilWidth;\n    this.currentWidth = document.documentElement.clientWidth;\n    this.addHamburger();\n    this.render();\n    window.addEventListener('resize', function () {\n      _this.currentWidth = document.documentElement.clientWidth;\n\n      _this.render();\n    });\n  }\n  /**\n   * Adds hamburger menu HTML.\n   *\n   * @since 2022-02-09\n   */\n\n\n  HamburgerMenu.prototype.addHamburger = function () {\n    var _this = this;\n\n    this.hamburger = document.createElement('div');\n    this.hamburger.setAttribute('id', 'hamburger-menu');\n    this.hamburger.classList.add('hamburger-menu');\n    this.hamburger.classList.add('hide-menu'); // Hide on init\n\n    this.hamburger.innerHTML = this.hamburgerSVG;\n    document.body.append(this.hamburger);\n    this.hamburger.addEventListener('click', function () {\n      _this.toggleNav();\n    });\n  };\n\n  HamburgerMenu.prototype.render = function () {\n    if (this.currentWidth <= this.untilWidth) {\n      this.showHamburger();\n    } else {\n      this.hideHamburger();\n    }\n  };\n\n  HamburgerMenu.prototype.toggleNav = function () {\n    this.isNav() ? this.slideOutNav() : this.slideInNav();\n  };\n\n  HamburgerMenu.prototype.isNav = function () {\n    return this.navElement.classList.contains('menu-in');\n  };\n\n  HamburgerMenu.prototype.showNav = function () {\n    this.navElement.classList.remove('hide-menu');\n  };\n\n  HamburgerMenu.prototype.hideNav = function () {\n    this.navElement.classList.add('hide-menu');\n  };\n\n  HamburgerMenu.prototype.slideInNav = function () {\n    this.navElement.classList.add('menu-in');\n    this.navElement.classList.remove('menu-out');\n  };\n\n  HamburgerMenu.prototype.slideOutNav = function () {\n    this.navElement.classList.remove('menu-in');\n    this.navElement.classList.add('menu-out');\n  };\n\n  HamburgerMenu.prototype.showHamburger = function () {\n    this.hamburger.classList.remove('hide-menu');\n  };\n\n  HamburgerMenu.prototype.hideHamburger = function () {\n    this.hamburger.classList.add('hide-menu');\n  };\n\n  return HamburgerMenu;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HamburgerMenu);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYWNraWUtdGhlbWUvLi9zcmMvdHMvSGFtYnVyZ2VyTWVudS50cz8xMWQ5Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ2xhc3MgU3RpY2t5RWxlbWVudFxuICogXG4gKiBOZWVkZWQgdG8gc3RpY2sgSFRNTCBlbGVtZW50cyBvbiB0b3Agb2YgdGhlIHBhZ2UuXG4gKiBcbiAqIEBzaW5jZSAyMDIyLTAyLTA5XG4gKi9cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBIYW1idXJnZXJNZW51IHtcbiAgICAvKipcbiAgICAgKiBTaG93IEhhbWJ1cmdlciBtZW51IHVudGlsIHRoaXMgd2lkdGggb2Ygc2l0ZSBjb250ZW50LlxuICAgICAqIFxuICAgICAqIEB2YXIgaW50XG4gICAgICogXG4gICAgICogQHNpbmNlIDIwMjItMDItMDlcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgdW50aWxXaWR0aDogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogU2hvdyBIYW1idXJnZXIgbWVudSB1bnRpbCB0aGlzIHdpZHRoIG9mIHNpdGUgY29udGVudC5cbiAgICAgKiBcbiAgICAgKiBAdmFyIGludFxuICAgICAqIFxuICAgICAqIEBzaW5jZSAyMDIwLTAyLTAyXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGN1cnJlbnRXaWR0aDogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogQ3VycmVudCBvZmZzZXQgaW4gcHguXG4gICAgICogXG4gICAgICogQHZhciBIVE1MRWxlbWVudFxuICAgICAqIFxuICAgICAqIEBzaW5jZSAyMDIyLTAyLTA5XG4gICAgICovXG4gICAgcHJvdGVjdGVkIG5hdkVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXG4gICAgIC8qKlxuICAgICAqIEhhbWJ1cmdlciBlbGVtZW50LlxuICAgICAqIFxuICAgICAqIEB2YXIgSFRNTEVsZW1lbnRcbiAgICAgKiBcbiAgICAgKiBAc2luY2UgMjAyMi0wMi0wOVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBoYW1idXJnZXI6IEhUTUxFbGVtZW50O1xuXG4gICAgcHJvdGVjdGVkIGhhbWJ1cmdlclNWRyA9ICc8c3ZnIGlkPVwiTGF5ZXJfMVwiIHN0eWxlPVwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMiAzMjtcIiB2ZXJzaW9uPVwiMS4xXCIgdmlld0JveD1cIjAgMCAzMiAzMlwiIHdpZHRoPVwiMzJweFwiIHhtbDpzcGFjZT1cInByZXNlcnZlXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiPjxwYXRoIGQ9XCJNNCwxMGgyNGMxLjEwNCwwLDItMC44OTYsMi0ycy0wLjg5Ni0yLTItMkg0QzIuODk2LDYsMiw2Ljg5NiwyLDhTMi44OTYsMTAsNCwxMHogTTI4LDE0SDRjLTEuMTA0LDAtMiwwLjg5Ni0yLDIgIHMwLjg5NiwyLDIsMmgyNGMxLjEwNCwwLDItMC44OTYsMi0yUzI5LjEwNCwxNCwyOCwxNHogTTI4LDIySDRjLTEuMTA0LDAtMiwwLjg5Ni0yLDJzMC44OTYsMiwyLDJoMjRjMS4xMDQsMCwyLTAuODk2LDItMiAgUzI5LjEwNCwyMiwyOCwyMnpcIi8+PC9zdmc+JztcblxuICAgICAvKipcbiAgICAgKiBJbml0aWFsaXppbmcgY2xhc3NcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gc2VsZWN0b3IgICBIVE1MIHNlbGVjdG9yIGZvciBuYXZpZ2F0aW9uLlxuICAgICAqIEBwYXJhbSB1bnRpbFdpZHRoIFNob3cgSGFtYnVyZ2VyIG1lbnUgdW50aWwgdGhpcyB3aWR0aCBvZiBzaXRlIGNvbnRlbnQuXG4gICAgICogXG4gICAgICogQHNpbmNlIDIwMjItMDItMDlcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvciggc2VsZWN0b3I6IHN0cmluZywgdW50aWxXaWR0aDogbnVtYmVyICkge1xuICAgICAgICB0aGlzLm5hdkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBzZWxlY3RvciApO1xuICAgICAgICB0aGlzLnVudGlsV2lkdGggPSB1bnRpbFdpZHRoO1xuICAgICAgICB0aGlzLmN1cnJlbnRXaWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcblxuICAgICAgICB0aGlzLmFkZEhhbWJ1cmdlcigpO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAncmVzaXplJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50V2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpOyAgXG4gICAgICAgIH0pOyAgICAgICAgICBcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGhhbWJ1cmdlciBtZW51IEhUTUwuXG4gICAgICogXG4gICAgICogQHNpbmNlIDIwMjItMDItMDlcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYWRkSGFtYnVyZ2VyKCkge1xuICAgICAgICB0aGlzLmhhbWJ1cmdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmhhbWJ1cmdlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hhbWJ1cmdlci1tZW51Jyk7XG5cbiAgICAgICAgdGhpcy5oYW1idXJnZXIuY2xhc3NMaXN0LmFkZCgnaGFtYnVyZ2VyLW1lbnUnKTtcbiAgICAgICAgdGhpcy5oYW1idXJnZXIuY2xhc3NMaXN0LmFkZCgnaGlkZS1tZW51Jyk7IC8vIEhpZGUgb24gaW5pdFxuICAgICAgICBcbiAgICAgICAgdGhpcy5oYW1idXJnZXIuaW5uZXJIVE1MID0gdGhpcy5oYW1idXJnZXJTVkc7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoIHRoaXMuaGFtYnVyZ2VyICk7XG5cbiAgICAgICAgdGhpcy5oYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50b2dnbGVOYXYoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlbmRlcigpIHtcbiAgICAgICAgaWYoIHRoaXMuY3VycmVudFdpZHRoIDw9IHRoaXMudW50aWxXaWR0aCApIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0hhbWJ1cmdlcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5oaWRlSGFtYnVyZ2VyKCk7ICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCB0b2dnbGVOYXYoKSB7XG4gICAgICAgIHRoaXMuaXNOYXYoKSA/IHRoaXMuc2xpZGVPdXROYXYoKSA6IHRoaXMuc2xpZGVJbk5hdigpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBpc05hdigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmF2RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnUtaW4nKTtcbiAgICB9XG4gICAgXG4gICAgcHJvdGVjdGVkIHNob3dOYXYoKSB7XG4gICAgICAgIHRoaXMubmF2RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlLW1lbnUnKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaGlkZU5hdigpIHsgICAgICAgICAgICAgICAgXG4gICAgICAgIHRoaXMubmF2RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRlLW1lbnUnKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2xpZGVJbk5hdigpIHtcbiAgICAgICAgdGhpcy5uYXZFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21lbnUtaW4nKTtcbiAgICAgICAgdGhpcy5uYXZFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtb3V0Jyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNsaWRlT3V0TmF2KCkge1xuICAgICAgICB0aGlzLm5hdkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1pbicpO1xuICAgICAgICB0aGlzLm5hdkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbWVudS1vdXQnKTtcbiAgICB9XG4gICAgXG4gICAgcHJvdGVjdGVkIHNob3dIYW1idXJnZXIoKSB7ICAgICAgICBcbiAgICAgICAgdGhpcy5oYW1idXJnZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZS1tZW51Jyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGhpZGVIYW1idXJnZXIoKSB7XG4gICAgICAgIHRoaXMuaGFtYnVyZ2VyLmNsYXNzTGlzdC5hZGQoJ2hpZGUtbWVudScpO1xuICAgIH1cbiB9Il0sIm5hbWVzIjpbInNlbGVjdG9yIiwidW50aWxXaWR0aCIsIm5hdkVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjdXJyZW50V2lkdGgiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsImFkZEhhbWJ1cmdlciIsInJlbmRlciIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJfdGhpcyIsIkhhbWJ1cmdlck1lbnUiLCJoYW1idXJnZXIiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJIVE1MIiwiaGFtYnVyZ2VyU1ZHIiwiYm9keSIsImFwcGVuZCIsInRvZ2dsZU5hdiIsInNob3dIYW1idXJnZXIiLCJoaWRlSGFtYnVyZ2VyIiwiaXNOYXYiLCJzbGlkZU91dE5hdiIsInNsaWRlSW5OYXYiLCJjb250YWlucyIsInJlbW92ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/HamburgerMenu.ts\n");

/***/ }),

/***/ "./src/ts/StickyElement.ts":
/*!*********************************!*\
  !*** ./src/ts/StickyElement.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * Class StickyElement\n *\n * Needed to stick HTML elements on top of the page.\n *\n * @since 2020-02-02\n */\nvar StickyElement =\n/** @class */\nfunction () {\n  /**\n   * Initializing class\n   *\n   * @param selector HTML selector.\n   * @param offset   Offset to top of the page.\n   *\n   * @since 2020-02-02\n   */\n  function StickyElement(selector, offset) {\n    var _this = this;\n\n    this.elementOffset = offset;\n    this.element = document.querySelector(selector);\n    this.padding = parseInt(window.getComputedStyle(this.element).paddingLeft);\n    document.addEventListener('scroll', function () {\n      _this.currentOffset = window.scrollY;\n\n      if (_this.currentOffset > _this.elementOffset) {\n        _this.activateSticky();\n      } else {\n        _this.deactivateSticky();\n      }\n    });\n  }\n  /**\n   * Activate stickyness.\n   *\n   * @since 2020-02-02\n   */\n\n\n  StickyElement.prototype.activateSticky = function () {\n    var width = this.element.parentElement.clientWidth;\n    this.element.classList.add('sticky');\n    this.element.setAttribute('style', 'width:' + width + 'px; padding-left:' + this.padding + '; padding-right:' + this.padding);\n  };\n  /**\n   * Deactivate stickyness.\n   *\n   * @since 2020-02-02\n   */\n\n\n  StickyElement.prototype.deactivateSticky = function () {\n    this.element.classList.remove('sticky');\n    this.element.removeAttribute('style');\n    this.element.setAttribute('style', 'padding-bottom:0px; padding-top:20px;');\n  };\n\n  return StickyElement;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StickyElement);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvU3RpY2t5RWxlbWVudC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7Ozs7QUFPQztBQUFBO0FBQUE7QUFxQ0c7Ozs7Ozs7O0FBUUEseUJBQWFBLFFBQWIsRUFBK0JDLE1BQS9CLEVBQTZDO0FBQTdDOztBQUNJLFNBQUtDLGFBQUwsR0FBcUJELE1BQXJCO0FBQ0EsU0FBS0UsT0FBTCxHQUFlQyxRQUFRLENBQUNDLGFBQVQsQ0FBd0JMLFFBQXhCLENBQWY7QUFDQSxTQUFLTSxPQUFMLEdBQWVDLFFBQVEsQ0FBRUMsTUFBTSxDQUFDQyxnQkFBUCxDQUF5QixLQUFLTixPQUE5QixFQUF3Q08sV0FBMUMsQ0FBdkI7QUFFQU4sWUFBUSxDQUFDTyxnQkFBVCxDQUEyQixRQUEzQixFQUFxQztBQUNqQ0MsV0FBSSxDQUFDQyxhQUFMLEdBQXFCTCxNQUFNLENBQUNNLE9BQTVCOztBQUVBLFVBQUtGLEtBQUksQ0FBQ0MsYUFBTCxHQUFxQkQsS0FBSSxDQUFDVixhQUEvQixFQUErQztBQUMzQ1UsYUFBSSxDQUFDRyxjQUFMO0FBQ0gsT0FGRCxNQUVPO0FBQ0hILGFBQUksQ0FBQ0ksZ0JBQUw7QUFDSDtBQUNKLEtBUkQ7QUFTSDtBQUVEOzs7Ozs7O0FBS1FDLDJDQUFSO0FBQ0ksUUFBSUMsS0FBSyxHQUFHLEtBQUtmLE9BQUwsQ0FBYWdCLGFBQWIsQ0FBMkJDLFdBQXZDO0FBQ0EsU0FBS2pCLE9BQUwsQ0FBYWtCLFNBQWIsQ0FBdUJDLEdBQXZCLENBQTRCLFFBQTVCO0FBQ0EsU0FBS25CLE9BQUwsQ0FBYW9CLFlBQWIsQ0FBMkIsT0FBM0IsRUFBb0MsV0FBV0wsS0FBWCxHQUFtQixtQkFBbkIsR0FBeUMsS0FBS1osT0FBOUMsR0FBd0Qsa0JBQXhELEdBQTZFLEtBQUtBLE9BQXRIO0FBQ0gsR0FKTztBQU1SOzs7Ozs7O0FBS1FXLDZDQUFSO0FBQ0ksU0FBS2QsT0FBTCxDQUFha0IsU0FBYixDQUF1QkcsTUFBdkIsQ0FBK0IsUUFBL0I7QUFDQSxTQUFLckIsT0FBTCxDQUFhc0IsZUFBYixDQUE2QixPQUE3QjtBQUNBLFNBQUt0QixPQUFMLENBQWFvQixZQUFiLENBQTJCLE9BQTNCLEVBQW9DLHVDQUFwQztBQUNILEdBSk87O0FBS1o7QUFBQyxDQWxGQSIsInNvdXJjZXMiOlsid2VicGFjazovL2phY2tpZS10aGVtZS8uL3NyYy90cy9TdGlja3lFbGVtZW50LnRzP2E1ODYiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDbGFzcyBTdGlja3lFbGVtZW50XG4gKiBcbiAqIE5lZWRlZCB0byBzdGljayBIVE1MIGVsZW1lbnRzIG9uIHRvcCBvZiB0aGUgcGFnZS5cbiAqIFxuICogQHNpbmNlIDIwMjAtMDItMDJcbiAqL1xuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0aWNreUVsZW1lbnQge1xuICAgIC8qKlxuICAgICAqIEN1cnJlbnQgb2Zmc2V0IGluIHB4LlxuICAgICAqIFxuICAgICAqIEB2YXIgaW50XG4gICAgICogXG4gICAgICogQHNpbmNlIDIwMjAtMDItMDJcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgY3VycmVudE9mZnNldDogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogT2Zmc2V0IHdoZXJlIHRoZSBlbGVtZW50IGhhcyB0byBzdGljay5cbiAgICAgKiBcbiAgICAgKiBAdmFyIGludFxuICAgICAqIFxuICAgICAqIEBzaW5jZSAyMDIwLTAyLTAyXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGVsZW1lbnRPZmZzZXQ6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIFBhZGRpbmcgdXNlZCBmb3IgaW50ZXJuYWwgY2FsYy5cbiAgICAgKiBcbiAgICAgKiBAdmFyIG51bWJlclxuICAgICAqIFxuICAgICAqIEBzaW5jZSAyMDIwLTAyLTAyXG4gICAgICovXG4gICAgIHByb3RlY3RlZCBwYWRkaW5nOiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBUYXJnZXRlZCBIVE1MIGVsZW1lbnQuXG4gICAgICogXG4gICAgICogQHZhciBpbnRcbiAgICAgKiBcbiAgICAgKiBAc2luY2UgMjAyMC0wMi0wMlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBlbGVtZW50OiBIVE1MRWxlbWVudDtcblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemluZyBjbGFzc1xuICAgICAqIFxuICAgICAqIEBwYXJhbSBzZWxlY3RvciBIVE1MIHNlbGVjdG9yLlxuICAgICAqIEBwYXJhbSBvZmZzZXQgICBPZmZzZXQgdG8gdG9wIG9mIHRoZSBwYWdlLlxuICAgICAqIFxuICAgICAqIEBzaW5jZSAyMDIwLTAyLTAyXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoIHNlbGVjdG9yOiBzdHJpbmcsIG9mZnNldDogbnVtYmVyICkge1xuICAgICAgICB0aGlzLmVsZW1lbnRPZmZzZXQgPSBvZmZzZXQ7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIHNlbGVjdG9yICk7XG4gICAgICAgIHRoaXMucGFkZGluZyA9IHBhcnNlSW50KCB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSggdGhpcy5lbGVtZW50ICkucGFkZGluZ0xlZnQgKTtcbiAgICAgICAgXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRPZmZzZXQgPSB3aW5kb3cuc2Nyb2xsWTtcblxuICAgICAgICAgICAgaWYgKCB0aGlzLmN1cnJlbnRPZmZzZXQgPiB0aGlzLmVsZW1lbnRPZmZzZXQgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZVN0aWNreSgpOyAgICAgICAgICBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWFjdGl2YXRlU3RpY2t5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFjdGl2YXRlIHN0aWNreW5lc3MuXG4gICAgICogXG4gICAgICogQHNpbmNlIDIwMjAtMDItMDJcbiAgICAgKi9cbiAgICBwcml2YXRlIGFjdGl2YXRlU3RpY2t5KCkge1xuICAgICAgICBsZXQgd2lkdGggPSB0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoICdzdGlja3knICk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoICdzdHlsZScsICd3aWR0aDonICsgd2lkdGggKyAncHg7IHBhZGRpbmctbGVmdDonICsgdGhpcy5wYWRkaW5nICsgJzsgcGFkZGluZy1yaWdodDonICsgdGhpcy5wYWRkaW5nICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVhY3RpdmF0ZSBzdGlja3luZXNzLlxuICAgICAqIFxuICAgICAqIEBzaW5jZSAyMDIwLTAyLTAyXG4gICAgICovXG4gICAgcHJpdmF0ZSBkZWFjdGl2YXRlU3RpY2t5KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSggJ3N0aWNreScgKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSggJ3N0eWxlJywgJ3BhZGRpbmctYm90dG9tOjBweDsgcGFkZGluZy10b3A6MjBweDsnICk7XG4gICAgfVxufSJdLCJuYW1lcyI6WyJzZWxlY3RvciIsIm9mZnNldCIsImVsZW1lbnRPZmZzZXQiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGFkZGluZyIsInBhcnNlSW50Iiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInBhZGRpbmdMZWZ0IiwiYWRkRXZlbnRMaXN0ZW5lciIsIl90aGlzIiwiY3VycmVudE9mZnNldCIsInNjcm9sbFkiLCJhY3RpdmF0ZVN0aWNreSIsImRlYWN0aXZhdGVTdGlja3kiLCJTdGlja3lFbGVtZW50Iiwid2lkdGgiLCJwYXJlbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmUiLCJyZW1vdmVBdHRyaWJ1dGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/StickyElement.ts\n");

/***/ }),

/***/ "./src/ts/frontend.ts":
/*!****************************!*\
  !*** ./src/ts/frontend.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HamburgerMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HamburgerMenu */ \"./src/ts/HamburgerMenu.ts\");\n/* harmony import */ var _StickyElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StickyElement */ \"./src/ts/StickyElement.ts\");\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  new _StickyElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('.sticky-header', 150);\n  new _HamburgerMenu__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('header nav', 1079);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvZnJvbnRlbmQudHMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUVBRSxRQUFRLENBQUNDLGdCQUFULENBQTJCLGtCQUEzQixFQUErQztBQUMzQyxNQUFJRixzREFBSixDQUFtQixnQkFBbkIsRUFBcUMsR0FBckM7QUFDQSxNQUFJRCxzREFBSixDQUFtQixZQUFuQixFQUFpQyxJQUFqQztBQUNILENBSEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYWNraWUtdGhlbWUvLi9zcmMvdHMvZnJvbnRlbmQudHM/OTQxNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGFtYnVyZ2VyTWVudSBmcm9tICcuL0hhbWJ1cmdlck1lbnUnO1xuaW1wb3J0IFN0aWNreUVsZW1lbnQgZnJvbSAnLi9TdGlja3lFbGVtZW50JztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgbmV3IFN0aWNreUVsZW1lbnQoICcuc3RpY2t5LWhlYWRlcicsIDE1MCApO1xuICAgIG5ldyBIYW1idXJnZXJNZW51KCAnaGVhZGVyIG5hdicsIDEwNzkgKTtcbn0pOyJdLCJuYW1lcyI6WyJIYW1idXJnZXJNZW51IiwiU3RpY2t5RWxlbWVudCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/frontend.ts\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/ts/frontend.ts");
/******/ 	
/******/ })()
;