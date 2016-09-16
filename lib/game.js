import MovingObject from './moving_object';
import {Sheep,
        LeftSheep,
        RightSheep
      } from './sheep';
import {LeftCrook, RightCrook} from './crook';

class Game {

  constructor(myCanvas) {
    this.ctx = myCanvas.getContext('2d');
    this.DIM_X = 400;
    this.DIM_Y = 500;
    this.ctx.fillStyle = "rgb(0,218,246)";
    this.ctx.fillRect(0, 0, this.DIM_X, this.DIM_Y);

    this.sheep =[];
    this.leftCrook = new LeftCrook();
    this.rightCrook = new RightCrook();
    this.playing = true;
    this.frame = 0;
    this.fireLeft = false;
    this.fireRight = false;
    this.playing = true;

    this.checkCollisions = this.checkCollisions.bind(this);
    this.play = this.play.bind(this);
    this.newGame = this.newGame.bind(this);

    this.grass = new Image();
    this.grass.src = 'images/grass.png';
    this.grass.onload = () => {
      this.ctx.drawImage(this.grass, 0, 400);
    };
    // this.setUpGame = this.setUpGame.bind(this);
    // this.resetGame = this.resetGame.bind(this);

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

  addSheep(){
      const leftSheep = new LeftSheep({pos: {x: this.randomX(), y: -80}});
      this.sheep.push(leftSheep);

      const rightSheep = new RightSheep({pos: {x: 300-this.randomX(), y: -80}});
      this.sheep.push(rightSheep);
  }

  addLeftSheep(){
    const leftSheep = new LeftSheep({pos: {x: this.randomX(), y: -80}});
    this.sheep.push(leftSheep);
  }

  addRightSheep(){
    const rightSheep = new RightSheep({pos: {x: 300-this.randomX(), y: -80}});
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
    this.addSheep();
    let ctx = this.ctx;
    this.sheep.forEach((sheep)=>{
      sheep.draw(ctx);
    });
    this.play();
  }

  newGame(){
    this.level = 1;
    this.setUpGame();
  }


  resetGame(){
  }

  pause(){
  }

  checkCollisions(){
    this.sheep.forEach((sheep, idx, arr) => {
      if(this.leftCrook.collision(sheep) || this.rightCrook.collision(sheep)){
        sheep.clear(this.ctx);
        arr.splice(idx, 1);
      }
    }
    );
  }

  checkGameOver(){
    this.sheep.forEach(sheep => {
      if(sheep.pos.y === 425){
        alert('game over!');
      }
    });
  }

  play(){
    this.checkGameOver();
    this.frame += 1;
    if(this.frame % 75 === 0){
      this.addRandomSheep();
    }
      this.checkCollisions();
      this.sheep.forEach((sheep)=>{
        sheep.clear(this.ctx);
        sheep.move();
        sheep.draw(this.ctx);
        this.ctx.drawImage(this.grass, 0, 400);
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
      // this.rightCrook.clear(this.ctx);
      // this.rightCrook.move();
      // this.rightCrook.draw(this.ctx);
    this.raf = window.requestAnimationFrame(this.play);
  }
}


export default Game;
