class MovingObject {
  constructor(){
    this.pos = {x: 0, y: 0};
    this.velocity = {x: 0, y: 0};
    this.width = 95;
    this.height = 68;
    this.radius = this.width/2;
    this.direction = "down";
  }

  draw(ctx){
    ctx.beginPath();
    ctx.moveTo(this.pos.x,this.pos.y);
    ctx.rect(this.pos.x, this.pos.y, this.width, this.height);
    ctx.fillStyle = "rgb(0,218,246)";
    ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);
  }

  clear(ctx){
    ctx.clearRect(this.pos.x, this.pos.y, this.width, this.height);
    ctx.fillStyle = "rgb(0,218,246)";
    ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);

    // ctx.clearRect(this.pos.x, this.pos.y, this.width, this.height);
  }

  move(){
      this.pos.x = this.pos.x + this.velocity.x;
      this.pos.y = this.pos.y + this.velocity.y;
  }

  resetPosition(){
    if(this.direction === "down"){
      this.pos.x = this.pos.x;
      this.pos.y = -100;
    } else {
      this.pos.x = this.pos.x;
      this.pos.y = 100;
    }
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

export default MovingObject;
