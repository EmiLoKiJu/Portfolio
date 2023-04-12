/* eslint-disable no-plusplus */
const button = document.querySelector('.menu');
const element = document.querySelector('.menuopen');
const links = document.querySelectorAll('.menuopen a, .menuopen img');
const mainpdetailbutton = document.querySelector('.seeproject1');
const p1p4pdetailbutton = document.querySelector('.p1 seeproject2', '.p4 seeproject2');
const p2p5pdetailbutton = document.querySelector('.p2 seeproject2', '.p5 seeproject2');
const p3p6pdetailbutton = document.querySelector('.p3 seeproject2', '.p6 seeproject2');
const projects = {
  'Multi-Post stories': {
    features: ['HTML', 'Bootstrap', 'Ruby on rails'],
    imgagesrc: "./img/projectdetailimg.png",
    projectdescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
    Suspendisse interdum a dolor sit amet egestas. Vivamus lacus dui, dignissim a odio \
    lobortis, ornare cursus mauris. Phasellus mollis mollis ornare. Nullam ornare, \
    libero non ornare sodales, leo neque dapibus ligula, eget maximus enim eros vitae eros. \
    Quisque leo erat, luctus at leo sit amet, consectetur elementum odio. Proin vulputate \
    erat et felis bibendum sollicitudin. Nulla pretium lobortis ligula eu feugiat. Sed nibh \
    ligula, porta ac lorem vitae, ultrices cursus feliz",
    seelive: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    seesrc: "https://github.com/EmiLoKiJu/Portfolio"
  },
  'Profesional Art Printing Data More': {
    features: ['HTML', 'Bootstrap', 'Ruby on rails'],
    imgagesrc: "./img/projectdetailimg.png",
    projectdescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
    Suspendisse interdum a dolor sit amet egestas. Vivamus lacus dui, dignissim a odio \
    lobortis, ornare cursus mauris. Phasellus mollis mollis ornare. Nullam ornare, \
    libero non ornare sodales, leo neque dapibus ligula, eget maximus enim eros vitae eros. \
    Quisque leo erat, luctus at leo sit amet, consectetur elementum odio. Proin vulputate \
    erat et felis bibendum sollicitudin. Nulla pretium lobortis ligula eu feugiat. Sed nibh \
    ligula, porta ac lorem vitae, ultrices cursus feliz",
    seelive: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    seesrc: "https://github.com/EmiLoKiJu/Portfolio"
  },
  'Data Dashboard Healthcare': {
    features: ['HTML', 'Bootstrap', 'Ruby on rails'],
    imgagesrc: "./img/projectdetailimg.png",
    projectdescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
    Suspendisse interdum a dolor sit amet egestas. Vivamus lacus dui, dignissim a odio \
    lobortis, ornare cursus mauris. Phasellus mollis mollis ornare. Nullam ornare, \
    libero non ornare sodales, leo neque dapibus ligula, eget maximus enim eros vitae eros. \
    Quisque leo erat, luctus at leo sit amet, consectetur elementum odio. Proin vulputate \
    erat et felis bibendum sollicitudin. Nulla pretium lobortis ligula eu feugiat. Sed nibh \
    ligula, porta ac lorem vitae, ultrices cursus feliz",
    seelive: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    seesrc: "https://github.com/EmiLoKiJu/Portfolio"
  },
  'Website Portfolio ': {
    features: ['HTML', 'Bootstrap', 'Ruby on rails'],
    imgagesrc: "./img/projectdetailimg.png",
    projectdescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
    Suspendisse interdum a dolor sit amet egestas. Vivamus lacus dui, dignissim a odio \
    lobortis, ornare cursus mauris. Phasellus mollis mollis ornare. Nullam ornare, \
    libero non ornare sodales, leo neque dapibus ligula, eget maximus enim eros vitae eros. \
    Quisque leo erat, luctus at leo sit amet, consectetur elementum odio. Proin vulputate \
    erat et felis bibendum sollicitudin. Nulla pretium lobortis ligula eu feugiat. Sed nibh \
    ligula, porta ac lorem vitae, ultrices cursus feliz",
    seelive: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    seesrc: "https://github.com/EmiLoKiJu/Portfolio"
  }
}

let div1 = document.createElement('div');
div1.classList.add('pdetailswin');
div1.innerHTML = '<p>'+Object.keys(projects)+'</p>';
//document.body.appendChild(div1);
//let div2 = document.querySelector('pdetailswin');
//div1.parentNode.removeChild(div1);

mainpdetailbutton.addEventListener('click', () => {
  document.body.appendChild(div1);
  console.log(div1);
});

//p1p4pdetailbutton 
//p2p5pdetailbutton 
//p3p6pdetailbutton
if (window.innerWidth >= 1024) {
  
}

button.addEventListener('click', () => {
  element.style.display = 'flex';
});

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', () => {
    element.style.display = 'none';
  });
}