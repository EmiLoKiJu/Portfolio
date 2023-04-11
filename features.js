let button = document.querySelector(".menu");
let element = document.querySelector(".menuopen");
let links = document.querySelectorAll(".menuopen a");

button.addEventListener("click", () => {
  element.style.display = "block";
});

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", () => {
    element.style.display = "none";
  });
}