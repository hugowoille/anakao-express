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

  console.log(varName);

  let whichButton = paramFunc.target;
  let imgToChange = document.getElementById("trajets__principal-img");
  let hToChange = document.getElementById("trajets__principal-h2");
  let pToChange = document.getElementById("trajets__principal-p");

  if (whichButton.tagName == "BUTTON") {
    // console.log(whichButton);

    if (whichButton.classList.contains("button1-position")) {
      // console.log("c'est le bouton 1");
      imgToChange.src = tulear.img;
      hToChange.innerHTML = tulear.h;
      pToChange.innerHTML = tulear.p;
    } else {
    }
    if (whichButton.classList.contains("button2-position")) {
      // console.log("c'est le bouton 2");
      imgToChange.src = stAugustin.img;
      hToChange.innerHTML = stAugustin.h;
      pToChange.innerHTML = stAugustin.p;
    } else {
    }
    if (whichButton.classList.contains("button3-position")) {
      // console.log("c'est le bouton 3");
      imgToChange.src = anakao.img;
      hToChange.innerHTML = anakao.h;
      pToChange.innerHTML = anakao.p;
    } else {
    }
  }
}

