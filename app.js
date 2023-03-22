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

setInterval(function () {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  console.log(currentImageIndex);
  image.style.opacity = 0;
  setTimeout(function () {
    image.src = images[currentImageIndex];
    image.style.opacity = 1;
  }, 1); // Change image after 1 second transition
}, 5000); // Change image every 10 seconds
