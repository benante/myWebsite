const myName = document.querySelector(".highlight");
const colors = [
  "azure",
  "aliceBlue",
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
