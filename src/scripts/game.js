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
    this.display();
    let fruit = this.getFruit();
    this.fruits.push(fruit);
    setTimeout(() => {
      this.play();
    }, 1000);
  }

  display() {
    this.displayLives();
    this.displayLevel();
    this.displayScore();
  }

  displayLives() {
    const document = window.document;
    let livesDiv = document.querySelector('.lives')
    livesDiv.innerText = 'Lives: ' + this.lives;
  }

  displayLevel() {
    const document = window.document;
    let levelDiv = document.querySelector('.level')
    levelDiv.innerText = 'Level: ' + this.level;
  }

  displayScore() {
    const document = window.document;
    let scoreDiv = document.querySelector('.score')
    scoreDiv.innerText = 'Score: ' + this.score;
  }

  play() {
    let document = window.document;
    document.querySelector('#canvas').addEventListener("mousemove", (e) => {
      this.fruits.forEach( (fruit) => {
        if (e.clientX >= fruit.x - 20 && e.clientX <= fruit.x + 20 && !fruit.sliced) {
          fruit.sliced = true;
          this.addPoints();
          this.fruitDeath += 1;
          this.sliced.push(fruit);
          if (this.score >= 15) {
          }
        }
      })
    })
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
    image.src = "src/assets/background.png";
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
    this.drawBackground();
    this.display();
    this.checkIfHitBottom();
    this.checkIfSliced();
    this.drawFruits();
    if (!this.gameOver()) requestAnimationFrame(this.animate.bind(this));
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
  }

  gameOver() {
    if (this.lives === 0) this.endScreen();
    return this.lives <= 0;
  }

  endScreen() {
    this.display();

    const openModalButtons2 = document.querySelectorAll('[data-modal-target2]');
    openModalButtons2.forEach(button => {
      button.click();
      this.addStats()
    })
  }

  addStats() {
    const body = document.querySelector('.modal2-body');

    const score = document.createElement('div');
    score.innerText = "Your final score was: " + this.score;
    body.appendChild(score);

    const level = document.createElement('div');
    level.innerText = "Your reached level: " + this.level;
    body.appendChild(level);
    this.addRestartButton(body);
  }

  addRestartButton(body) {
    const restartButton = document.createElement('button');
    restartButton.innerText = "Restart";
    restartButton.classList = "restart";
    body.appendChild(restartButton);
    restartButton.addEventListener('click', () => {
      this.clearBody();
      this.closeModals();
      this.newGame();
    })
  }

  clearBody() {
    const body = document.querySelector('.modal2-body');
    body.innerText = "";
  }

  closeModals() {
    const closeModalButtons2 = document.querySelectorAll('[data-close-button2]');
    closeModalButtons2.forEach(button => {
      button.click();
    })
  }

  newGame() {
    const canvas = document.querySelector("#canvas");
    canvas.width = 1300;
    canvas.height = 525;
    const ctx = canvas.getContext('2d');
    const game = new Game(ctx);
    game.drawBackground();
    game.start();
  }

  checkIfSliced() {
    this.fruits.forEach( (fruit) => {
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