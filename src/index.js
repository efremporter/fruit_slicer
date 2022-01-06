import Game from "./scripts/game.js";
// import Fruit from "./scripts/fruit";
// import MovingObject from "./scripts/moving_object";

const document = window.document;
document.addEventListener("DOMContentLoaded", function(){
  const canvas = document.querySelector("#canvas");
  canvas.width = 1300;
  canvas.height = 525;
  const ctx = canvas.getContext('2d');
  let game = new Game(ctx);
  game.drawBackground();

  const openModalButtons = document.querySelectorAll('[data-modal-target]');
  const closeModalButtons = document.querySelectorAll('[data-close-button]');
  const overlay = document.getElementById('overlay');

  openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = document.querySelector(button.dataset.modalTarget);
      openModal(modal);
    })
  })

  overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
      closeModal(modal);
    })
  })

  closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal');
      closeModal(modal);
    })
  })

  function openModal(modal) {
    if (modal == null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
  }

  function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
  }
  
  const playButton = new Image();
  playButton.onload = drawImageActualSize;
  playButton.src = 'src/assets/play_button.png';

  const clickToPlay = new Image();
  clickToPlay.onload = drawImageActualSize2;
  clickToPlay.src = 'src/assets/click_to_play.png';

  function drawImageActualSize() {
    let that = this;
    setTimeout( () => {
      ctx.drawImage(that, 550, 150, 200, 200);
    }, 0)
  }

  function drawImageActualSize2() {
    let that = this;
    setTimeout( () => {
      ctx.drawImage(that, 462, -40, 400, 400);
    }, 0)
  }
  let started = false;
  canvas.addEventListener("click", () => {
    if (!started) {
      started = true;
      game.start();
    }
  })
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