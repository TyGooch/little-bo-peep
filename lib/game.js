import MovingObject from './moving_object';
import {Sheep,
        LeftSheep,
        RightSheep
      } from './sheep';
import {LeftCrook, RightCrook} from './crook';

class Game {

  constructor(myCanvas) {
    this.canvas = myCanvas;
    this.ctx = myCanvas.getContext('2d');
    this.DIM_X = 400;
    this.DIM_Y = 500;
    this.ctx.fillStyle = "rgb(0,218,246)";
    this.ctx.fillRect(0, 0, this.DIM_X, this.DIM_Y);

    this.highScore = localStorage.getItem('highScore');
    this.sheep =[];
    this.leftCrook = new LeftCrook();
    this.rightCrook = new RightCrook();
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
    this.grass.onload = () => {
      this.ctx.drawImage(this.grass, 0, 375);
    };

    key('left', (e) =>  {
      if (e.key === "ArrowLeft"){
        e.preventDefault();
      }
      this.fireLeftCrook();
    } );

    key('right', (e) =>  {
      if (e.key === "ArrowRight"){
        e.preventDefault();
      }
      if(this.playing === true&& !this.fireRight){
        this.fireRightCrook();
      }
    } );
  }

renderHomeScreen(myCanvas){
  const ctx = myCanvas.getContext("2d");
  ctx.fillStyle = "rgb(0,218,246)";
  ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);

  const grass = new Image();
  grass.src = "images/grass.png";

  const sheep1 = new Image();
  sheep1.src = "images/sheep1.png";

  const sheep2 = new Image();
  sheep2.src = "images/sheep2.png";

  const cloud1 = new Image();
  cloud1.src = "images/cloud1.png";

  const cloud2 = new Image();
  cloud2.src = "images/cloud2.png";

  const cloud3 = new Image();
  cloud3.src = "images/cloud3.png";

  const cloud4 = new Image();
  cloud4.src = "images/cloud4.png";

  const title = new Image();
  title.src = "images/title.png";

  const play = new Image();
  play.src = "images/play.png";

  const howToPlay = new Image();
  howToPlay.src = "images/howToPlay.png";


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

  howToPlay.onload = () => {
    ctx.drawImage(howToPlay, 80, 350);
  };

  myCanvas.addEventListener('click', this.handleClickPlay, false);
  myCanvas.addEventListener('click', this.handleClickHowToPlay, false);
}

renderInstructions(){
  this.ctx.clearRect(0,0,400,500);
  this.ctx.fillStyle = "rgb(0,218,246)";
  this.ctx.fillRect(0,0,400,500);

  const instructions = new Image();
  instructions.src = 'images/instructions.png';
  instructions.onload = () => {
    this.ctx.drawImage(instructions, 0, 0);
  };

  const back = new Image();
  back.src = 'images/back.png';
  back.onload = () => {
    this.ctx.drawImage(back, 150, 400);
  };
  this.canvas.addEventListener('click', this.handleClickBack, false);
}

handleClickPlay(e){
  let x = e.pageX - this.canvas.offsetLeft,
      y = e.pageY - this.canvas.offsetTop;

   if (y > 295 && y < 340
       && x > 155 && x < 250) {
         this.canvas.removeEventListener('click', this.handleClickPlay);
         this.canvas.removeEventListener('click', this.handleClickHowToPlay);
         window.game.newGame();
   }
}

handleClickHowToPlay(e){
  let x = e.pageX - this.canvas.offsetLeft,
      y = e.pageY - this.canvas.offsetTop;

   if (y > 350 && y < 390
       && x > 80 && x < 325) {
         this.canvas.removeEventListener('click', this.handleClickHowToPlay);
         this.canvas.removeEventListener('click', this.handleClickPlay);
         this.renderInstructions();
   }
}

handleClickPlayAgain(e){
  let x = e.pageX - this.canvas.offsetLeft,
      y = e.pageY - this.canvas.offsetTop;

   if (y > 295 && y < 340
       && x > 100 && x < 300) {
         this.canvas.removeEventListener('click', this.handleClickPlayAgain);
         this.canvas.removeEventListener('click', this.handleClickHome);
         this.newGame();
   }
}

handleClickHome(e){
  let x = e.pageX - this.canvas.offsetLeft,
      y = e.pageY - this.canvas.offsetTop;

   if (y > 355 && y < 400
       && x > 145 && x < 250) {
         this.canvas.removeEventListener('click', this.handleClickHome);
         this.canvas.removeEventListener('click', this.handleClickPlayAgain);
         window.game.renderHomeScreen(this.canvas);
   }
}

handleClickBack(e){
  let x = e.pageX - this.canvas.offsetLeft,
      y = e.pageY - this.canvas.offsetTop;

   if (y > 395 && y < 440
       && x > 145 && x < 250) {
         this.canvas.removeEventListener('click', this.handleClickBack);
         window.game.renderHomeScreen(this.canvas);
   }
}

  addSheep(){
      const leftSheep = new LeftSheep({pos: {x: this.randomX(), y: -80}});
      this.increaseVelocity(leftSheep);
      this.sheep.push(leftSheep);

      const rightSheep = new RightSheep({pos: {x: 300-this.randomX(), y: -80}});
      this.increaseVelocity(rightSheep);
      this.sheep.push(rightSheep);
  }

  addLeftSheep(){
    const leftSheep = new LeftSheep({pos: {x: this.randomX(), y: -80}});
    this.increaseVelocity(leftSheep);
    this.sheep.push(leftSheep);
  }

  addRightSheep(){
    const rightSheep = new RightSheep({pos: {x: 300-this.randomX(), y: -80}});
    this.increaseVelocity(rightSheep);
    this.sheep.push(rightSheep);
  }

  addRandomSheep(){
    const opts = ['left', 'right', 'both'];
    let choice = opts[Math.floor(Math.random()*opts.length)];
    if(choice === 'left'){
      this.addLeftSheep();
    }
    else if(choice === 'right'){
      this.addRightSheep();
    }
    else{
      this.addSheep();
    }
  }

  increaseVelocity(sheep){
    sheep.velocity.y += this.score;
  }

  randomX(){
    return(Math.floor(Math.random()*95));
  }

  fireLeftCrook(){
    if(!this.fireLeft){
      this.fireLeft = true;
      this.leftCrook.pos.x = 0;
    }
  }

  fireRightCrook(){
    this.fireRight = true;
    this.rightCrook.pos.x = 400;
  }

  setUpGame(){
    this.ctx.clearRect(0,0,400,500);
    this.ctx.fillStyle = "rgb(0,218,246)";
    this.ctx.fillRect(0, 0, 400, 500);
    this.score = 0;
    this.addRandomSheep();
    let ctx = this.ctx;
    this.sheep.forEach((sheep)=>{
      sheep.draw(ctx);
    });
    this.play();
  }

  newGame(){
    this.sheep =[];
    this.playing = true;
    this.frame = 0;
    this.fireLeft = false;
    this.fireRight = false;
    this.playing = true;
    this.setUpGame();
  }

  checkCollisions(){
    this.sheep.forEach((sheep, idx, arr) => {
      if(this.leftCrook.collision(sheep) || this.rightCrook.collision(sheep)){
        sheep.clear(this.ctx);
        arr.splice(idx, 1);
        this.score += 1;
      }
    }
    );
  }

  checkGameOver(){
    this.sheep.forEach(sheep => {
      if(sheep.pos.y >= 385){
        this.playing = false;
      }
    });
  }

  renderGameOver(){
    this.ctx.fillStyle = 'rgba(225,225,225,0.5)';
    this.ctx.fillRect(0,0,400,500);

    if(this.score > this.highScore){
      this.highScore = this.score;
      localStorage.setItem('highScore', this.highScore);
    }

    const gameOverImage = new Image();
    gameOverImage.src = 'images/gameOver.png';
    gameOverImage.onload = () => {
      this.ctx.drawImage(gameOverImage, 10, 200);
    };

    const playAgain = new Image();
    playAgain.src = 'images/playAgain.png';
    playAgain.onload = () => {
      this.ctx.drawImage(playAgain, 100, 300);
    };
    this.canvas.addEventListener('click', this.handleClickPlayAgain, false);

    const home = new Image();
    home.src = 'images/home.png';
    home.onload = () => {
      this.ctx.drawImage(home, 150, 360);
    };
    this.canvas.addEventListener('click', this.handleClickHome, false);
  }

  play(){
    if(!this.playing){
      return(this.renderGameOver());
    }
    this.checkGameOver();
    this.frame += 1;
    this.ctx.drawImage(this.grass, 0, 375);
    this.ctx.font="64px Helvetica Neue";
    this.ctx.fillStyle = 'red';
    this.ctx.fillText(`${this.score}`, 174, 490);
    this.ctx.fillStyle = "rgb(0,218,246)";

    const randomFrame = [70,75,80,90][Math.floor(Math.random()*4)];
    if(this.frame % randomFrame === 0){
      this.addRandomSheep();
    }
      this.checkCollisions();
      this.sheep.forEach((sheep)=>{
        sheep.clear(this.ctx);
        sheep.move();
        sheep.draw(this.ctx);
        this.ctx.drawImage(this.grass, 0, 375);
        this.ctx.font="64px Helvetica Neue";
        this.ctx.fillStyle = 'red';
        this.ctx.fillText(`${this.score}`, 174, 490);
        this.ctx.fillStyle = "rgb(0,218,246)";
      });
      if(this.fireLeft){
        this.leftCrook.clear(this.ctx);
        this.leftCrook.move();
        this.leftCrook.draw(this.ctx);
        if(this.leftCrook.pos.x === 0){
          this.fireLeft = false;
        }
      }
      if(this.fireRight){
        this.rightCrook.clear(this.ctx);
        this.rightCrook.move();
        this.rightCrook.draw(this.ctx);
        if(this.rightCrook.pos.x === 400){
          this.fireRight = false;
        }
      }

    this.raf = window.requestAnimationFrame(this.play);
  }
}


export default Game;
