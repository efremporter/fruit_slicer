// const Fruit = require("./fruit.js");
import Fruit from "./fruit.js";

export default class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.level = 1;
    this.fruits = [];
    this.score = 0;
    this.lives = 3;
  }

  start() {
    let fruit = new Fruit(this.getX, 1, 150, 1)
    this.fruits.push(fruit);
    // this.drawFruit(fruit);
    setTimeout(() => {
      fruit.throw();
      this.play();
    }, 1000);
  }

  play() {
    //trying to change the time of the setInterval to be dynamic based on the level
    let time = this.getTimeout();
    this.fruits.forEach( (fruit) => {
      if (this.onScreen(fruit) && !fruit.sliced) {
        // this.drawFruit(fruit);
      }
    })
    this.animate();
    setInterval( () => {
      // clearInterval();
      if (!this.gameOver()) {
        this.checkLevel();
        let fruit = new Fruit(this.getX, 999, 150, 1);
        this.fruits.push(fruit);
        fruit.throw();
      }
    }, 2000)
  }

  getX() {
    return Math.floor(Math.random() * 1300)
  }

  //How to code physics of gravity
  //Click dissapear first, then drag

  draw(object) {
    console.log("Drawing Fruit!");
    let x = this.getX();
    let y = Math.floor(Math.random() * 900)
    const image = new Image();
    image.onload = drawImageActualSize;
    image.src = object.picture();
    let that = this;
    function drawImageActualSize() {
      that.ctx.drawImage(this, x, y, 150, 150);
    }
  }

  drawFruits() {
    this.fruits.forEach( (fruit) => {
      this.draw(fruit);
    })
    // this.draw(this.fruits[0]);
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));
    this.drawFruits();
    this.move();
    // setTimeout(() => {this.ctx.clearRect(0, 0, 1300, 525)}, 100);
  }

  move() {
    this.fruits.forEach( (fruit) => {
      fruit.move();
    })
  }

  getTimeout() {
    console.log(this.level);
    if (this.level === 2) return 5000;
    if (this.level === 1) {
      return 1000; 
    } else {
      return 5000 - (400 * this.level);
    }
  }

  onScreen(object) {

  }

  checkLevel() {
    if (this.fruits.length === 2) {
      this.nextLevel();
    }
  }

  nextLevel() {
    this.level += 1;
    console.log("Leveled up. Now on level " + this.level);
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


