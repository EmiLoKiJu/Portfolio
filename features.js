/* eslint-disable no-plusplus */
const button = document.querySelector(".menu");
const element = document.querySelector(".menuopen");
const links = document.querySelectorAll(".menuopen a");

button.addEventListener("click", () => {
  element.style.display = "block";
});

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", () => {
    element.style.display = "none";
  });
}