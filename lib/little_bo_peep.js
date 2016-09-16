import Game from './game';

document.addEventListener("DOMContentLoaded", function(event) {
  const myCanvas = document.getElementById("myCanvas");

  //Get high score
  let highScore = window.localStorage.getItem('highScore');
  if (!highScore){
    localStorage.setItem('highScore', 0);
  }
  window.game = new Game(myCanvas);
  window.game.renderHomeScreen(myCanvas);
});
