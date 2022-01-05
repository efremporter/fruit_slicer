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
      console.log(e.clientX);
      this.fruits.forEach( (fruit) => {
        if (e.clientX >= fruit.x - 20 && e.clientX <= fruit.x + 20 && !fruit.sliced) {// && (e.clientY >= fruit.y - 500 && e.clientY <= fruit.y + 500)) {
          fruit.sliced = true;
          this.addPoints();
          this.fruitDeath += 1;
          this.sliced.push(fruit);
          if (this.score >= 15) {
            console.log(this.fruitDeath);
            console.log(this.sliced);
            // debugger
          }
        }
      })
    })
    //trying to change the time of the setInterval to be dynamic based on the level
    let time = this.getTimeout();
    this.animate();
    setInterval( () => {
      // clearInterval();
      if (!this.gameOver()) {
        let fruit = this.getFruit();
        while (this.fruits.includes(fruit)) fruit = this.getFruit();
        this.fruits.push(fruit);
      }
    }, 3000)
  }

  getFruit() {
    let dy = -1 * Math.floor(Math.random() * 2)
    console.log(dy);
    return new Fruit(this.getX(), this.getDx(), 525, -33 + dy);
  }

  getX() {
    return Math.floor(Math.random() * 1200)
  }

  getDx() {
    if (Math.floor(Math.random() * 1) === 1) return 7;
    return -7;
  }

  addPoints() {
    this.score += 5;
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
      object.dy += 1;
    }
      const image = new Image();
      image.onload = drawImageActualSize;
      image.src = object.picture();
      let that = this;
      function drawImageActualSize() {
        that.ctx.drawImage(this, object.x, object.y, object.getSize()[0], object.getSize()[1]);
        // debugger
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
      console.log("clicked");
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
    this.drawFruits();
    this.move();
    this.checkLevel();
    this.checkIfSliced();
    requestAnimationFrame(this.animate.bind(this));
    // setTimeout(() => {this.ctx.clearRect(0, 0, 1300, 525)}, 100);
  }

  move() {
    this.fruits.forEach( (fruit) => {
      fruit.move();
    })
  }

  getTimeout() {
    if (this.level === 2) return 5000;
    if (this.level === 1) {
      return 1000; 
    } else {
      return 5000 - (400 * this.level);
    }
  }

  onScreen(object) {
    return object.y <= 525;
  }

  checkLevel() {
    if (this.fruits.length === 2) {
      this.nextLevel();
    }
  }

  nextLevel() {
    this.level += 1;
    // console.log("Leveled up. Now on level " + this.level);
  }

  gameOver() {
    return !this.lives;
  }

  checkIfSliced() {
    this.fruits.forEach( (fruit) => {
      // console.log(fruit.sliced)
      return fruit.sliced
    })
  }
}

//drag event
//mouse drag instead of slice
//slice/sword animation on cut