"use strict";

import { selectAll, toggleVisibility, addScrollAnimation } from "./utility-functions.js";

const [closeBtn, openBtn, navigationMenu, modal] = selectAll(".close-menu-btn", ".open-menu-btn", "nav .navigation-menu", ".modal",);
const websiteLinks = document.querySelectorAll("a:not(.attribution a)");
const controls = [closeBtn, openBtn, modal];

controls.forEach((controlOption) => {
    controlOption.addEventListener("click", () => {
        toggleVisibility(closeBtn, openBtn, modal);
        navigationMenu.classList.toggle("translate-in");
    })
})

websiteLinks.forEach((link) => {
    link.addEventListener("click", (e) => e.preventDefault());
})

// addScrollAnimation("translate-in", document.querySelector(".service"))
