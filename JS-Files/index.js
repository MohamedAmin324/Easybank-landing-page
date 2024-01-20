"use strict";

import { selectAll, toggleVisibility } from "./utility-functions.js";

const toggleButtons = selectAll(".close-menu-btn", ".open-menu-btn");
const navigationMenu = document.querySelector(".navigation-menu--modified-layout");
const modal = document.querySelector(".modal");

for (const buttonSelector in toggleButtons) {
        const button = toggleButtons[buttonSelector];

        button.addEventListener("click", ()=>{
            toggleVisibility(toggleButtons[".close-menu-btn"], toggleButtons[".open-menu-btn"], modal, navigationMenu);
            modal.classList.contains("hidden") ? document.body.style.overflow = "scroll": document.body.style.overflow = "hidden";
        })
}
