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

/***/ "./src/js/Player.js":
/*!**************************!*\
  !*** ./src/js/Player.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Player = /*#__PURE__*/function () {\n  function Player() {\n    _classCallCheck(this, Player);\n\n    this._score = 0;\n  }\n\n  _createClass(Player, [{\n    key: \"increaseScore\",\n    value: function increaseScore(value) {\n      this._score += value;\n    }\n  }, {\n    key: \"score\",\n    get: function get() {\n      return this._score;\n    }\n  }]);\n\n  return Player;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvUGxheWVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxNQUFiO0FBQ0ksb0JBQWM7QUFBQTs7QUFDVixTQUFLQyxNQUFMLEdBQWMsQ0FBZDtBQUNIOztBQUhMO0FBQUE7QUFBQSxXQUtJLHVCQUFjQyxLQUFkLEVBQXFCO0FBQ2pCLFdBQUtELE1BQUwsSUFBZUMsS0FBZjtBQUNIO0FBUEw7QUFBQTtBQUFBLFNBVUksZUFBWTtBQUNSLGFBQU8sS0FBS0QsTUFBWjtBQUNIO0FBWkw7O0FBQUE7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2V4YW1lbi1kY2MtamFudmllci0yMDIxLTIwMjIvLi9zcmMvanMvUGxheWVyLmpzP2MyZDMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX3Njb3JlID0gMDtcbiAgICB9XG5cbiAgICBpbmNyZWFzZVNjb3JlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3Njb3JlICs9IHZhbHVlO1xuICAgIH1cblxuXG4gICAgZ2V0IHNjb3JlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2NvcmU7XG4gICAgfVxufVxuXG4iXSwibmFtZXMiOlsiUGxheWVyIiwiX3Njb3JlIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/Player.js\n");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ \"./src/js/Player.js\");\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings */ \"./src/js/settings.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\nvar Tymper = {\n  init: function init() {\n    var _this = this;\n\n    this.eScore = document.querySelector(\".information__score\");\n    this.eWrongCards = document.querySelector('.wrong-cards');\n    this.dataList = document.querySelector('#fonts');\n    this.eApp = document.querySelector('.app');\n    this.eTimeLeft = document.querySelector('.information__time');\n    this.eFontName = document.querySelector('#font');\n    this.eFontFamily = document.querySelector('#family');\n    this.eCurrentCard = this.eApp.querySelector('.app__item:last-child');\n    this.ePlayAgain = document.querySelector('#play-again');\n    this.ePlay = document.querySelector('#play');\n    this.iMaxScore = window.fonts.length;\n    this.sPrefixMessageForTimeLeft = this.eTimeLeft.dataset.text;\n    this.sPrefixMessageForScore = this.eScore.dataset.text;\n    this.isPlaying = false;\n    this.ePlay.addEventListener('submit', function (event) {\n      return _this.play(event);\n    });\n    this.ePlayAgain.addEventListener('submit', function (event) {\n      _this.eWrongCards.innerHTML = \"\";\n      event.preventDefault();\n\n      _this.ePlayAgain.classList.toggle('play--again--hidden');\n\n      _this.start();\n    });\n    this.generateDataOptions();\n    this.start();\n  },\n  start: function start() {\n    var _this2 = this;\n\n    this.player = new _Player__WEBPACK_IMPORTED_MODULE_0__.Player();\n    this.iTimeLeft = _settings__WEBPACK_IMPORTED_MODULE_1__.settings.maxTimePerCard;\n    this.eFontName.focus();\n    this.generateFontCards();\n    this.displayScore();\n    this.displayTime();\n\n    if (_settings__WEBPACK_IMPORTED_MODULE_1__.settings.withTimer) {\n      this.timer = setInterval(function () {\n        _this2.updateTime();\n      }, _settings__WEBPACK_IMPORTED_MODULE_1__.settings.maxTimePerCard * 100);\n    }\n  },\n  displayScore: function displayScore() {\n    this.eScore.innerHTML = \"\".concat(this.sPrefixMessageForScore, \" <span>\").concat(this.player.score, \"/\").concat(this.iMaxScore, \"</span>\");\n  },\n  play: function play(event) {\n    event.preventDefault();\n\n    if (!this.isPlaying) {\n      this.isPlaying = true;\n      this.eCurrentCard = this.eApp.querySelector('.app__item:last-child');\n\n      if (this.eFontName.value === this.eCurrentCard.dataset.fontName && this.eFontFamily.value === this.eCurrentCard.dataset.family) {\n        this.eCurrentCard.classList.add('app__item--move', \"app__item--move--success\");\n        this.player.increaseScore(1);\n      } else if (this.eFontName.value === this.eCurrentCard.dataset.fontName || this.eFontFamily.value === this.eCurrentCard.dataset.family) {\n        this.eWrongCards.insertAdjacentElement('afterbegin', this.eCurrentCard.cloneNode(true));\n        this.eCurrentCard.classList.add('app__item--move', \"app__item--move--error\");\n        this.player.increaseScore(0.5);\n      } else {\n        this.eWrongCards.insertAdjacentElement('afterbegin', this.eCurrentCard.cloneNode(true));\n        this.eCurrentCard.classList.add('app__item--move', \"app__item--move--error\");\n      }\n\n      this.iTimeLeft = _settings__WEBPACK_IMPORTED_MODULE_1__.settings.maxTimePerCard;\n      this.displayTime();\n      this.afterPlay();\n    }\n  },\n  afterPlay: function afterPlay() {\n    var _this3 = this;\n\n    this.eFontName.value = '';\n    this.eFontFamily.value = '';\n    this.eFontName.focus();\n    this.eCurrentCard.addEventListener('transitionend', function (event) {\n      event.currentTarget.remove();\n\n      if (_this3.eApp.childElementCount === 0) {\n        clearInterval(_this3.timer);\n\n        _this3.ePlayAgain.classList.toggle('play--again--hidden');\n      }\n\n      _this3.isPlaying = false;\n    });\n    this.displayScore();\n  },\n  generateFontCards: function generateFontCards() {\n    var _iterator = _createForOfIteratorHelper(_settings__WEBPACK_IMPORTED_MODULE_1__.settings.doShuffle ? _utils__WEBPACK_IMPORTED_MODULE_2__.utils.shuffle(fonts) : fonts.reverse()),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var font = _step.value;\n        this.eApp.insertAdjacentHTML('beforeend', \"<li data-font-name=\\\"\".concat(font.name, \"\\\" data-family=\\\"\").concat(font.family, \"\\\" class='app__item'><div class=\\\"app__item__info\\\">\\n                        <span class=\\\"app__item__info__name\\\">\").concat(font.name, \"</span><span class=\\\"app__item__info__info\\\">\").concat(font.family, \" - \").concat(font.author, \"</span></div><img class='app__item__font' src='./assets/fonts/\").concat(font.file, \".svg' alt='Aa, abcdefghijklmnopqrstuvwxyz, ABCDEFGHIJKLMNOPQRSTUVWXYZ'>\\n                        </li>\"));\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n  },\n  generateDataOptions: function generateDataOptions() {\n    var _iterator2 = _createForOfIteratorHelper(fonts),\n        _step2;\n\n    try {\n      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n        var font = _step2.value;\n        this.dataList.insertAdjacentHTML('beforeend', \"<option value='\".concat(font.name, \"'>\"));\n      }\n    } catch (err) {\n      _iterator2.e(err);\n    } finally {\n      _iterator2.f();\n    }\n  },\n  updateTime: function updateTime() {\n    if (this.iTimeLeft === 0) {\n      this.eCurrentCard = this.eApp.querySelector('.app__item:last-child');\n      this.eWrongCards.insertAdjacentElement('afterbegin', this.eCurrentCard.cloneNode(true));\n      this.eCurrentCard.classList.add('app__item--move', \"app__item--move--error\");\n      this.afterPlay();\n      this.iTimeLeft = _settings__WEBPACK_IMPORTED_MODULE_1__.settings.maxTimePerCard;\n    } else {\n      this.iTimeLeft--;\n    }\n\n    this.displayTime();\n  },\n  displayTime: function displayTime() {\n    this.eTimeLeft.innerHTML = \"\".concat(this.sPrefixMessageForTimeLeft, \" <time datetime=\\\"\").concat(this.formatTime(this.iTimeLeft), \"\\\">\").concat(this.formatTime(this.iTimeLeft), \"</time>\");\n  },\n  formatTime: function formatTime(seconds) {\n    return \"\".concat(this.zeros(Math.floor(seconds / 60)), \":\").concat(this.zeros(seconds % 60));\n  },\n  zeros: function zeros(digit) {\n    if (digit < 10) {\n      return \"0\".concat(digit);\n    }\n\n    return digit;\n  }\n};\nTymper.init();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ2hCLHFCQUFVLEtBQUtDLEtBQUwsQ0FBV0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILE9BQU8sR0FBRyxFQUFyQixDQUFYLENBQVYsY0FBa0QsS0FBS0MsS0FBTCxDQUFXRCxPQUFPLEdBQUcsRUFBckIsQ0FBbEQ7QUFDSCxHQTdHVTtBQThHWEMsRUFBQUEsS0E5R1csaUJBOEdMRyxLQTlHSyxFQThHRTtBQUNULFFBQUlBLEtBQUssR0FBRyxFQUFaLEVBQWdCO0FBQ1osd0JBQVdBLEtBQVg7QUFDSDs7QUFDRCxXQUFPQSxLQUFQO0FBQ0g7QUFuSFUsQ0FBZjtBQXNIQXJFLE1BQU0sQ0FBQ0MsSUFBUCIsInNvdXJjZXMiOlsid2VicGFjazovL2V4YW1lbi1kY2MtamFudmllci0yMDIxLTIwMjIvLi9zcmMvanMvbWFpbi5qcz81Njg3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGxheWVyfSBmcm9tIFwiLi9QbGF5ZXJcIjtcbmltcG9ydCB7c2V0dGluZ3N9IGZyb20gXCIuL3NldHRpbmdzXCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi91dGlsc1wiO1xuXG5jb25zdCBUeW1wZXIgPSB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5lU2NvcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZm9ybWF0aW9uX19zY29yZVwiKVxuICAgICAgICB0aGlzLmVXcm9uZ0NhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyb25nLWNhcmRzJyk7XG4gICAgICAgIHRoaXMuZGF0YUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9udHMnKVxuICAgICAgICB0aGlzLmVBcHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXBwJyk7XG4gICAgICAgIHRoaXMuZVRpbWVMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm9ybWF0aW9uX190aW1lJyk7XG4gICAgICAgIHRoaXMuZUZvbnROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZvbnQnKTtcbiAgICAgICAgdGhpcy5lRm9udEZhbWlseSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmYW1pbHknKTtcbiAgICAgICAgdGhpcy5lQ3VycmVudENhcmQgPSB0aGlzLmVBcHAucXVlcnlTZWxlY3RvcignLmFwcF9faXRlbTpsYXN0LWNoaWxkJyk7XG4gICAgICAgIHRoaXMuZVBsYXlBZ2FpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5LWFnYWluJyk7XG4gICAgICAgIHRoaXMuZVBsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheScpXG4gICAgICAgIHRoaXMuaU1heFNjb3JlID0gd2luZG93LmZvbnRzLmxlbmd0aDtcbiAgICAgICAgdGhpcy5zUHJlZml4TWVzc2FnZUZvclRpbWVMZWZ0ID0gdGhpcy5lVGltZUxlZnQuZGF0YXNldC50ZXh0O1xuICAgICAgICB0aGlzLnNQcmVmaXhNZXNzYWdlRm9yU2NvcmUgPSB0aGlzLmVTY29yZS5kYXRhc2V0LnRleHQ7XG4gICAgICAgIHRoaXMuaXNQbGF5aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZVBsYXkuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB0aGlzLnBsYXkoZXZlbnQpKTtcbiAgICAgICAgdGhpcy5lUGxheUFnYWluLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lV3JvbmdDYXJkcy5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuZVBsYXlBZ2Fpbi5jbGFzc0xpc3QudG9nZ2xlKCdwbGF5LS1hZ2Fpbi0taGlkZGVuJyk7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVEYXRhT3B0aW9ucygpO1xuICAgICAgICB0aGlzLnN0YXJ0KClcbiAgICB9LFxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoKTtcbiAgICAgICAgdGhpcy5pVGltZUxlZnQgPSBzZXR0aW5ncy5tYXhUaW1lUGVyQ2FyZDtcbiAgICAgICAgdGhpcy5lRm9udE5hbWUuZm9jdXMoKTtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUZvbnRDYXJkcygpO1xuICAgICAgICB0aGlzLmRpc3BsYXlTY29yZSgpO1xuICAgICAgICB0aGlzLmRpc3BsYXlUaW1lKCk7XG4gICAgICAgIGlmIChzZXR0aW5ncy53aXRoVGltZXIpIHtcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVUaW1lKClcbiAgICAgICAgICAgIH0sIHNldHRpbmdzLm1heFRpbWVQZXJDYXJkICogMTAwKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGlzcGxheVNjb3JlKCkge1xuICAgICAgICB0aGlzLmVTY29yZS5pbm5lckhUTUwgPSBgJHt0aGlzLnNQcmVmaXhNZXNzYWdlRm9yU2NvcmV9IDxzcGFuPiR7dGhpcy5wbGF5ZXIuc2NvcmV9LyR7dGhpcy5pTWF4U2NvcmV9PC9zcGFuPmBcbiAgICB9LFxuICAgIHBsYXkoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKCF0aGlzLmlzUGxheWluZykge1xuICAgICAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5lQ3VycmVudENhcmQgPSB0aGlzLmVBcHAucXVlcnlTZWxlY3RvcignLmFwcF9faXRlbTpsYXN0LWNoaWxkJyk7XG4gICAgICAgICAgICBpZiAodGhpcy5lRm9udE5hbWUudmFsdWUgPT09IHRoaXMuZUN1cnJlbnRDYXJkLmRhdGFzZXQuZm9udE5hbWUgJiYgdGhpcy5lRm9udEZhbWlseS52YWx1ZSA9PT0gdGhpcy5lQ3VycmVudENhcmQuZGF0YXNldC5mYW1pbHkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVDdXJyZW50Q2FyZC5jbGFzc0xpc3QuYWRkKCdhcHBfX2l0ZW0tLW1vdmUnLCBgYXBwX19pdGVtLS1tb3ZlLS1zdWNjZXNzYCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuaW5jcmVhc2VTY29yZSgxKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5lRm9udE5hbWUudmFsdWUgPT09IHRoaXMuZUN1cnJlbnRDYXJkLmRhdGFzZXQuZm9udE5hbWUgfHwgdGhpcy5lRm9udEZhbWlseS52YWx1ZSA9PT0gdGhpcy5lQ3VycmVudENhcmQuZGF0YXNldC5mYW1pbHkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVXcm9uZ0NhcmRzLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJiZWdpbicsIHRoaXMuZUN1cnJlbnRDYXJkLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5lQ3VycmVudENhcmQuY2xhc3NMaXN0LmFkZCgnYXBwX19pdGVtLS1tb3ZlJywgYGFwcF9faXRlbS0tbW92ZS0tZXJyb3JgKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5pbmNyZWFzZVNjb3JlKDAuNSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZVdyb25nQ2FyZHMuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmJlZ2luJywgdGhpcy5lQ3VycmVudENhcmQuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVDdXJyZW50Q2FyZC5jbGFzc0xpc3QuYWRkKCdhcHBfX2l0ZW0tLW1vdmUnLCBgYXBwX19pdGVtLS1tb3ZlLS1lcnJvcmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pVGltZUxlZnQgPSBzZXR0aW5ncy5tYXhUaW1lUGVyQ2FyZDtcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheVRpbWUoKTtcbiAgICAgICAgICAgIHRoaXMuYWZ0ZXJQbGF5KCk7XG4gICAgICAgIH1cblxuICAgIH0sXG4gICAgYWZ0ZXJQbGF5KCkge1xuICAgICAgICB0aGlzLmVGb250TmFtZS52YWx1ZSA9ICcnO1xuICAgICAgICB0aGlzLmVGb250RmFtaWx5LnZhbHVlID0gJyc7XG4gICAgICAgIHRoaXMuZUZvbnROYW1lLmZvY3VzKCk7XG4gICAgICAgIHRoaXMuZUN1cnJlbnRDYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQucmVtb3ZlKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5lQXBwLmNoaWxkRWxlbWVudENvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVQbGF5QWdhaW4uY2xhc3NMaXN0LnRvZ2dsZSgncGxheS0tYWdhaW4tLWhpZGRlbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZGlzcGxheVNjb3JlKCk7XG4gICAgfSxcblxuICAgIGdlbmVyYXRlRm9udENhcmRzKCkge1xuICAgICAgICBmb3IgKGNvbnN0IGZvbnQgb2Ygc2V0dGluZ3MuZG9TaHVmZmxlID8gdXRpbHMuc2h1ZmZsZShmb250cykgOiBmb250cy5yZXZlcnNlKCkpIHtcbiAgICAgICAgICAgIHRoaXMuZUFwcC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsXG4gICAgICAgICAgICAgICAgYDxsaSBkYXRhLWZvbnQtbmFtZT1cIiR7Zm9udC5uYW1lfVwiIGRhdGEtZmFtaWx5PVwiJHtmb250LmZhbWlseX1cIiBjbGFzcz0nYXBwX19pdGVtJz48ZGl2IGNsYXNzPVwiYXBwX19pdGVtX19pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFwcF9faXRlbV9faW5mb19fbmFtZVwiPiR7Zm9udC5uYW1lfTwvc3Bhbj48c3BhbiBjbGFzcz1cImFwcF9faXRlbV9faW5mb19faW5mb1wiPiR7Zm9udC5mYW1pbHl9IC0gJHtmb250LmF1dGhvcn08L3NwYW4+PC9kaXY+PGltZyBjbGFzcz0nYXBwX19pdGVtX19mb250JyBzcmM9Jy4vYXNzZXRzL2ZvbnRzLyR7Zm9udC5maWxlfS5zdmcnIGFsdD0nQWEsIGFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6LCBBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPmApXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGdlbmVyYXRlRGF0YU9wdGlvbnMoKSB7XG4gICAgICAgIGZvciAoY29uc3QgZm9udCBvZiBmb250cykge1xuICAgICAgICAgICAgdGhpcy5kYXRhTGlzdC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGA8b3B0aW9uIHZhbHVlPScke2ZvbnQubmFtZX0nPmApXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHVwZGF0ZVRpbWUoKSB7XG4gICAgICAgIGlmICh0aGlzLmlUaW1lTGVmdCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5lQ3VycmVudENhcmQgPSB0aGlzLmVBcHAucXVlcnlTZWxlY3RvcignLmFwcF9faXRlbTpsYXN0LWNoaWxkJyk7XG4gICAgICAgICAgICB0aGlzLmVXcm9uZ0NhcmRzLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJiZWdpbicsIHRoaXMuZUN1cnJlbnRDYXJkLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgICAgICB0aGlzLmVDdXJyZW50Q2FyZC5jbGFzc0xpc3QuYWRkKCdhcHBfX2l0ZW0tLW1vdmUnLCBgYXBwX19pdGVtLS1tb3ZlLS1lcnJvcmApO1xuICAgICAgICAgICAgdGhpcy5hZnRlclBsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuaVRpbWVMZWZ0ID0gc2V0dGluZ3MubWF4VGltZVBlckNhcmQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlUaW1lTGVmdC0tO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGlzcGxheVRpbWUoKTtcbiAgICB9LFxuICAgIGRpc3BsYXlUaW1lKCkge1xuICAgICAgICB0aGlzLmVUaW1lTGVmdC5pbm5lckhUTUwgPSBgJHt0aGlzLnNQcmVmaXhNZXNzYWdlRm9yVGltZUxlZnR9IDx0aW1lIGRhdGV0aW1lPVwiJHt0aGlzLmZvcm1hdFRpbWUodGhpcy5pVGltZUxlZnQpfVwiPiR7dGhpcy5mb3JtYXRUaW1lKHRoaXMuaVRpbWVMZWZ0KX08L3RpbWU+YFxuICAgIH0sXG4gICAgZm9ybWF0VGltZShzZWNvbmRzKSB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLnplcm9zKE1hdGguZmxvb3Ioc2Vjb25kcyAvIDYwKSl9OiR7dGhpcy56ZXJvcyhzZWNvbmRzICUgNjApfWBcbiAgICB9LFxuICAgIHplcm9zKGRpZ2l0KSB7XG4gICAgICAgIGlmIChkaWdpdCA8IDEwKSB7XG4gICAgICAgICAgICByZXR1cm4gYDAke2RpZ2l0fWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRpZ2l0O1xuICAgIH1cbn1cblxuVHltcGVyLmluaXQoKTtcbiJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJzZXR0aW5ncyIsInV0aWxzIiwiVHltcGVyIiwiaW5pdCIsImVTY29yZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImVXcm9uZ0NhcmRzIiwiZGF0YUxpc3QiLCJlQXBwIiwiZVRpbWVMZWZ0IiwiZUZvbnROYW1lIiwiZUZvbnRGYW1pbHkiLCJlQ3VycmVudENhcmQiLCJlUGxheUFnYWluIiwiZVBsYXkiLCJpTWF4U2NvcmUiLCJ3aW5kb3ciLCJmb250cyIsImxlbmd0aCIsInNQcmVmaXhNZXNzYWdlRm9yVGltZUxlZnQiLCJkYXRhc2V0IiwidGV4dCIsInNQcmVmaXhNZXNzYWdlRm9yU2NvcmUiLCJpc1BsYXlpbmciLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwbGF5IiwiaW5uZXJIVE1MIiwicHJldmVudERlZmF1bHQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJzdGFydCIsImdlbmVyYXRlRGF0YU9wdGlvbnMiLCJwbGF5ZXIiLCJpVGltZUxlZnQiLCJtYXhUaW1lUGVyQ2FyZCIsImZvY3VzIiwiZ2VuZXJhdGVGb250Q2FyZHMiLCJkaXNwbGF5U2NvcmUiLCJkaXNwbGF5VGltZSIsIndpdGhUaW1lciIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJ1cGRhdGVUaW1lIiwic2NvcmUiLCJ2YWx1ZSIsImZvbnROYW1lIiwiZmFtaWx5IiwiYWRkIiwiaW5jcmVhc2VTY29yZSIsImluc2VydEFkamFjZW50RWxlbWVudCIsImNsb25lTm9kZSIsImFmdGVyUGxheSIsImN1cnJlbnRUYXJnZXQiLCJyZW1vdmUiLCJjaGlsZEVsZW1lbnRDb3VudCIsImNsZWFySW50ZXJ2YWwiLCJkb1NodWZmbGUiLCJzaHVmZmxlIiwicmV2ZXJzZSIsImZvbnQiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJuYW1lIiwiYXV0aG9yIiwiZmlsZSIsImZvcm1hdFRpbWUiLCJzZWNvbmRzIiwiemVyb3MiLCJNYXRoIiwiZmxvb3IiLCJkaWdpdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/main.js\n");

/***/ }),

/***/ "./src/js/settings.js":
/*!****************************!*\
  !*** ./src/js/settings.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"settings\": () => (/* binding */ settings)\n/* harmony export */ });\nvar settings = {\n  withTimer: true,\n  maxTimePerCard: 20,\n  doShuffle: true\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvc2V0dGluZ3MuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLElBQU1BLFFBQVEsR0FBRztBQUNwQkMsRUFBQUEsU0FBUyxFQUFFLElBRFM7QUFFcEJDLEVBQUFBLGNBQWMsRUFBRSxFQUZJO0FBR3BCQyxFQUFBQSxTQUFTLEVBQUU7QUFIUyxDQUFqQiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4YW1lbi1kY2MtamFudmllci0yMDIxLTIwMjIvLi9zcmMvanMvc2V0dGluZ3MuanM/Yjg0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgd2l0aFRpbWVyOiB0cnVlLFxuICAgIG1heFRpbWVQZXJDYXJkOiAyMCxcbiAgICBkb1NodWZmbGU6IHRydWUsXG59Il0sIm5hbWVzIjpbInNldHRpbmdzIiwid2l0aFRpbWVyIiwibWF4VGltZVBlckNhcmQiLCJkb1NodWZmbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/settings.js\n");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"utils\": () => (/* binding */ utils)\n/* harmony export */ });\nvar utils = {};\n\nutils.shuffle = function (array) {\n  var currentIndex = array.length,\n      randomIndex;\n\n  while (currentIndex !== 0) {\n    randomIndex = Math.floor(Math.random() * currentIndex);\n    currentIndex--;\n    var _ref = [array[randomIndex], array[currentIndex]];\n    array[currentIndex] = _ref[0];\n    array[randomIndex] = _ref[1];\n  }\n\n  return array;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvdXRpbHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLElBQU1BLEtBQUssR0FBRyxFQUFkOztBQUVQQSxLQUFLLENBQUNDLE9BQU4sR0FBZ0IsVUFBVUMsS0FBVixFQUFpQjtBQUM3QixNQUFJQyxZQUFZLEdBQUdELEtBQUssQ0FBQ0UsTUFBekI7QUFBQSxNQUFpQ0MsV0FBakM7O0FBQ0EsU0FBT0YsWUFBWSxLQUFLLENBQXhCLEVBQTJCO0FBRXZCRSxJQUFBQSxXQUFXLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JMLFlBQTNCLENBQWQ7QUFDQUEsSUFBQUEsWUFBWTtBQUhXLGVBSXFCLENBQUNELEtBQUssQ0FBQ0csV0FBRCxDQUFOLEVBQXFCSCxLQUFLLENBQUNDLFlBQUQsQ0FBMUIsQ0FKckI7QUFJdEJELElBQUFBLEtBQUssQ0FBQ0MsWUFBRCxDQUppQjtBQUlERCxJQUFBQSxLQUFLLENBQUNHLFdBQUQsQ0FKSjtBQUsxQjs7QUFFRCxTQUFPSCxLQUFQO0FBQ0gsQ0FWRCIsInNvdXJjZXMiOlsid2VicGFjazovL2V4YW1lbi1kY2MtamFudmllci0yMDIxLTIwMjIvLi9zcmMvanMvdXRpbHMuanM/NGZkZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgdXRpbHMgPSB7fTtcblxudXRpbHMuc2h1ZmZsZSA9IGZ1bmN0aW9uIChhcnJheSkge1xuICAgIGxldCBjdXJyZW50SW5kZXggPSBhcnJheS5sZW5ndGgsIHJhbmRvbUluZGV4O1xuICAgIHdoaWxlIChjdXJyZW50SW5kZXggIT09IDApIHtcblxuICAgICAgICByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGN1cnJlbnRJbmRleCk7XG4gICAgICAgIGN1cnJlbnRJbmRleC0tO1xuICAgICAgICBbYXJyYXlbY3VycmVudEluZGV4XSwgYXJyYXlbcmFuZG9tSW5kZXhdXSA9IFthcnJheVtyYW5kb21JbmRleF0sIGFycmF5W2N1cnJlbnRJbmRleF1dO1xuICAgIH1cblxuICAgIHJldHVybiBhcnJheTtcbn1cbiJdLCJuYW1lcyI6WyJ1dGlscyIsInNodWZmbGUiLCJhcnJheSIsImN1cnJlbnRJbmRleCIsImxlbmd0aCIsInJhbmRvbUluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/utils.js\n");

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Fzcy9tYWluLnNjc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhhbWVuLWRjYy1qYW52aWVyLTIwMjEtMjAyMi8uL3NyYy9zYXNzL21haW4uc2Nzcz80M2YwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/sass/main.scss\n");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/main": 0,
/******/ 			"css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkexamen_dcc_janvier_2021_2022"] = self["webpackChunkexamen_dcc_janvier_2021_2022"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/js/main.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/sass/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;