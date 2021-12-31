export default class Fruit {

  constructor(randomFruit) {
    this.sliced = false;
    this.type = randomFruit;

  }

  throw() {

  }

  render() {
    //draw fruit (this) on the canvas
  }
}

// const image = new Image();
//   image.onload = drawImageActualSize;
//   image.src = 'src/assets/apple/apple.png';

//   function drawImageActualSize() {
//     // canvas.width = 1300;
//     // canvas.height = 525;
//     ctx.drawImage(this, 0, 0);
//   }

  // apple size is 150 x 150