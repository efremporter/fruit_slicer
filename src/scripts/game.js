// const Fruit = require("./fruit.js");
import Fruit from "./fruit.js";

export default class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.level = 1;
    this.fruits = [];
    this.score = 0;
    this.lives = 3;
    this.fruitDeath = 0;
    this.sliced = [];
  }

  start() {
    let fruit = this.getFruit();
    this.fruits.push(fruit);
    setTimeout(() => {
      this.play();
    }, 1000);
  }

  play() {
    let document = window.document;
    document.querySelector('#canvas').addEventListener("mousemove", (e) => {
      this.fruits.forEach( (fruit) => {
        if (e.clientX >= fruit.x - 20 && e.clientX <= fruit.x + 20 && !fruit.sliced) {// && (e.clientY >= fruit.y - 500 && e.clientY <= fruit.y +500)) {
          fruit.sliced = true;
          this.addPoints();
          this.fruitDeath += 1;
          this.sliced.push(fruit);
          if (this.score >= 15) {
            // debugger
          }
        }
      })
    })
    //trying to change the time of the setInterval to be dynamic based on the level
    this.animate();
    this.throwFruits();
  }

  throwFruits() {
    setInterval( () => {
      if (this.checkLives()) {
        if (this.level === 1) {
          let fruit = this.getFruit();
          this.fruits.push(fruit);
        } else {
          let counter = 0;
          while (counter < this.level) {
            let fruit = this.getFruit();
            this.fruits.push(fruit);
            counter++;
          }
        }
      }
    }, 3000)
  }

  getFruit() {
    let dy = -1 * Math.floor(Math.random() * 0.5)
    let fruit = new Fruit(this.getX(), this.getDx(), 525, -21 + dy);
    if (this.fruits.includes(fruit)) {
      fruit = this.getFruit();
    }
    return fruit;
  }

  getX() {
    return Math.floor(Math.random() * 1200)
  }

  getDx() {
    if (Math.floor(Math.random() * 1) === 1) return 6;
    return -6;
  }

  addPoints() {
    this.score += 5;
    this.checkLevel();
  }

  //How to code physics of gravity
  //Click dissapear first, then drag

  hitTop(object) {
    if (object.y <= -1000) return true;
    return false;
  }

  draw(object) {
    if (this.hitTop(object)) {
      object.dy = -object.dy;
    } else {
      object.dy += .4;
    }
    const image = new Image();
    image.onload = drawImageActualSize;
    image.src = object.picture();
    let that = this;
    function drawImageActualSize() {
      that.ctx.drawImage(this, object.x, object.y, object.getSize()[0], object.getSize()[1]);
    }
  }

  drawBackground() {
    const image = new Image();
    image.onload = drawImageActualSize;
    image.src = "/src/assets/background.png";
    let that = this;
    function drawImageActualSize() {
      that.ctx.drawImage(this, 0, 0, 1300, 525);
    }
  }

  drawFruits() {
    this.move();
    this.fruits.forEach( (fruit) => {
      if (this.onScreen(fruit)) {
        this.draw(fruit);
      } else {
        this.remove(fruit);
      }
    })
    // this.draw(this.fruits[0]);
  }

  checkIfSliced() {
    document.querySelector('#canvas').addEventListener("click", () => {

    })
  }

  remove(fruit) {
    let i = this.fruits.indexOf(fruit);
    this.fruits.splice(i, 1);
  }

  animate() {
    // let z = this.fruits[0].x;
    // this.ctx.clearRect(0, 0, 1300, 525);
    // this.ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    // this.fillRect(100, 0, 1300, 525);
    // this.ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    // this.ctx.fillRect(0, 0, 1300, 525);
    this.drawBackground();
    this.checkIfHitBottom();
    this.checkIfSliced();
    this.drawFruits();
    if (!this.gameOver()) requestAnimationFrame(this.animate.bind(this));
    // setTimeout(() => {this.ctx.clearRect(0, 0, 1300, 525)}, 100);
  }

  move() {
    this.fruits.forEach( (fruit) => {
      fruit.move();
    })
  }

  onScreen(object) {
    return object.y < 561;
  }

  checkLives() {
    return !this.lives <= 0;
  }

  checkLevel() {
    if (this.score === 25) {
      this.nextLevel();
    } else if (this.score === 70) {
        this.nextLevel();
    } else if (this.score % 200 === 0) {
      this.nextLevel();
    }
  }

  nextLevel() {
    this.level += 1;
    this.lives += 1;
    console.log("Leveled up. Now on level " + this.level);
  }

  gameOver() {
    // console.log(this.score)
    if (this.lives === 0) this.endScreen();
    return this.lives <= 0;
  }

  endScreen() {
    console.log("Game Over");
  }

  checkIfSliced() {
    this.fruits.forEach( (fruit) => {
      // console.log(fruit.sliced)
      return fruit.sliced
    })
  }

  checkIfHitBottom() {
    this.fruits.forEach( (fruit) => {
      if (fruit.y > 525 && !fruit.sliced) {
        this.lives -= 1;
      }
    })
  }
}

//drag event
//mouse drag instead of slice
//slice/sword animation on cut