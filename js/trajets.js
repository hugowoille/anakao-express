"use strict";

// function pictureAndAnimChange() {
//   let whichButton = document.getElementsByClassName("general__button");
//   console.log(whichButton);
//   if (whichButton.includes("general__button")) {
//     console.log("ya bouton 1 dans l'array");
//   } else {
//     console.log("pas le bouton1");
//   }
// }

// function testalert() {
//   const element = document.getElementById("myBtn");
//   element.addEventListener("click", function () {
//     alert("click test");
//   });
// }

// document.addEventListener("click", (checkWhichButton) => {
//   let whichButton = checkWhichButton.target;

//   if (whichButton.tagName == "BUTTON") {
//     console.log(checkWhichButton.target);
//   }
// });

//function detectButton() {
//   const mapAndButton = document.getElementById("mapwithbutton");
//   mapAndButton.addEventListener("click", maFunctionName);



  function maFunctionName(paramFunc) {
    let whichButton = paramFunc.target;

    if (whichButton.tagName == "BUTTON") {
      console.log(paramFunc.target);
    }
  }
//}
