import Game from './game';

document.addEventListener("DOMContentLoaded", function(event) {
  const myCanvas = document.getElementById("myCanvas");
  window.game = new Game(myCanvas);
  window.setTimeout(window.game.setUpGame(), 5000);
});
