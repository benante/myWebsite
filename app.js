document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const intro = document.querySelector(".intro");
  const headerHeight = header.offsetHeight;
  console.log(header);
  console.log(intro);
  intro.style.height = "calc(100vh - " + headerHeight + "px)";
});
const sections = document.querySelectorAll("section");
