"use strict";

import { selectAll, toggleVisibility, changeLayout } from "./utility-functions.js";

const toggleButtons = selectAll(".close-menu-btn", ".open-menu-btn");
const navigationMenu = document.querySelector("nav .navigation-menu");
const modal = document.querySelector(".modal");
const requestButton = document.querySelector("nav .request-invite-btn");

for (const buttonSelector in toggleButtons) {
    const button = toggleButtons[buttonSelector];

    button.addEventListener("click", () => {
        toggleVisibility(toggleButtons[".close-menu-btn"], toggleButtons[".open-menu-btn"], modal, navigationMenu);
        modal.classList.contains("hidden") ? document.body.style.overflow = "scroll" : document.body.style.overflow = "hidden";
    })
}

window.onload = () => {
    changeLayout(navigationMenu, "hidden", "navigation-menu--modified-layout", "navigation-menu--white-bg");
    changeLayout(requestButton, "hidden");
}

window.addEventListener("resize", ()=>{
    changeLayout(navigationMenu, "hidden", "navigation-menu--modified-layout", "navigation-menu--white-bg");
    changeLayout(requestButton, "hidden");
})
