"use strict";

import { selectAll } from "./utility-functions.js";

const toggleButtons = selectAll(".close-menu-btn", ".open-menu-btn");

const navigationMenu = document.querySelector(".navigation-menu--modified-layout");

for (const buttonSelector in toggleButtons) {
        const button = toggleButtons[buttonSelector];
        debugger;

        button.addEventListener("click", ()=>{
            toggleButtons[".close-menu-btn"].classList.toggle("hidden");
            toggleButtons[".open-menu-btn"].classList.toggle("hidden");
            navigationMenu.classList.toggle("hidden");
        })
}
