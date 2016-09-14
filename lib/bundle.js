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
/***/ function(module, exports) {

	document.addEventListener("DOMContentLoaded", function(){
	  const myCanvas = document.getElementsByTagName("canvas")[0];
	  myCanvas.width = 400;
	  myCanvas.height = 500;
	
	  const ctx = myCanvas.getContext("2d");
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
	
	  grass.onload = () => {
	    ctx.drawImage(grass, 0, 375);
	  };
	
	  sheep1.onload = () => {
	    ctx.drawImage(sheep1, 25, 400);
	  };
	
	  sheep2.onload = () => {
	    ctx.drawImage(sheep2, 275, 400);
	  };
	
	  cloud1.onload = () => {
	    ctx.drawImage(cloud1, 0, 20);
	  };
	
	  cloud2.onload = () => {
	    ctx.drawImage(cloud2, 100, 100);
	  };
	
	  cloud3.onload = () => {
	    ctx.drawImage(cloud3, 175, -15);
	  };
	
	  cloud4.onload = () => {
	    ctx.drawImage(cloud4, 275, 15);
	  };
	
	  title.onload = () => {
	    ctx.drawImage(title, 20, 125);
	  };
	
	  play.onload = () => {
	    ctx.drawImage(play, 160, 300);
	  };
	
	  myCanvas.addEventListener('click', (event) => {
	    let x = event.pageX - myCanvas.offsetLeft,
	        y = event.pageY - myCanvas.offsetTop;
	
	   // Collision detection between clicked offset and element.
	     if (y > 295 && y < 340
	         && x > 155 && x < 250) {
	         alert('clicked play');
	     }
	  }, false);
	
	});


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map