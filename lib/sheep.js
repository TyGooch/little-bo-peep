import MovingObject from './moving_object';


export class Sheep extends MovingObject {
  constructor(options ={}){
    super();
    this.initialPos = options.pos;
    this.pos = options.pos || {x: 50, y:0};
  }

  reset(){
    this.pos = this.initialPos;
  }

  resetVelocity(){
    if(this.velocity < 0){
      this.velocity += 5;
    } else {
      this.velocity -=5;
    }
  }
}

export class LeftSheep extends Sheep {
  constructor(options={}){
    super(options);
    this.velocity = {x: 0, y:5};
    this.leftSheep = new Image();
    this.leftSheep.src = 'images/sheep1.png';
    // this.leftSheep.onload = () => {
    //   alert('loaded!');
    // };
  }

  draw(ctx){
    ctx.drawImage(this.leftSheep, this.pos.x, this.pos.y);
  }

  increaseGravity(){
    this.velocity.y += 5;
  }
}

export class RightSheep extends Sheep {
  constructor(options={}){
    super(options);
    this.velocity = {x: 0, y:5};
    this.rightSheep = new Image();
    this.rightSheep.src = 'images/sheep2.png';
  }

  draw(ctx){
    ctx.drawImage(this.rightSheep, this.pos.x, this.pos.y);
  }

  increaseGravity(){
    this.velocity.y += 5;
  }
}

export default Sheep;
