import MovingObject from "./moving_object";
// const MovingObject = require("./moving_object");

export default class Fruit extends MovingObject {

  constructor(x, dx, y, dy) {
    super(x, dx, y, dy);
    this.sliced = false;
    this.type = this.generateRandomFruit()
  }

  generateRandomFruit() {
    const fruits = ['apple', 'banana', 'coconut', 'kiwi', 'lemon', 'lime', 'mango', 'orange', 'peach', 'pineapple', 'pomegranate', 'watermelon'];
    //should I add bomb to fruits, or make a bomb class?
    return fruits[Math.floor(Math.random() * fruits.length)];
  }

  throw() {
    console.log("Throwing fruit!");
  }


  picture() {
    if (this.type === 'apple') {if (this.sliced) { return 'src/assets/apple/sliced.png'} else { return 'src/assets/apple/apple.png';}} 
    else if (this.type === 'banana') {if (this.sliced) { return 'src/assets/banana/sliced.png'} else { return 'src/assets/banana/banana.png'}} 
    else if (this.type === 'coconut') {if (this.sliced) { return 'src/assets/coconut/sliced.png'} else { return 'src/assets/coconut/coconut.png'}}
    else if (this.type === 'kiwi') {if (this.sliced) { return 'src/assets/kiwi/sliced.png'} else { return 'src/assets/kiwi/kiwi.png'}}  
    else if (this.type === 'lemon') {if (this.sliced) { return 'src/assets/lemon/sliced.png'} else { return 'src/assets/lemon/lemon.png'}} 
    else if (this.type === 'lime') {if (this.sliced) { return 'src/assets/lime/sliced.png'} else { return 'src/assets/lime/lime.png'}} 
    else if (this.type === 'mango') {if (this.sliced) { return 'src/assets/mango/sliced.png'} else { return 'src/assets/mango/mango.png'}} 
    else if (this.type === 'orange') {if (this.sliced) { return 'src/assets/orange/sliced.png'} else { return 'src/assets/orange/orange.png'}} 
    else if (this.type === 'peach') {if (this.sliced) { return 'src/assets/peach/sliced.png'} else { return 'src/assets/peach/peach.png'}} 
    else if (this.type === 'pineapple') {if (this.sliced) { return 'src/assets/pineapple/sliced.png'} else { return 'src/assets/pineapple/pineapple.png'}} 
    else if (this.type === 'pomegranate') {if (this.sliced) { return 'src/assets/pomegranate/sliced.png'} else { return 'src/assets/pomegranate/pomegranate.png'}} 
    else if (this.type === 'watermelon') {if (this.sliced) { return 'src/assets/watermelon/sliced.png'} else { return 'src/assets/watermelon/watermelon.png'}} 
  }
}

// module.exports = Fruit;

// const image = new Image();
//   image.onload = drawImageActualSize;
//   image.src = 'src/assets/apple/apple.png';

//   function drawImageActualSize() {
//     // canvas.width = 1300;
//     // canvas.height = 525;
//     ctx.drawImage(this, 0, 0);
//   }

  // apple size is 150 x 150
