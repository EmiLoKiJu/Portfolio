var button = document.querySelector(".menu");
var element = document.querySelector(".menuopen");
var links = document.querySelectorAll(".menuopen a");

button.addEventListener("click", function() {
  element.style.display = "block";
});

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
      element.style.display = "none";
    });
}