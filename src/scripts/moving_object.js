export default class MovingObject {

  constructor(x, dx, y, dy) {
    this.x = x;
    this.dx = dx;
    this.y = y;
    this.dy = dy
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
    console.log("Moved");
  }

}

// module.exports = MovingObject;