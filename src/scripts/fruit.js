import MovingObject from "./moving_object";
// const MovingObject = require("./moving_object");

export default class Fruit extends MovingObject {

  constructor(x, dx, y, dy, sliced) {
    super(x, dx, y, dy, sliced);
    this.type = this.generateRandomFruit()
  }

  generateRandomFruit() {
    const fruits = ['apple', 'banana', 'coconut', 'kiwi', 'lemon', 'lime', 'mango', 'orange', 'peach', 'pineapple', 'pomegranate', 'watermelon'];
    // return fruits[11]
    return fruits[Math.floor(Math.random() * fruits.length)];
  }

  getSize() {
    if (this.type === "apple" && this.sliced) return [170, 170];
    if (this.type === "banana" && this.sliced) return [200, 200];
    if (this.type === "coconut" && this.sliced) return [210, 210];
    if (this.type === "coconut") return [160, 160];
    if (this.type === "kiwi" && this.sliced) return [170, 170];
    if (this.type === "lemon" && this.sliced) return [170, 170];
    if (this.type === "lime" && this.sliced) return [170, 170];
    if (this.type === "lime") return [160, 160];
    if (this.type === "mango") return [190, 190];
    if (this.type === "orange") return [170, 170];
    if (this.type === "peach" && this.sliced) return [200, 200];
    if (this.type === "peach") return [180, 180];
    if (this.type === "pineapple" && this.sliced) return [280, 280];
    if (this.type === "pineapple") return [240, 240];
    if (this.type === "pomegranate" && this.sliced) return [300, 300];
    if (this.type === "pomegranate") return [215, 215];
    if (this.type === "watermelon" && this.sliced) return [250, 250];
    if (this.type === "watermelon") return [175, 175];
    return [150, 150];
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
