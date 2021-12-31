/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game.js */ \"./src/scripts/game.js\");\n // import Fruit from \"./scripts/fruit\";\n\nvar document = window.document;\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var canvas = document.querySelector(\"#canvas\");\n  canvas.width = 1300;\n  canvas.height = 525;\n  var ctx = canvas.getContext('2d'); // let background = document.getElementById(\"background\");\n  // ctx.drawImage(background, 50, 5);\n\n  var image = new Image();\n  image.onload = drawImageActualSize;\n  image.src = 'src/assets/apple/apple.png';\n  var game = new _scripts_game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n  game.start();\n\n  function drawImageActualSize() {// canvas.width = 1300;\n    // canvas.height = 525;\n    // ctx.drawImage(this, 0, 0, 150, 150);\n  }\n}); // const canvas = document.getElementById('canvas');\n// const ctx = canvas.getContext('2d');\n// const image = new Image(60, 45); // Using optional size for image\n// image.onload = drawImageActualSize; // Draw when image has loaded\n// image.src = 'src/assets/piggy.png';\n// function drawImageActualSize() {\n//   // Use the intrinsic size of image in CSS pixels for the canvas element\n//   canvas.width = this.naturalWidth;\n//   canvas.height = this.naturalHeight;\n//   // Will draw the image as 300x227, ignoring the custom size of 60x45\n//   // given in the constructor\n//   ctx.drawImage(this, 0, 0);\n//   // To use the custom size we'll have to specify the scale parameters\n//   // using the element's width and height properties - lets draw one\n//   // on top in the corner:\n//   ctx.drawImage(this, 0, 0, this.width, this.height);\n// }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Q0FDQTs7QUFDQSxJQUFJQyxRQUFRLEdBQUdDLE1BQU0sQ0FBQ0QsUUFBdEI7QUFDQUEsUUFBUSxDQUFDRSxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBVTtBQUN0RCxNQUFNQyxNQUFNLEdBQUdILFFBQVEsQ0FBQ0ksYUFBVCxDQUF1QixTQUF2QixDQUFmO0FBQ0FELEVBQUFBLE1BQU0sQ0FBQ0UsS0FBUCxHQUFlLElBQWY7QUFDQUYsRUFBQUEsTUFBTSxDQUFDRyxNQUFQLEdBQWdCLEdBQWhCO0FBQ0EsTUFBTUMsR0FBRyxHQUFHSixNQUFNLENBQUNLLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWixDQUpzRCxDQUt0RDtBQUNBOztBQUVBLE1BQU1DLEtBQUssR0FBRyxJQUFJQyxLQUFKLEVBQWQ7QUFDQUQsRUFBQUEsS0FBSyxDQUFDRSxNQUFOLEdBQWVDLG1CQUFmO0FBQ0FILEVBQUFBLEtBQUssQ0FBQ0ksR0FBTixHQUFZLDRCQUFaO0FBQ0EsTUFBSUMsSUFBSSxHQUFHLElBQUlmLHdEQUFKLENBQVNRLEdBQVQsQ0FBWDtBQUNBTyxFQUFBQSxJQUFJLENBQUNDLEtBQUw7O0FBRUEsV0FBU0gsbUJBQVQsR0FBK0IsQ0FDN0I7QUFDQTtBQUNBO0FBQ0Q7QUFDRixDQW5CRCxHQXFCQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJ1aXRfc2xpY2VyLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWUgZnJvbSBcIi4vc2NyaXB0cy9nYW1lLmpzXCI7XG4vLyBpbXBvcnQgRnJ1aXQgZnJvbSBcIi4vc2NyaXB0cy9mcnVpdFwiO1xubGV0IGRvY3VtZW50ID0gd2luZG93LmRvY3VtZW50O1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKXtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYW52YXNcIik7XG4gIGNhbnZhcy53aWR0aCA9IDEzMDA7XG4gIGNhbnZhcy5oZWlnaHQgPSA1MjU7XG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAvLyBsZXQgYmFja2dyb3VuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2dyb3VuZFwiKTtcbiAgLy8gY3R4LmRyYXdJbWFnZShiYWNrZ3JvdW5kLCA1MCwgNSk7XG5cbiAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgaW1hZ2Uub25sb2FkID0gZHJhd0ltYWdlQWN0dWFsU2l6ZTtcbiAgaW1hZ2Uuc3JjID0gJ3NyYy9hc3NldHMvYXBwbGUvYXBwbGUucG5nJztcbiAgbGV0IGdhbWUgPSBuZXcgR2FtZShjdHgpO1xuICBnYW1lLnN0YXJ0KCk7XG5cbiAgZnVuY3Rpb24gZHJhd0ltYWdlQWN0dWFsU2l6ZSgpIHtcbiAgICAvLyBjYW52YXMud2lkdGggPSAxMzAwO1xuICAgIC8vIGNhbnZhcy5oZWlnaHQgPSA1MjU7XG4gICAgLy8gY3R4LmRyYXdJbWFnZSh0aGlzLCAwLCAwLCAxNTAsIDE1MCk7XG4gIH1cbn0pXG5cbi8vIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbi8vIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4vLyBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSg2MCwgNDUpOyAvLyBVc2luZyBvcHRpb25hbCBzaXplIGZvciBpbWFnZVxuLy8gaW1hZ2Uub25sb2FkID0gZHJhd0ltYWdlQWN0dWFsU2l6ZTsgLy8gRHJhdyB3aGVuIGltYWdlIGhhcyBsb2FkZWRcbi8vIGltYWdlLnNyYyA9ICdzcmMvYXNzZXRzL3BpZ2d5LnBuZyc7XG5cbi8vIGZ1bmN0aW9uIGRyYXdJbWFnZUFjdHVhbFNpemUoKSB7XG4vLyAgIC8vIFVzZSB0aGUgaW50cmluc2ljIHNpemUgb2YgaW1hZ2UgaW4gQ1NTIHBpeGVscyBmb3IgdGhlIGNhbnZhcyBlbGVtZW50XG4vLyAgIGNhbnZhcy53aWR0aCA9IHRoaXMubmF0dXJhbFdpZHRoO1xuLy8gICBjYW52YXMuaGVpZ2h0ID0gdGhpcy5uYXR1cmFsSGVpZ2h0O1xuXG4vLyAgIC8vIFdpbGwgZHJhdyB0aGUgaW1hZ2UgYXMgMzAweDIyNywgaWdub3JpbmcgdGhlIGN1c3RvbSBzaXplIG9mIDYweDQ1XG4vLyAgIC8vIGdpdmVuIGluIHRoZSBjb25zdHJ1Y3RvclxuLy8gICBjdHguZHJhd0ltYWdlKHRoaXMsIDAsIDApO1xuXG4vLyAgIC8vIFRvIHVzZSB0aGUgY3VzdG9tIHNpemUgd2UnbGwgaGF2ZSB0byBzcGVjaWZ5IHRoZSBzY2FsZSBwYXJhbWV0ZXJzXG4vLyAgIC8vIHVzaW5nIHRoZSBlbGVtZW50J3Mgd2lkdGggYW5kIGhlaWdodCBwcm9wZXJ0aWVzIC0gbGV0cyBkcmF3IG9uZVxuLy8gICAvLyBvbiB0b3AgaW4gdGhlIGNvcm5lcjpcbi8vICAgY3R4LmRyYXdJbWFnZSh0aGlzLCAwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4vLyB9Il0sIm5hbWVzIjpbIkdhbWUiLCJkb2N1bWVudCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJxdWVyeVNlbGVjdG9yIiwid2lkdGgiLCJoZWlnaHQiLCJjdHgiLCJnZXRDb250ZXh0IiwiaW1hZ2UiLCJJbWFnZSIsIm9ubG9hZCIsImRyYXdJbWFnZUFjdHVhbFNpemUiLCJzcmMiLCJnYW1lIiwic3RhcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/fruit.js":
/*!******************************!*\
  !*** ./src/scripts/fruit.js ***!
  \******************************/
/***/ (function(module) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar Fruit = /*#__PURE__*/function () {\n  function Fruit(randomFruit) {\n    _classCallCheck(this, Fruit);\n\n    this.sliced = false;\n    this.type = randomFruit;\n  }\n\n  _createClass(Fruit, [{\n    key: \"throw\",\n    value: function _throw() {\n      console.log(\"Throwing fruit!\");\n    }\n  }, {\n    key: \"render\",\n    value: function render() {//draw fruit (this) on the canvas\n    }\n  }]);\n\n  return Fruit;\n}();\n\nmodule.exports = Fruit; // const image = new Image();\n//   image.onload = drawImageActualSize;\n//   image.src = 'src/assets/apple/apple.png';\n//   function drawImageActualSize() {\n//     // canvas.width = 1300;\n//     // canvas.height = 525;\n//     ctx.drawImage(this, 0, 0);\n//   }\n// apple size is 150 x 150//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcnVpdF9zbGljZXIvLi9zcmMvc2NyaXB0cy9mcnVpdC5qcz83ZmY5Il0sIm5hbWVzIjpbIkZydWl0IiwicmFuZG9tRnJ1aXQiLCJzbGljZWQiLCJ0eXBlIiwiY29uc29sZSIsImxvZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFNQSxLO0FBRUosaUJBQVlDLFdBQVosRUFBeUI7QUFBQTs7QUFDdkIsU0FBS0MsTUFBTCxHQUFjLEtBQWQ7QUFDQSxTQUFLQyxJQUFMLEdBQVlGLFdBQVo7QUFFRDs7OztXQUVELGtCQUFRO0FBQ05HLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaO0FBQ0Q7OztXQUVELGtCQUFTLENBQ1A7QUFDRDs7Ozs7O0FBR0hDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlAsS0FBakIsQyxDQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFRSIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEZydWl0IHtcblxuICBjb25zdHJ1Y3RvcihyYW5kb21GcnVpdCkge1xuICAgIHRoaXMuc2xpY2VkID0gZmFsc2U7XG4gICAgdGhpcy50eXBlID0gcmFuZG9tRnJ1aXQ7XG5cbiAgfVxuXG4gIHRocm93KCkge1xuICAgIGNvbnNvbGUubG9nKFwiVGhyb3dpbmcgZnJ1aXQhXCIpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIC8vZHJhdyBmcnVpdCAodGhpcykgb24gdGhlIGNhbnZhc1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRnJ1aXQ7XG5cbi8vIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4vLyAgIGltYWdlLm9ubG9hZCA9IGRyYXdJbWFnZUFjdHVhbFNpemU7XG4vLyAgIGltYWdlLnNyYyA9ICdzcmMvYXNzZXRzL2FwcGxlL2FwcGxlLnBuZyc7XG5cbi8vICAgZnVuY3Rpb24gZHJhd0ltYWdlQWN0dWFsU2l6ZSgpIHtcbi8vICAgICAvLyBjYW52YXMud2lkdGggPSAxMzAwO1xuLy8gICAgIC8vIGNhbnZhcy5oZWlnaHQgPSA1MjU7XG4vLyAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLCAwLCAwKTtcbi8vICAgfVxuXG4gIC8vIGFwcGxlIHNpemUgaXMgMTUwIHggMTUwXG4iXSwiZmlsZSI6Ii4vc3JjL3NjcmlwdHMvZnJ1aXQuanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/fruit.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar Fruit = __webpack_require__(/*! ./fruit.js */ \"./src/scripts/fruit.js\"); // import Fruit from \"./fruit.js\";\n\n\nvar Game = /*#__PURE__*/function () {\n  function Game(ctx) {\n    _classCallCheck(this, Game);\n\n    this.ctx = ctx;\n    this.level = 1;\n    this.fruits = [];\n    this.score = 0;\n    this.lives = 3;\n  }\n\n  _createClass(Game, [{\n    key: \"start\",\n    value: function start() {\n      var _this = this;\n\n      var fruit = this.generateRandomFruit();\n      setTimeout(function () {\n        fruit.throw();\n\n        _this.play();\n      }, 2000);\n    }\n  }, {\n    key: \"generateRandomFruit\",\n    value: function generateRandomFruit() {\n      var fruits = [\"apple\", \"banana\", \"pineapple\", \"orange\", \"mango\", \"kiwi\", \"lemon\", \"watermelon\", \"pomegranite\", \"peach\", \"lime\", \"coconut\"]; //should I add bomb to fruits, or make a bomb class?\n\n      var randomFruit = Math.floor(Math.random() * fruits.length);\n      return new Fruit(randomFruit);\n    }\n  }, {\n    key: \"play\",\n    value: function play() {\n      var _this2 = this;\n\n      // console.log(\"Playing!\");\n      var time = this.getTimeout();\n      setInterval(function () {\n        if (!_this2.gameOver()) {\n          var fruit = _this2.generateRandomFruit();\n\n          fruit.throw();\n        }\n      }, 1000);\n    }\n  }, {\n    key: \"getTimeout\",\n    value: function getTimeout() {\n      if (this.level === 1) {\n        return 5000;\n      } else {\n        return 5000 - 400 * this.level;\n      }\n    }\n  }, {\n    key: \"nextLevel\",\n    value: function nextLevel() {\n      if (this.fruits.length > 3) {\n        this.level += 1;\n        console.log(\"Leveled up. Now on level \" + this.level);\n      }\n    }\n  }, {\n    key: \"gameOver\",\n    value: function gameOver() {\n      return !this.lives;\n    }\n  }]);\n\n  return Game;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxLQUFLLEdBQUdDLG1CQUFPLENBQUMsMENBQUQsQ0FBckIsRUFDQTs7O0lBRXFCQztBQUNuQixnQkFBWUMsR0FBWixFQUFpQjtBQUFBOztBQUNmLFNBQUtBLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxDQUFiO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLEVBQWQ7QUFDQSxTQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNBLFNBQUtDLEtBQUwsR0FBYSxDQUFiO0FBQ0Q7Ozs7V0FFRCxpQkFBUTtBQUFBOztBQUNOLFVBQUlDLEtBQUssR0FBRyxLQUFLQyxtQkFBTCxFQUFaO0FBQ0FDLE1BQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2ZGLFFBQUFBLEtBQUssQ0FBQ0csS0FBTjs7QUFDQSxhQUFJLENBQUNDLElBQUw7QUFDRCxPQUhTLEVBR1AsSUFITyxDQUFWO0FBSUQ7OztXQUVELCtCQUFzQjtBQUNwQixVQUFNUCxNQUFNLEdBQUcsQ0FBQyxPQUFELEVBQVUsUUFBVixFQUFvQixXQUFwQixFQUFpQyxRQUFqQyxFQUEyQyxPQUEzQyxFQUFvRCxNQUFwRCxFQUE0RCxPQUE1RCxFQUFxRSxZQUFyRSxFQUFtRixhQUFuRixFQUFrRyxPQUFsRyxFQUEyRyxNQUEzRyxFQUFtSCxTQUFuSCxDQUFmLENBRG9CLENBRXBCOztBQUNBLFVBQU1RLFdBQVcsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQlgsTUFBTSxDQUFDWSxNQUFsQyxDQUFwQjtBQUNBLGFBQU8sSUFBSWpCLEtBQUosQ0FBVWEsV0FBVixDQUFQO0FBQ0Q7OztXQUVELGdCQUFPO0FBQUE7O0FBQ0w7QUFDQSxVQUFJSyxJQUFJLEdBQUcsS0FBS0MsVUFBTCxFQUFYO0FBQ0FDLE1BQUFBLFdBQVcsQ0FBRSxZQUFNO0FBQ2pCLFlBQUksQ0FBQyxNQUFJLENBQUNDLFFBQUwsRUFBTCxFQUFzQjtBQUNwQixjQUFJYixLQUFLLEdBQUcsTUFBSSxDQUFDQyxtQkFBTCxFQUFaOztBQUNBRCxVQUFBQSxLQUFLLENBQUNHLEtBQU47QUFDRDtBQUNGLE9BTFUsRUFLUixJQUxRLENBQVg7QUFNRDs7O1dBRUQsc0JBQWE7QUFDWCxVQUFJLEtBQUtQLEtBQUwsS0FBZSxDQUFuQixFQUFzQjtBQUNwQixlQUFPLElBQVA7QUFDRCxPQUZELE1BRU87QUFDTCxlQUFPLE9BQVEsTUFBTSxLQUFLQSxLQUExQjtBQUNEO0FBQ0Y7OztXQUVELHFCQUFZO0FBQ1osVUFBSSxLQUFLQyxNQUFMLENBQVlZLE1BQVosR0FBcUIsQ0FBekIsRUFBNEI7QUFDMUIsYUFBS2IsS0FBTCxJQUFjLENBQWQ7QUFDQWtCLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDhCQUE4QixLQUFLbkIsS0FBL0M7QUFDRDtBQUNBOzs7V0FHRCxvQkFBVztBQUNULGFBQU8sQ0FBQyxLQUFLRyxLQUFiO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcnVpdF9zbGljZXIvLi9zcmMvc2NyaXB0cy9nYW1lLmpzP2NkYzAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRnJ1aXQgPSByZXF1aXJlKFwiLi9mcnVpdC5qc1wiKTtcbi8vIGltcG9ydCBGcnVpdCBmcm9tIFwiLi9mcnVpdC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoY3R4KSB7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5sZXZlbCA9IDE7XG4gICAgdGhpcy5mcnVpdHMgPSBbXTtcbiAgICB0aGlzLnNjb3JlID0gMDtcbiAgICB0aGlzLmxpdmVzID0gMztcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIGxldCBmcnVpdCA9IHRoaXMuZ2VuZXJhdGVSYW5kb21GcnVpdCgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZnJ1aXQudGhyb3coKTtcbiAgICAgIHRoaXMucGxheSgpO1xuICAgIH0sIDIwMDApO1xuICB9XG5cbiAgZ2VuZXJhdGVSYW5kb21GcnVpdCgpIHtcbiAgICBjb25zdCBmcnVpdHMgPSBbXCJhcHBsZVwiLCBcImJhbmFuYVwiLCBcInBpbmVhcHBsZVwiLCBcIm9yYW5nZVwiLCBcIm1hbmdvXCIsIFwia2l3aVwiLCBcImxlbW9uXCIsIFwid2F0ZXJtZWxvblwiLCBcInBvbWVncmFuaXRlXCIsIFwicGVhY2hcIiwgXCJsaW1lXCIsIFwiY29jb251dFwiXVxuICAgIC8vc2hvdWxkIEkgYWRkIGJvbWIgdG8gZnJ1aXRzLCBvciBtYWtlIGEgYm9tYiBjbGFzcz9cbiAgICBjb25zdCByYW5kb21GcnVpdCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGZydWl0cy5sZW5ndGgpO1xuICAgIHJldHVybiBuZXcgRnJ1aXQocmFuZG9tRnJ1aXQpO1xuICB9XG5cbiAgcGxheSgpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcIlBsYXlpbmchXCIpO1xuICAgIGxldCB0aW1lID0gdGhpcy5nZXRUaW1lb3V0KCk7XG4gICAgc2V0SW50ZXJ2YWwoICgpID0+IHtcbiAgICAgIGlmICghdGhpcy5nYW1lT3ZlcigpKSB7XG4gICAgICAgIGxldCBmcnVpdCA9IHRoaXMuZ2VuZXJhdGVSYW5kb21GcnVpdCgpO1xuICAgICAgICBmcnVpdC50aHJvdygpO1xuICAgICAgfVxuICAgIH0sIDEwMDApXG4gIH1cblxuICBnZXRUaW1lb3V0KCkge1xuICAgIGlmICh0aGlzLmxldmVsID09PSAxKSB7XG4gICAgICByZXR1cm4gNTAwMDsgXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiA1MDAwIC0gKDQwMCAqIHRoaXMubGV2ZWwpO1xuICAgIH1cbiAgfVxuXG4gIG5leHRMZXZlbCgpIHtcbiAgaWYgKHRoaXMuZnJ1aXRzLmxlbmd0aCA+IDMpIHsgXG4gICAgdGhpcy5sZXZlbCArPSAxO1xuICAgIGNvbnNvbGUubG9nKFwiTGV2ZWxlZCB1cC4gTm93IG9uIGxldmVsIFwiICsgdGhpcy5sZXZlbCk7XG4gIH1cbiAgfVxuXG4gIFxuICBnYW1lT3ZlcigpIHtcbiAgICByZXR1cm4gIXRoaXMubGl2ZXM7XG4gIH1cbn1cblxuIl0sIm5hbWVzIjpbIkZydWl0IiwicmVxdWlyZSIsIkdhbWUiLCJjdHgiLCJsZXZlbCIsImZydWl0cyIsInNjb3JlIiwibGl2ZXMiLCJmcnVpdCIsImdlbmVyYXRlUmFuZG9tRnJ1aXQiLCJzZXRUaW1lb3V0IiwidGhyb3ciLCJwbGF5IiwicmFuZG9tRnJ1aXQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJ0aW1lIiwiZ2V0VGltZW91dCIsInNldEludGVydmFsIiwiZ2FtZU92ZXIiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcnVpdF9zbGljZXIvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;