import MovingObject from './moving_object';

export class LeftCrook extends MovingObject {
  constructor(){
    super();
    this.pos = {x: 0, y: 300};
    this.velocity = {x: 10, y: 0};
    this.width = 200;
    this.height = 75;

    this.crookImage = new Image();
    this.crookImage.src = 'images/crookLeft.png';
  }

  clear(ctx){
    ctx.clearRect(this.pos.x -200, this.pos.y, this.width, this.height);
    ctx.fillStyle = "rgb(0,218,246)";
    ctx.fillRect(this.pos.x - 200, this.pos.y, this.width, this.height);
  }

  draw(ctx){
    ctx.drawImage(this.crookImage, this.pos.x % 200 - 200, this.pos.y);
  }

  move(){
    console.log(this.pos.x);
    if(this.pos.x === 200){
      this.velocity.x = -10;
    }
    if(this.pos.x === 0){
      this.velocity.x = 10;
    }
    this.pos.x = this.pos.x + this.velocity.x;
  }

  collision(otherObject){
    if (this.pos.x % 200 - 200 < otherObject.pos.x + otherObject.width &&
       this.pos.x % 200 - 200 + this.width > otherObject.pos.x &&
       this.pos.y < otherObject.pos.y + otherObject.height &&
       this.height + this.pos.y > otherObject.pos.y) {
         return true;
    }
  }
}

export class RightCrook extends MovingObject {
  constructor(){
    super();
    this.pos = {x: 400, y: 300};
    this.velocity = {x: -10, y: 0};
    this.width = 200;
    this.height = 100;

    this.crookImage = new Image();
    this.crookImage.src = 'images/crookRight.png';
  }

  clear(ctx){
    ctx.clearRect(this.pos.x, this.pos.y, this.width, this.height);
    ctx.fillStyle = "rgb(0,218,246)";
    ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);
  }

  draw(ctx){
    ctx.drawImage(this.crookImage, this.pos.x, this.pos.y);
  }

  move(){
    console.log(this.pos.x);
    if(this.pos.x === 200){
      this.velocity.x = 10;
    }
    if(this.pos.x === 400){
      this.velocity.x = -10;
    }
    this.pos.x = this.pos.x + this.velocity.x;
  }

  collision(otherObject){
    if (this.pos.x < otherObject.pos.x + otherObject.width &&
       this.pos.x + this.width > otherObject.pos.x &&
       this.pos.y < otherObject.pos.y + otherObject.height &&
       this.height + this.pos.y > otherObject.pos.y) {
         return true;
    }
  }
}
