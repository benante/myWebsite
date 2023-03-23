const container = document.querySelector(".container");

const myName = document.querySelector(".highlight");
const colors = [
  "LightSkyBlue",
  "SteelBlue",
  "RoyalBlue",
  "CornflowerBlue",
  "DarkBlue",
  "black",
];

// Change color of my name during scrolling
window.addEventListener("scroll", function () {
  const scrollPos = window.scrollY;
  const colorIndex = Math.floor(scrollPos / 5) % colors.length;
  myName.style.color = colors[colorIndex];
});

const navbar = document.querySelector(".vertical-navbar");

// Add a scroll event listener to the window object
window.addEventListener("scroll", function () {
  // Check if the user has scrolled 100 pixels or more to the right
  if (window.scrollX <= 100) {
    // Show the vertical navbar
    navbar.style.display = "block";
  } else {
    // Hide the vertical navbar
    navbar.style.display = "none";
  }
});

// Add preview
const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  let popUp = card.querySelector(".preview");
  let preview_btn = card.querySelector(".preview-btn");
  preview_btn.addEventListener("click", () => {
    popUp.classList.add("popUp");
    card.classList.add("adjustCard");
  });
  popUp.addEventListener("click", function (event) {
    if (event.target === this) {
      this.classList.remove("popUp");
      card.classList.remove("adjustCard");
    }
  });
});

const image = document.querySelector(".portrait");
// console.log(image);
// image.src = "static/images/meBlackWhite.jpeg";
const images = [
  "static/images/meBlackWhite.jpeg",
  "static/images/mePixelated.jpeg",
];
let currentImageIndex = 0;

function shakeImage() {
  image.classList.add("buzz");
  setTimeout(() => {
    image.classList.remove("buzz");
  }, 2000);
}

setInterval(() => {
  shakeImage();
  switchImage();
}, 10000);

// Function to switch images
function switchImage() {
  // Switch to different indexes through the remainder operator
  currentImageIndex = (currentImageIndex + 1) % images.length;
  image.src = images[currentImageIndex];
}
