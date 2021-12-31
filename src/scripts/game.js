const Fruit = require("./fruit.js");
// import Fruit from "./fruit.js";

export default class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.level = 1;
    this.fruits = [];
    this.score = 0;
    this.lives = 3;
  }

  start() {
    let fruit = this.generateRandomFruit();
    setTimeout(() => {
      fruit.throw();
      this.play();
    }, 2000);
  }

  generateRandomFruit() {
    const fruits = ["apple", "banana", "pineapple", "orange", "mango", "kiwi", "lemon", "watermelon", "pomegranite", "peach", "lime", "coconut"]
    //should I add bomb to fruits, or make a bomb class?
    const randomFruit = Math.floor(Math.random() * fruits.length);
    return new Fruit(randomFruit);
  }

  play() {
    // console.log("Playing!");
    let time = this.getTimeout();
    setInterval( () => {
      if (!this.gameOver()) {
        let fruit = this.generateRandomFruit();
        fruit.throw();
      }
    }, 1000)
  }

  getTimeout() {
    if (this.level === 1) {
      return 5000; 
    } else {
      return 5000 - (400 * this.level);
    }
  }

  nextLevel() {
  if (this.fruits.length > 3) { 
    this.level += 1;
    console.log("Leveled up. Now on level " + this.level);
  }
  }

  
  gameOver() {
    return !this.lives;
  }
}

