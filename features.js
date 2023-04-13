/* eslint-disable no-plusplus */
const mainpdetailbutton = document.querySelector('.seeproject1');
const p1pdetailbutton = document.querySelector('.bp1');
const p2pdetailbutton = document.querySelector('.bp2');
const p3pdetailbutton = document.querySelector('.bp3');
const p4pdetailbutton = document.querySelector('.bp4');
const p5pdetailbutton = document.querySelector('.bp5');
const p6pdetailbutton = document.querySelector('.bp6');
const button = document.querySelector('.menu');
const element = document.querySelector('.menuopen');
const links = document.querySelectorAll('.menuopen a, .menuopen img');
const buttonarr = [mainpdetailbutton, p1pdetailbutton, p2pdetailbutton,
  p3pdetailbutton, p4pdetailbutton, p5pdetailbutton, p6pdetailbutton];
let closeprojectdetails;
const projects = {
  'Multi-Post stories': {
    features: ['HTML', 'CSS', 'Bootstrap', 'Ruby on rails'],
    imagesrc: 'src="./img/projectdetailimg.png"',
    projectdescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    + 'Suspendisse interdum a dolor sit amet egestas. Vivamus lacus dui, dignissim a odio'
    + 'lobortis, ornare cursus mauris. Phasellus mollis mollis ornare. Nullam ornare, '
    + 'libero non ornare sodales, leo neque dapibus ligula, eget maximus enim eros vitae eros. '
    + 'Quisque leo erat, luctus at leo sit amet, consectetur elementum odio. Proin vulputate '
    + 'erat et felis bibendum sollicitudin. Nulla pretium lobortis ligula eu feugiat. Sed nibh '
    + 'ligula, porta ac lorem vitae, ultrices cursus feliz',
    seelive: '<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">',
    seesrc: '<a href="https://github.com/EmiLoKiJu/Portfolio">',
  },
  'Profesional Art Printing Data More': {
    features: ['HTML', 'Bootstrap', 'Ruby on rails'],
    imagesrc: 'src="./img/projectdetailimg.png"',
    projectdescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    + 'Suspendisse interdum a dolor sit amet egestas. Vivamus lacus dui, dignissim a odio'
    + 'lobortis, ornare cursus mauris. Phasellus mollis mollis ornare. Nullam ornare, '
    + 'libero non ornare sodales, leo neque dapibus ligula, eget maximus enim eros vitae eros. '
    + 'Quisque leo erat, luctus at leo sit amet, consectetur elementum odio. Proin vulputate '
    + 'erat et felis bibendum sollicitudin. Nulla pretium lobortis ligula eu feugiat. Sed nibh '
    + 'ligula, porta ac lorem vitae, ultrices cursus feliz',
    seelive: '<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">',
    seesrc: '<a href="https://github.com/EmiLoKiJu/Portfolio">',
  },
  'Data Dashboard Healthcare': {
    features: ['HTML', 'CSS', 'Ruby on rails'],
    imagesrc: 'src="./img/projectdetailimg.png"',
    projectdescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    + 'Suspendisse interdum a dolor sit amet egestas. Vivamus lacus dui, dignissim a odio'
    + 'lobortis, ornare cursus mauris. Phasellus mollis mollis ornare. Nullam ornare, '
    + 'libero non ornare sodales, leo neque dapibus ligula, eget maximus enim eros vitae eros. '
    + 'Quisque leo erat, luctus at leo sit amet, consectetur elementum odio. Proin vulputate '
    + 'erat et felis bibendum sollicitudin. Nulla pretium lobortis ligula eu feugiat. Sed nibh '
    + 'ligula, porta ac lorem vitae, ultrices cursus feliz',
    seelive: '<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">',
    seesrc: '<a href="https://github.com/EmiLoKiJu/Portfolio">',
  },
  'Website Portfolio ': {
    features: ['HTML', 'Bootstrap', 'Ruby on rails'],
    imagesrc: 'src="./img/projectdetailimg.png"',
    projectdescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    + 'Suspendisse interdum a dolor sit amet egestas. Vivamus lacus dui, dignissim a odio'
    + 'lobortis, ornare cursus mauris. Phasellus mollis mollis ornare. Nullam ornare, '
    + 'libero non ornare sodales, leo neque dapibus ligula, eget maximus enim eros vitae eros. '
    + 'Quisque leo erat, luctus at leo sit amet, consectetur elementum odio. Proin vulputate '
    + 'erat et felis bibendum sollicitudin. Nulla pretium lobortis ligula eu feugiat. Sed nibh '
    + 'ligula, porta ac lorem vitae, ultrices cursus feliz',
    seelive: '<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">',
    seesrc: '<a href="https://github.com/EmiLoKiJu/Portfolio">',
  },
  'Profesional Art Printing Data More 2': {
    features: ['HTML', 'Bootstrap', 'Ruby on rails'],
    imagesrc: 'src="./img/projectdetailimg.png"',
    projectdescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    + 'Suspendisse interdum a dolor sit amet egestas. Vivamus lacus dui, dignissim a odio'
    + 'lobortis, ornare cursus mauris. Phasellus mollis mollis ornare. Nullam ornare, '
    + 'libero non ornare sodales, leo neque dapibus ligula, eget maximus enim eros vitae eros. '
    + 'Quisque leo erat, luctus at leo sit amet, consectetur elementum odio. Proin vulputate '
    + 'erat et felis bibendum sollicitudin. Nulla pretium lobortis ligula eu feugiat. Sed nibh '
    + 'ligula, porta ac lorem vitae, ultrices cursus feliz',
    seelive: '<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">',
    seesrc: '<a href="https://github.com/EmiLoKiJu/Portfolio">',
  },
  'Data Dashboard Healthcare 2': {
    features: ['HTML', 'CSS', 'Ruby on rails'],
    imagesrc: 'src="./img/projectdetailimg.png"',
    projectdescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    + 'Suspendisse interdum a dolor sit amet egestas. Vivamus lacus dui, dignissim a odio'
    + 'lobortis, ornare cursus mauris. Phasellus mollis mollis ornare. Nullam ornare, '
    + 'libero non ornare sodales, leo neque dapibus ligula, eget maximus enim eros vitae eros. '
    + 'Quisque leo erat, luctus at leo sit amet, consectetur elementum odio. Proin vulputate '
    + 'erat et felis bibendum sollicitudin. Nulla pretium lobortis ligula eu feugiat. Sed nibh '
    + 'ligula, porta ac lorem vitae, ultrices cursus feliz',
    seelive: '<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">',
    seesrc: '<a href="https://github.com/EmiLoKiJu/Portfolio">',
  },
  'Website Portfolio 2': {
    features: ['HTML', 'Bootstrap', 'Ruby on rails'],
    imagesrc: 'src="./img/projectdetailimg.png"',
    projectdescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    + 'Suspendisse interdum a dolor sit amet egestas. Vivamus lacus dui, dignissim a odio'
    + 'lobortis, ornare cursus mauris. Phasellus mollis mollis ornare. Nullam ornare, '
    + 'libero non ornare sodales, leo neque dapibus ligula, eget maximus enim eros vitae eros. '
    + 'Quisque leo erat, luctus at leo sit amet, consectetur elementum odio. Proin vulputate '
    + 'erat et felis bibendum sollicitudin. Nulla pretium lobortis ligula eu feugiat. Sed nibh '
    + 'ligula, porta ac lorem vitae, ultrices cursus feliz',
    seelive: '<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">',
    seesrc: '<a href="https://github.com/EmiLoKiJu/Portfolio">',
  },
};

const mainp = document.querySelector('body');

function createpwin(proj) {
  const div1 = document.createElement('div');
  div1.classList.add('pdetailswin');
  const feats = projects[Object.keys(projects)[proj]].features;
  const imgsrc = projects[Object.keys(projects)[proj]].imagesrc;
  const projdesc = projects[Object.keys(projects)[proj]].projectdescription;
  const livearef = projects[Object.keys(projects)[proj]].seelive;
  const sourcearef = projects[Object.keys(projects)[proj]].seesrc;
  let featstr = '';
  for (let i = 0; i < feats.length; i++) {
    featstr += `<li>${feats[i]}</li>`;
  }
  div1.innerHTML = ``
  + '<div class="notblur mdivp">'
    + '<div class="dflex spacebetween">'
      + `<h2>${Object.keys(projects)[proj]}</h2>`
      + '<div class="xbuttonp">'
        + '<img class="ximg" src="./img/Icon.png" alt="X">'
      + '</div>'
    + '</div>'
    + '<div class="imageanddesc">'
      + '<ul class="projecticons flexwrap">'
        + `${featstr}`
      + '</ul>'
    + '</div>'
    + '<div class="imageanddesc">'
      + `<img class="bigimage2" ${imgsrc} alt="Image Placeholder">`
      + '<div class="imageanddesc flexcol">'
        + `<p> ${projdesc} </p>`
        + '<div class="dflex spacebetween spacebetweenremove mbottom">'
          + `${livearef} <img src="img/seeLive.png"></a>`
          + `${sourcearef} <img src="img/seeSource.png"></a>`
        + '</div>'
      + '</div>'
    + '</div>'
  + '</div>';
  mainp.appendChild(div1);
  closeprojectdetails = document.querySelector('.xbuttonp .ximg');
  closeprojectdetails.addEventListener('click', () => {
    div1.parentNode.removeChild(div1);
  });
}

for (let i = 0; i < buttonarr.length; i++) {
  buttonarr[i].addEventListener('click', () => {
    createpwin(i);
  });
}

button.addEventListener('click', () => {
  element.style.display = 'flex';
});

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', () => {
    element.style.display = 'none';
  });
}