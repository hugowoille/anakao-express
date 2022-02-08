"use strict";

// CONTENT------------------------------------------------------------------
let imgTrajetsArray = [
  "img/trajets/temp_isole-madagascar_d.jpg.image.1296.974.high.jpg",
  "img/trajets/temp_madagascar_d.jpg.image.1296.974.high.webp",
  "img/trajets/temp_1-nosy-be-madagascar-timbuktu-travel-2.avif",
];

let hTrajetsArray = ["Tulear", "St Augustin", "Anakao"];

let pTrajetsArray = [
  "TLorem ipsum, dolor sit amet consectetur adipisicing elit. Minima rerum voluptatum iste nisi veritatis vel debitis perspiciatis cum, vitae totam! hic suscipit repellat aperiam explicabo",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id possimus asperiores saepe recusandae hic suscipit repellat aperiam explicabo dolores minima. Sapiente, eos! Architecto facilis?",
  "Id possimus asperiores saepe recusandae hic suscipit repellat aperiam explicabo dolores minima. Sapiente, eos! Architecto facilis nulla harum officia? Eaque, pariatur",
];

// FUNCTION : ANNEXE------------------------------------------------------------------
// add effect on clicked button and remove it from others if they have it
function addAndRemoveEffect(clickedButton, buttonClassToSkip, classToAddAndRemove) {
  clickedButton.classList.add(classToAddAndRemove);

  let buttonNodeList = document.querySelectorAll(".general__button");
  // All buttons
  for (let i = 0; i < buttonNodeList.length; i++) {
    if (buttonNodeList[i].classList.contains(buttonClassToSkip)) {
      continue;
    }
    if (buttonNodeList[i].classList.contains(classToAddAndRemove)) {
      buttonNodeList[i].classList.remove(classToAddAndRemove);
    }
  }
}
// ----------------------------------------------------

function fadeInAndOutChangeContent(fadeclass, eIndexNum, cIndexNum, classSelector) {
  let articleToFade = document.querySelector(classSelector);
  articleToFade.classList.add(fadeclass);

  let imgToChange = document.querySelectorAll(".js-trajets__img");
  let hToChange = document.querySelectorAll(".js-trajets__h2");
  let pToChange = document.querySelectorAll(".js-trajets__p");
  //list of all img, h2, p element to change content from,
  // select them with nodelist index

  setTimeout(function () {
    imgToChange[eIndexNum].src = imgTrajetsArray[cIndexNum];
    hToChange[eIndexNum].innerHTML = hTrajetsArray[cIndexNum];
    pToChange[eIndexNum].innerHTML = pTrajetsArray[cIndexNum];
    articleToFade.classList.remove(fadeclass);
  }, 150);
}

// FUNCTION : MAIN ------------------------------------------------------------------
let stop = -1;

function funcPrincipalChange(paramFunc) {
  let whichButton = paramFunc.target;

  let button0 = whichButton.classList.contains("button0-position");
  let button1 = whichButton.classList.contains("button1-position");
  let button2 = whichButton.classList.contains("button2-position");

  if (whichButton.tagName == "BUTTON") {
    if (button0 && stop != 0) {
      stop = 0;
      addAndRemoveEffect(whichButton, "button0-position", "button-on-click");
      fadeInAndOutChangeContent("trajet__principal-fade", 0, 0, ".js-principal-article");
    }
    if (button1 && stop != 1) {
      stop = 1;
      addAndRemoveEffect(whichButton, "button1-position", "button-on-click");
      fadeInAndOutChangeContent("trajet__principal-fade", 0, 1, ".js-principal-article");
    }
    if (button2 && stop != 2) {
      stop = 2;
      addAndRemoveEffect(whichButton, "button2-position", "button-on-click");
      fadeInAndOutChangeContent("trajet__principal-fade", 0, 2, ".js-principal-article");
    }
  }
}
