import Fruit from "./fruit.js"

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
      play();
    }, 5000);
  }

  generateRandomFruit() {
    const fruits = ["apple", "banana", "pineapple", "orange", "mango", "kiwi", "lemon", "watermelon", "pomegranite", "peach", "lime", "coconut"]
    //should I add bomb to fruits, or make a bomb class?
    const randomFruit = Math.floor(Math.random() * fruits.length);
    return new Fruit(randomFruit);
  }

  play() {
    while (!this.gameOver()) {
      let time = this.getTimeout();
      let fruit = this.generateRandomFruit();
      setTimeout( () => {
        fruit.throw();
      }, time)
    }
  }

  getTimeout() {
    if (this.level === 1) {
      return 5000; 
    } else {
      5000 - (50 * this.level);
    }
    console.log(getTimeout());
  }

  
  gameOver() {
    return !this.lives;
  }
}

console.log("hi");