"use strict";

import { selectAll, toggleVisibility } from "./utility-functions.js";

const [closeBtn, openBtn, navigationMenu, modal] = selectAll(".close-menu-btn", ".open-menu-btn", "nav .navigation-menu", ".modal",);
const websiteLinks = document.querySelectorAll("a:not(.attribution a)");
const toggleButtons = [closeBtn, openBtn];

toggleButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        toggleVisibility(closeBtn, openBtn, modal);
        navigationMenu.classList.toggle("translate-in");
    })
})

websiteLinks.forEach((link) => {
    link.addEventListener("click", (e) => e.preventDefault());
})
