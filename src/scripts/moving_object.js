export default class MovingObject {

  constructor(x, dx, y, dy, sliced) {
    if ((x < 430 && dx < 0) || (x > 750 && dx > 0)) dx *= -1;
    this.x = x;
    this.dx = dx;
    this.y = y;
    this.dy = dy
    this.sliced = false; 
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
  }

  onScreen() {
    if (this.y > 0 && this.y < 450 && this.x > 0 && this.x < 1300) return true;
    return false;
  }

}

// module.exports = MovingObject;