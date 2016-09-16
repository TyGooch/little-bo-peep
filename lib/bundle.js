/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _game = __webpack_require__(1);
	
	var _game2 = _interopRequireDefault(_game);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	document.addEventListener("DOMContentLoaded", function (event) {
	  var myCanvas = document.getElementById("myCanvas");
	
	  //Get high score
	  var highScore = window.localStorage.getItem('highScore');
	  if (!highScore) {
	    localStorage.setItem('highScore', 0);
	  }
	  window.game = new _game2.default(myCanvas);
	  window.game.renderHomeScreen(myCanvas);
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _moving_object = __webpack_require__(2);
	
	var _moving_object2 = _interopRequireDefault(_moving_object);
	
	var _sheep = __webpack_require__(3);
	
	var _crook = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Game = function () {
	  function Game(myCanvas) {
	    var _this = this;
	
	    _classCallCheck(this, Game);
	
	    this.canvas = myCanvas;
	    this.ctx = myCanvas.getContext('2d');
	    this.DIM_X = 400;
	    this.DIM_Y = 500;
	    this.ctx.fillStyle = "rgb(0,218,246)";
	    this.ctx.fillRect(0, 0, this.DIM_X, this.DIM_Y);
	
	    this.highScore = localStorage.getItem('highScore');
	    this.sheep = [];
	    this.leftCrook = new _crook.LeftCrook();
	    this.rightCrook = new _crook.RightCrook();
	    this.playing = true;
	    this.frame = 0;
	    this.fireLeft = false;
	    this.fireRight = false;
	    this.playing = true;
	
	    this.checkCollisions = this.checkCollisions.bind(this);
	    this.handleClickPlay = this.handleClickPlay.bind(this);
	    this.handleClickHowToPlay = this.handleClickHowToPlay.bind(this);
	    this.handleClickPlayAgain = this.handleClickPlayAgain.bind(this);
	    this.handleClickHome = this.handleClickHome.bind(this);
	    this.handleClickBack = this.handleClickBack.bind(this);
	    this.newGame = this.newGame.bind(this);
	    this.play = this.play.bind(this);
	
	    this.grass = new Image();
	    this.grass.src = 'images/grass.png';
	    this.grass.onload = function () {
	      _this.ctx.drawImage(_this.grass, 0, 375);
	    };
	
	    key('left', function (e) {
	      if (e.key === "ArrowLeft") {
	        e.preventDefault();
	      }
	      _this.fireLeftCrook();
	    });
	
	    key('right', function (e) {
	      if (e.key === "ArrowRight") {
	        e.preventDefault();
	      }
	      if (_this.playing === true && !_this.fireRight) {
	        _this.fireRightCrook();
	      }
	    });
	  }
	
	  _createClass(Game, [{
	    key: 'renderHomeScreen',
	    value: function renderHomeScreen(myCanvas) {
	      var ctx = myCanvas.getContext("2d");
	      ctx.fillStyle = "rgb(0,218,246)";
	      ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);
	
	      var grass = new Image();
	      grass.src = "images/grass.png";
	
	      var sheep1 = new Image();
	      sheep1.src = "images/sheep1.png";
	
	      var sheep2 = new Image();
	      sheep2.src = "images/sheep2.png";
	
	      var cloud1 = new Image();
	      cloud1.src = "images/cloud1.png";
	
	      var cloud2 = new Image();
	      cloud2.src = "images/cloud2.png";
	
	      var cloud3 = new Image();
	      cloud3.src = "images/cloud3.png";
	
	      var cloud4 = new Image();
	      cloud4.src = "images/cloud4.png";
	
	      var title = new Image();
	      title.src = "images/title.png";
	
	      var play = new Image();
	      play.src = "images/play.png";
	
	      var howToPlay = new Image();
	      howToPlay.src = "images/howToPlay.png";
	
	      grass.onload = function () {
	        ctx.drawImage(grass, 0, 375);
	      };
	
	      sheep1.onload = function () {
	        ctx.drawImage(sheep1, 25, 400);
	      };
	
	      sheep2.onload = function () {
	        ctx.drawImage(sheep2, 275, 400);
	      };
	
	      cloud1.onload = function () {
	        ctx.drawImage(cloud1, 0, 20);
	      };
	
	      cloud2.onload = function () {
	        ctx.drawImage(cloud2, 100, 100);
	      };
	
	      cloud3.onload = function () {
	        ctx.drawImage(cloud3, 175, -15);
	      };
	
	      cloud4.onload = function () {
	        ctx.drawImage(cloud4, 275, 15);
	      };
	
	      title.onload = function () {
	        ctx.drawImage(title, 20, 125);
	      };
	
	      play.onload = function () {
	        ctx.drawImage(play, 160, 300);
	      };
	
	      howToPlay.onload = function () {
	        ctx.drawImage(howToPlay, 80, 350);
	      };
	
	      myCanvas.addEventListener('click', this.handleClickPlay, false);
	      myCanvas.addEventListener('click', this.handleClickHowToPlay, false);
	    }
	  }, {
	    key: 'renderInstructions',
	    value: function renderInstructions() {
	      var _this2 = this;
	
	      this.ctx.clearRect(0, 0, 400, 500);
	      this.ctx.fillStyle = "rgb(0,218,246)";
	      this.ctx.fillRect(0, 0, 400, 500);
	
	      var instructions = new Image();
	      instructions.src = 'images/instructions.png';
	      instructions.onload = function () {
	        _this2.ctx.drawImage(instructions, 0, 0);
	      };
	
	      var back = new Image();
	      back.src = 'images/back.png';
	      back.onload = function () {
	        _this2.ctx.drawImage(back, 150, 400);
	      };
	      this.canvas.addEventListener('click', this.handleClickBack, false);
	    }
	  }, {
	    key: 'handleClickPlay',
	    value: function handleClickPlay(e) {
	      var x = e.pageX - this.canvas.offsetLeft,
	          y = e.pageY - this.canvas.offsetTop;
	
	      if (y > 295 && y < 340 && x > 155 && x < 250) {
	        this.canvas.removeEventListener('click', this.handleClickPlay);
	        this.canvas.removeEventListener('click', this.handleClickHowToPlay);
	        window.game.newGame();
	      }
	    }
	  }, {
	    key: 'handleClickHowToPlay',
	    value: function handleClickHowToPlay(e) {
	      var x = e.pageX - this.canvas.offsetLeft,
	          y = e.pageY - this.canvas.offsetTop;
	
	      if (y > 350 && y < 390 && x > 80 && x < 325) {
	        this.canvas.removeEventListener('click', this.handleClickHowToPlay);
	        this.canvas.removeEventListener('click', this.handleClickPlay);
	        this.renderInstructions();
	      }
	    }
	  }, {
	    key: 'handleClickPlayAgain',
	    value: function handleClickPlayAgain(e) {
	      var x = e.pageX - this.canvas.offsetLeft,
	          y = e.pageY - this.canvas.offsetTop;
	
	      if (y > 295 && y < 340 && x > 100 && x < 300) {
	        this.canvas.removeEventListener('click', this.handleClickPlayAgain);
	        this.canvas.removeEventListener('click', this.handleClickHome);
	        this.newGame();
	      }
	    }
	  }, {
	    key: 'handleClickHome',
	    value: function handleClickHome(e) {
	      var x = e.pageX - this.canvas.offsetLeft,
	          y = e.pageY - this.canvas.offsetTop;
	
	      if (y > 355 && y < 400 && x > 145 && x < 250) {
	        this.canvas.removeEventListener('click', this.handleClickHome);
	        this.canvas.removeEventListener('click', this.handleClickPlayAgain);
	        window.game.renderHomeScreen(this.canvas);
	      }
	    }
	  }, {
	    key: 'handleClickBack',
	    value: function handleClickBack(e) {
	      var x = e.pageX - this.canvas.offsetLeft,
	          y = e.pageY - this.canvas.offsetTop;
	
	      if (y > 395 && y < 440 && x > 145 && x < 250) {
	        this.canvas.removeEventListener('click', this.handleClickBack);
	        window.game.renderHomeScreen(this.canvas);
	      }
	    }
	  }, {
	    key: 'addSheep',
	    value: function addSheep() {
	      var leftSheep = new _sheep.LeftSheep({ pos: { x: this.randomX(), y: -80 } });
	      this.increaseVelocity(leftSheep);
	      this.sheep.push(leftSheep);
	
	      var rightSheep = new _sheep.RightSheep({ pos: { x: 300 - this.randomX(), y: -80 } });
	      this.increaseVelocity(rightSheep);
	      this.sheep.push(rightSheep);
	    }
	  }, {
	    key: 'addLeftSheep',
	    value: function addLeftSheep() {
	      var leftSheep = new _sheep.LeftSheep({ pos: { x: this.randomX(), y: -80 } });
	      this.increaseVelocity(leftSheep);
	      this.sheep.push(leftSheep);
	    }
	  }, {
	    key: 'addRightSheep',
	    value: function addRightSheep() {
	      var rightSheep = new _sheep.RightSheep({ pos: { x: 300 - this.randomX(), y: -80 } });
	      this.increaseVelocity(rightSheep);
	      this.sheep.push(rightSheep);
	    }
	  }, {
	    key: 'addRandomSheep',
	    value: function addRandomSheep() {
	      var opts = ['left', 'right', 'both'];
	      var choice = opts[Math.floor(Math.random() * opts.length)];
	      if (choice === 'left') {
	        this.addLeftSheep();
	      } else if (choice === 'right') {
	        this.addRightSheep();
	      } else {
	        this.addSheep();
	      }
	    }
	  }, {
	    key: 'increaseVelocity',
	    value: function increaseVelocity(sheep) {
	      sheep.velocity.y += this.score;
	    }
	  }, {
	    key: 'randomX',
	    value: function randomX() {
	      return Math.floor(Math.random() * 95);
	    }
	  }, {
	    key: 'fireLeftCrook',
	    value: function fireLeftCrook() {
	      if (!this.fireLeft) {
	        this.fireLeft = true;
	        this.leftCrook.pos.x = 0;
	      }
	    }
	  }, {
	    key: 'fireRightCrook',
	    value: function fireRightCrook() {
	      this.fireRight = true;
	      this.rightCrook.pos.x = 400;
	    }
	  }, {
	    key: 'setUpGame',
	    value: function setUpGame() {
	      this.ctx.clearRect(0, 0, 400, 500);
	      this.ctx.fillStyle = "rgb(0,218,246)";
	      this.ctx.fillRect(0, 0, 400, 500);
	      this.score = 0;
	      this.addRandomSheep();
	      var ctx = this.ctx;
	      this.sheep.forEach(function (sheep) {
	        sheep.draw(ctx);
	      });
	      this.play();
	    }
	  }, {
	    key: 'newGame',
	    value: function newGame() {
	      this.sheep = [];
	      this.playing = true;
	      this.frame = 0;
	      this.fireLeft = false;
	      this.fireRight = false;
	      this.playing = true;
	      this.setUpGame();
	    }
	  }, {
	    key: 'checkCollisions',
	    value: function checkCollisions() {
	      var _this3 = this;
	
	      this.sheep.forEach(function (sheep, idx, arr) {
	        if (_this3.leftCrook.collision(sheep) || _this3.rightCrook.collision(sheep)) {
	          sheep.clear(_this3.ctx);
	          arr.splice(idx, 1);
	          _this3.score += 1;
	        }
	      });
	    }
	  }, {
	    key: 'checkGameOver',
	    value: function checkGameOver() {
	      var _this4 = this;
	
	      this.sheep.forEach(function (sheep) {
	        if (sheep.pos.y >= 385) {
	          _this4.playing = false;
	        }
	      });
	    }
	  }, {
	    key: 'renderGameOver',
	    value: function renderGameOver() {
	      var _this5 = this;
	
	      this.ctx.fillStyle = 'rgba(225,225,225,0.5)';
	      this.ctx.fillRect(0, 0, 400, 500);
	
	      if (this.score > this.highScore) {
	        this.highScore = this.score;
	        localStorage.setItem('highScore', this.highScore);
	      }
	
	      var gameOverImage = new Image();
	      gameOverImage.src = 'images/gameOver.png';
	      gameOverImage.onload = function () {
	        _this5.ctx.drawImage(gameOverImage, 10, 200);
	      };
	
	      var playAgain = new Image();
	      playAgain.src = 'images/playAgain.png';
	      playAgain.onload = function () {
	        _this5.ctx.drawImage(playAgain, 100, 300);
	      };
	      this.canvas.addEventListener('click', this.handleClickPlayAgain, false);
	
	      var home = new Image();
	      home.src = 'images/home.png';
	      home.onload = function () {
	        _this5.ctx.drawImage(home, 150, 360);
	      };
	      this.canvas.addEventListener('click', this.handleClickHome, false);
	    }
	  }, {
	    key: 'play',
	    value: function play() {
	      var _this6 = this;
	
	      if (!this.playing) {
	        return this.renderGameOver();
	      }
	      this.checkGameOver();
	      this.frame += 1;
	      this.ctx.drawImage(this.grass, 0, 375);
	      this.ctx.font = "64px Helvetica Neue";
	      this.ctx.fillStyle = 'red';
	      this.ctx.fillText('' + this.score, 174, 490);
	      this.ctx.fillStyle = "rgb(0,218,246)";
	
	      var randomFrame = [70, 75, 80, 90][Math.floor(Math.random() * 4)];
	      if (this.frame % randomFrame === 0) {
	        this.addRandomSheep();
	      }
	      this.checkCollisions();
	      this.sheep.forEach(function (sheep) {
	        sheep.clear(_this6.ctx);
	        sheep.move();
	        sheep.draw(_this6.ctx);
	        _this6.ctx.drawImage(_this6.grass, 0, 375);
	        _this6.ctx.font = "64px Helvetica Neue";
	        _this6.ctx.fillStyle = 'red';
	        _this6.ctx.fillText('' + _this6.score, 174, 490);
	        _this6.ctx.fillStyle = "rgb(0,218,246)";
	      });
	      if (this.fireLeft) {
	        this.leftCrook.clear(this.ctx);
	        this.leftCrook.move();
	        this.leftCrook.draw(this.ctx);
	        if (this.leftCrook.pos.x === 0) {
	          this.fireLeft = false;
	        }
	      }
	      if (this.fireRight) {
	        this.rightCrook.clear(this.ctx);
	        this.rightCrook.move();
	        this.rightCrook.draw(this.ctx);
	        if (this.rightCrook.pos.x === 400) {
	          this.fireRight = false;
	        }
	      }
	
	      this.raf = window.requestAnimationFrame(this.play);
	    }
	  }]);
	
	  return Game;
	}();
	
	exports.default = Game;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MovingObject = function () {
	  function MovingObject() {
	    _classCallCheck(this, MovingObject);
	
	    this.pos = { x: 0, y: 0 };
	    this.velocity = { x: 0, y: 0 };
	    this.width = 95;
	    this.height = 68;
	    this.radius = this.width / 2;
	    this.direction = "down";
	  }
	
	  _createClass(MovingObject, [{
	    key: "draw",
	    value: function draw(ctx) {
	      ctx.beginPath();
	      ctx.moveTo(this.pos.x, this.pos.y);
	      ctx.rect(this.pos.x, this.pos.y, this.width, this.height);
	      ctx.fillStyle = "rgb(0,218,246)";
	      ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);
	    }
	  }, {
	    key: "clear",
	    value: function clear(ctx) {
	      ctx.clearRect(this.pos.x, this.pos.y, this.width, this.height);
	      ctx.fillStyle = "rgb(0,218,246)";
	      ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);
	
	      // ctx.clearRect(this.pos.x, this.pos.y, this.width, this.height);
	    }
	  }, {
	    key: "move",
	    value: function move() {
	      this.pos.x = this.pos.x + this.velocity.x;
	      this.pos.y = this.pos.y + this.velocity.y;
	    }
	  }, {
	    key: "resetPosition",
	    value: function resetPosition() {
	      if (this.direction === "down") {
	        this.pos.x = this.pos.x;
	        this.pos.y = -100;
	      } else {
	        this.pos.x = this.pos.x;
	        this.pos.y = 100;
	      }
	    }
	  }, {
	    key: "collision",
	    value: function collision(otherObject) {
	      if (this.pos.x < otherObject.pos.x + otherObject.width && this.pos.x + this.width > otherObject.pos.x && this.pos.y < otherObject.pos.y + otherObject.height && this.height + this.pos.y > otherObject.pos.y) {
	        return true;
	      }
	    }
	  }]);
	
	  return MovingObject;
	}();
	
	exports.default = MovingObject;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.RightSheep = exports.LeftSheep = exports.Sheep = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _moving_object = __webpack_require__(2);
	
	var _moving_object2 = _interopRequireDefault(_moving_object);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Sheep = exports.Sheep = function (_MovingObject) {
	  _inherits(Sheep, _MovingObject);
	
	  function Sheep() {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	    _classCallCheck(this, Sheep);
	
	    var _this = _possibleConstructorReturn(this, (Sheep.__proto__ || Object.getPrototypeOf(Sheep)).call(this));
	
	    _this.initialPos = options.pos;
	    _this.pos = options.pos || { x: 50, y: 0 };
	    return _this;
	  }
	
	  _createClass(Sheep, [{
	    key: 'reset',
	    value: function reset() {
	      this.pos = this.initialPos;
	    }
	  }, {
	    key: 'resetVelocity',
	    value: function resetVelocity() {
	      if (this.velocity < 0) {
	        this.velocity += 5;
	      } else {
	        this.velocity -= 5;
	      }
	    }
	  }]);
	
	  return Sheep;
	}(_moving_object2.default);
	
	var LeftSheep = exports.LeftSheep = function (_Sheep) {
	  _inherits(LeftSheep, _Sheep);
	
	  function LeftSheep() {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	    _classCallCheck(this, LeftSheep);
	
	    var _this2 = _possibleConstructorReturn(this, (LeftSheep.__proto__ || Object.getPrototypeOf(LeftSheep)).call(this, options));
	
	    _this2.velocity = { x: 0, y: 5 };
	    _this2.leftSheep = new Image();
	    _this2.leftSheep.src = 'images/sheep1.png';
	    // this.leftSheep.onload = () => {
	    //   alert('loaded!');
	    // };
	    return _this2;
	  }
	
	  _createClass(LeftSheep, [{
	    key: 'draw',
	    value: function draw(ctx) {
	      ctx.drawImage(this.leftSheep, this.pos.x, this.pos.y);
	    }
	  }, {
	    key: 'increaseGravity',
	    value: function increaseGravity() {
	      this.velocity.y += 5;
	    }
	  }]);
	
	  return LeftSheep;
	}(Sheep);
	
	var RightSheep = exports.RightSheep = function (_Sheep2) {
	  _inherits(RightSheep, _Sheep2);
	
	  function RightSheep() {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	    _classCallCheck(this, RightSheep);
	
	    var _this3 = _possibleConstructorReturn(this, (RightSheep.__proto__ || Object.getPrototypeOf(RightSheep)).call(this, options));
	
	    _this3.velocity = { x: 0, y: 5 };
	    _this3.rightSheep = new Image();
	    _this3.rightSheep.src = 'images/sheep2.png';
	    return _this3;
	  }
	
	  _createClass(RightSheep, [{
	    key: 'draw',
	    value: function draw(ctx) {
	      ctx.drawImage(this.rightSheep, this.pos.x, this.pos.y);
	    }
	  }, {
	    key: 'increaseGravity',
	    value: function increaseGravity() {
	      this.velocity.y += 5;
	    }
	  }]);
	
	  return RightSheep;
	}(Sheep);
	
	exports.default = Sheep;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.RightCrook = exports.LeftCrook = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _moving_object = __webpack_require__(2);
	
	var _moving_object2 = _interopRequireDefault(_moving_object);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var LeftCrook = exports.LeftCrook = function (_MovingObject) {
	  _inherits(LeftCrook, _MovingObject);
	
	  function LeftCrook() {
	    _classCallCheck(this, LeftCrook);
	
	    var _this = _possibleConstructorReturn(this, (LeftCrook.__proto__ || Object.getPrototypeOf(LeftCrook)).call(this));
	
	    _this.pos = { x: 0, y: 300 };
	    _this.velocity = { x: 10, y: 0 };
	    _this.width = 200;
	    _this.height = 75;
	
	    _this.crookImage = new Image();
	    _this.crookImage.src = 'images/crookLeft.png';
	    return _this;
	  }
	
	  _createClass(LeftCrook, [{
	    key: 'clear',
	    value: function clear(ctx) {
	      ctx.clearRect(this.pos.x - 200, this.pos.y, this.width, this.height);
	      ctx.fillStyle = "rgb(0,218,246)";
	      ctx.fillRect(this.pos.x - 200, this.pos.y, this.width, this.height);
	    }
	  }, {
	    key: 'draw',
	    value: function draw(ctx) {
	      ctx.drawImage(this.crookImage, this.pos.x % 200 - 200, this.pos.y);
	    }
	  }, {
	    key: 'move',
	    value: function move() {
	      if (this.pos.x === 200) {
	        this.velocity.x = -10;
	      }
	      if (this.pos.x === 0) {
	        this.velocity.x = 10;
	      }
	      this.pos.x = this.pos.x + this.velocity.x;
	    }
	  }, {
	    key: 'collision',
	    value: function collision(otherObject) {
	      if (this.pos.x % 200 - 200 < otherObject.pos.x + otherObject.width && this.pos.x % 200 - 200 + this.width > otherObject.pos.x && this.pos.y < otherObject.pos.y + otherObject.height && this.height + this.pos.y > otherObject.pos.y) {
	        return true;
	      }
	    }
	  }]);
	
	  return LeftCrook;
	}(_moving_object2.default);
	
	var RightCrook = exports.RightCrook = function (_MovingObject2) {
	  _inherits(RightCrook, _MovingObject2);
	
	  function RightCrook() {
	    _classCallCheck(this, RightCrook);
	
	    var _this2 = _possibleConstructorReturn(this, (RightCrook.__proto__ || Object.getPrototypeOf(RightCrook)).call(this));
	
	    _this2.pos = { x: 400, y: 300 };
	    _this2.velocity = { x: -10, y: 0 };
	    _this2.width = 200;
	    _this2.height = 100;
	
	    _this2.crookImage = new Image();
	    _this2.crookImage.src = 'images/crookRight.png';
	    return _this2;
	  }
	
	  _createClass(RightCrook, [{
	    key: 'clear',
	    value: function clear(ctx) {
	      ctx.clearRect(this.pos.x, this.pos.y, this.width, this.height);
	      ctx.fillStyle = "rgb(0,218,246)";
	      ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);
	    }
	  }, {
	    key: 'draw',
	    value: function draw(ctx) {
	      ctx.drawImage(this.crookImage, this.pos.x, this.pos.y);
	    }
	  }, {
	    key: 'move',
	    value: function move() {
	      if (this.pos.x === 200) {
	        this.velocity.x = 10;
	      }
	      if (this.pos.x === 400) {
	        this.velocity.x = -10;
	      }
	      this.pos.x = this.pos.x + this.velocity.x;
	    }
	  }, {
	    key: 'collision',
	    value: function collision(otherObject) {
	      if (this.pos.x < otherObject.pos.x + otherObject.width && this.pos.x + this.width > otherObject.pos.x && this.pos.y < otherObject.pos.y + otherObject.height && this.height + this.pos.y > otherObject.pos.y) {
	        return true;
	      }
	    }
	  }]);

	  return RightCrook;
	}(_moving_object2.default);

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map