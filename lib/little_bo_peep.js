import Game from './game';

document.addEventListener("DOMContentLoaded", function(event) {
  const myCanvas = document.getElementById("myCanvas");
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

  myCanvas.addEventListener('click', (e) => {
    let x = e.pageX - myCanvas.offsetLeft,
        y = e.pageY - myCanvas.offsetTop;

   // Collision detection between clicked offset and element.
     if (y > 295 && y < 340
         && x > 155 && x < 250) {
           window.game = new Game(myCanvas);
           window.game.setUpGame();
     }
  }, false);
});
