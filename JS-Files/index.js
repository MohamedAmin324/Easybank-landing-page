"use strict";

import { selectAll, toggleVisibility, changeLayout } from "./utility-functions.js";

const [closeBtn, openBtn, navigationMenu, modal, requestButton, bgDesktop] = selectAll(".close-menu-btn", ".open-menu-btn", "nav .navigation-menu", ".modal", "nav .request-invite-btn", ".bg-desktop");

const toggleButtons = [closeBtn, openBtn];
toggleButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        toggleVisibility(closeBtn, openBtn, modal, navigationMenu);
    })
})

window.onload = () => {
    changeLayout([navigationMenu, "hidden", "navigation-menu--modified-layout", "navigation-menu--white-bg"], [requestButton, "hidden"], [bgDesktop, "hidden"]);
}

window.addEventListener("resize", () => {
    changeLayout([navigationMenu, "hidden", "navigation-menu--modified-layout", "navigation-menu--white-bg"], [requestButton, "hidden"], [bgDesktop, "hidden"]);
})
