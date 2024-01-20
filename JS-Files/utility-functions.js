/*
Just wanted to practice ES6 modules
*/
export const selectAll = (...selectors) => {
    return Object.fromEntries(selectors.map(currentSelector => {
        const targetElement = document.querySelector(currentSelector);

        return [currentSelector, targetElement];
    }));
};

export const toggleVisibility = (...elements) => {
    elements.forEach(element => element.classList.toggle("hidden"));
}

export const changeLayout = (targetElement, ...classes) => {
    const navbarWidth = window.innerWidth;
    classes.forEach((currentClass) => {
        targetElement.classList.toggle(currentClass, navbarWidth < 768);
    })
}
