const container = document.querySelector(".container");

const myName = document.querySelector(".highlight");
const colors = [
  "LightSkyBlue",
  "SteelBlue",
  "CornflowerBlue",
  "RoyalBlue",
  "DarkBlue",
  "black",
];

// Change color of my name during scrolling
window.addEventListener("scroll", function () {
  const scrollPos = window.scrollY;
  const colorIndex = Math.floor(scrollPos / 35) % colors.length;
  myName.style.color = colors[colorIndex];
});

// Add preview
const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  let popUp = card.querySelector(".preview");
  let preview_btn = card.querySelector(".preview-btn");
  preview_btn.addEventListener("click", () => {
    // open/close with btn
    if (popUp.classList.contains("popUp")) {
      popUp.classList.remove("popUp");
    } else {
      popUp.classList.add("popUp");
    }
  });
  // or close directly clicking on the preview
  popUp.addEventListener("click", function (event) {
    if (event.target === this) {
      this.classList.remove("popUp");
    }
  });
});

const image = document.querySelector(".portrait");
const images = [
  "static/images/meBlackWhite.jpeg",
  "static/images/mePixelated.jpeg",
];
let currentImageIndex = 0;

// Infinite loop: every 10 seconds starts the buzzing effect and switch to the next img in 0.5 sec.
setInterval(() => {
  shakeImage();
  setTimeout(() => {
    switchImage();
  }, 500);
}, 10000);

// Function to create a buzzing effect on a img.It adds the class for the animation and remove after 2 seconds
function shakeImage() {
  image.classList.add("buzz");
  setTimeout(() => {
    image.classList.remove("buzz");
  }, 2000);
}

// Function to switch images
function switchImage() {
  // Switch to different indexes through the remainder operator
  currentImageIndex = (currentImageIndex + 1) % images.length;
  image.src = images[currentImageIndex];
}
