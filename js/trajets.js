"use strict";

let tulear = {
  img: "img/trajets/temp_isole-madagascar_d.jpg.image.1296.974.high.jpg",
  h: "Tulear",
  p: "TLorem ipsum, dolor sit amet consectetur adipisicing elit. Minima rerum voluptatum iste nisi veritatis vel debitis perspiciatis cum, vitae totam! hic suscipit repellat aperiam explicabo",
};

let stAugustin = {
  img: "img/trajets/temp_madagascar_d.jpg.image.1296.974.high.webp",
  h: "St Augustin",
  p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id possimus asperiores saepe recusandae hic suscipit repellat aperiam explicabo dolores minima. Sapiente, eos! Architecto facilis?",
};

let anakao = {
  img: "img/trajets/temp_1-nosy-be-madagascar-timbuktu-travel-2.avif",
  h: "Anakao",
  p: "Id possimus asperiores saepe recusandae hic suscipit repellat aperiam explicabo dolores minima. Sapiente, eos! Architecto facilis nulla harum officia? Eaque, pariatur",
};

// target what's infront of eventlistener
function funcPrincipalChange(paramFunc) {
  let whichButton = paramFunc.target;

  let imgToChange = document.getElementById("trajets__principal-img");
  let hToChange = document.getElementById("trajets__principal-h2");
  let pToChange = document.getElementById("trajets__principal-p");

  let button1 = whichButton.classList.contains("button1-position");
  let button2 = whichButton.classList.contains("button2-position");
  let button3 = whichButton.classList.contains("button3-position");

  if (whichButton.tagName == "BUTTON") {
    // console.log(whichButton);
    if (button1) {
      // console.log("c'est le bouton 1");
      imgToChange.src = tulear.img;
      hToChange.innerHTML = tulear.h;
      pToChange.innerHTML = tulear.p;

      whichButton.classList.add("button-on-click");
      removeAnim("button1-position", "button-on-click");
    }
    if (button2) {
      // console.log("c'est le bouton 2");
      imgToChange.src = stAugustin.img;
      hToChange.innerHTML = stAugustin.h;
      pToChange.innerHTML = stAugustin.p;

      whichButton.classList.add("button-on-click");
      removeAnim("button2-position", "button-on-click");
    }
    if (button3) {
      // console.log("c'est le bouton 3");
      imgToChange.src = anakao.img;
      hToChange.innerHTML = anakao.h;
      pToChange.innerHTML = anakao.p;

      whichButton.classList.add("button-on-click");
      removeAnim("button3-position", "button-on-click");
    }
  }
}

function removeAnim(buttonClassToSkip, classToRemove) {
  let buttonNodeList = document.querySelectorAll(".general__button");
  // console.log(buttonNodeList.length);
  for (let i = 0; i < buttonNodeList.length; i++) {
    if (buttonNodeList[i].classList.contains(buttonClassToSkip)) {
      continue;
    }
    if (buttonNodeList[i].classList.contains(classToRemove)) {
      buttonNodeList[i].classList.remove(classToRemove);
    }
    // console.log(buttonNodeList[i].classList);
  }
}

// whichButton.classList.add("button-on-click");

// if (whichButton.classList.contains("button-on-click")) {
//   whichButton.classList.remove("button-on-click");
// }

//
