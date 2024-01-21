export const selectAll = (...selectors) => {
    return selectors.map(currentSelector => document.querySelector(currentSelector)
    );
};

export const toggleVisibility = (...elements) => {
    elements.forEach(element => element.classList.toggle("hidden"));
    elements.find((e) => e.classList.contains("modal")).classList.contains("hidden") ? document.body.style.overflow = "scroll" : document.body.style.overflow = "hidden";
}

export const changeLayout = (...elementClassToggleLists) => {
    elementClassToggleLists.forEach(([targetElement, ...classes]) => {
        const navbarWidth = window.innerWidth;
        classes.forEach((currentClass) => {
            targetElement.classList.toggle(currentClass, navbarWidth < 768);
        })
    })
}
