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

// FUNCTION ANNEXE------------------------------------------------------------------

function indexToChangeContent(eIndexNum, cIndexNum) {
  let imgToChange = document.querySelectorAll(".js-trajets__img");
  let hToChange = document.querySelectorAll(".js-trajets__h2");
  let pToChange = document.querySelectorAll(".js-trajets__p");

  imgToChange[eIndexNum].src = imgTrajetsArray[cIndexNum];
  hToChange[eIndexNum].innerHTML = hTrajetsArray[cIndexNum];
  pToChange[eIndexNum].innerHTML = pTrajetsArray[cIndexNum];
}

function removeAnim(buttonClassToSkip, classToRemove) {
  let buttonNodeList = document.querySelectorAll(".general__button");
// All buttons
  for (let i = 0; i < buttonNodeList.length; i++) {
    if (buttonNodeList[i].classList.contains(buttonClassToSkip)) {
      continue;
    }
    if (buttonNodeList[i].classList.contains(classToRemove)) {
      buttonNodeList[i].classList.remove(classToRemove);
    }
  }
}

// FUNCTION MAIN ------------------------------------------------------------------

function funcPrincipalChange(paramFunc) {
  let whichButton = paramFunc.target;

  let articleToFade = document.querySelector(
    ".trajets__principal-environement-article"
  ).style;

  let button1 = whichButton.classList.contains("button1-position");
  let button2 = whichButton.classList.contains("button2-position");
  let button3 = whichButton.classList.contains("button3-position");

  if (whichButton.tagName == "BUTTON") {
    if (button1) {
      indexToChangeContent(0, 0);
      whichButton.classList.add("button-on-click");
      removeAnim("button1-position", "button-on-click");
    }
    if (button2) {
      indexToChangeContent(0, 1);
      whichButton.classList.add("button-on-click");
      removeAnim("button2-position", "button-on-click");
    }
    if (button3) {
      indexToChangeContent(0, 2);
      whichButton.classList.add("button-on-click");
      removeAnim("button3-position", "button-on-click");
    }
  }
}

// articleToFade.opacity = "1";
//     console.log(articleToFade.opacity);
