"use strict";

let parallaxContainer = document.getElementById("parallax-container");
let navbar = document.getElementById("header");

/* onscroll function */
parallaxContainer.addEventListener('scroll', function () {
    if (parallaxContainer.scrollTop >= 60) {
        navbar.classList.add("scroll-down");
    } else {
        navbar.classList.remove("scroll-down");
    }
});
