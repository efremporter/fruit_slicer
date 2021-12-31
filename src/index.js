import Game from "./scripts/game";
// import Fruit from "./scripts/fruit";

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.querySelector("#canvas");
  canvas.width = 1300;
  canvas.height = 525;
  const ctx = canvas.getContext('2d');
  // let background = document.getElementById("background");
  // ctx.drawImage(background, 50, 5);

  const image = new Image();
  image.onload = drawImageActualSize;
  image.src = 'src/assets/apple/apple.png';
  let game = new Game(ctx);
  game.start();

  function drawImageActualSize() {
    // canvas.width = 1300;
    // canvas.height = 525;
    console.log(this.naturalWidth);
    console.log(this.naturalHeight);
    // ctx.drawImage(this, 0, 0, 150, 150);
  }
})

// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');

// const image = new Image(60, 45); // Using optional size for image
// image.onload = drawImageActualSize; // Draw when image has loaded
// image.src = 'src/assets/piggy.png';

// function drawImageActualSize() {
//   // Use the intrinsic size of image in CSS pixels for the canvas element
//   canvas.width = this.naturalWidth;
//   canvas.height = this.naturalHeight;

//   // Will draw the image as 300x227, ignoring the custom size of 60x45
//   // given in the constructor
//   ctx.drawImage(this, 0, 0);

//   // To use the custom size we'll have to specify the scale parameters
//   // using the element's width and height properties - lets draw one
//   // on top in the corner:
//   ctx.drawImage(this, 0, 0, this.width, this.height);
// }