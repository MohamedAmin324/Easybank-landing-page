/*
Just wanted to practice ES6 modules
*/
export const selectAll = (...selectors)=>{
    return Object.fromEntries(selectors.map(currentSelector =>{
        const targetElement = document.querySelector(currentSelector);

        return [currentSelector, targetElement];
    }));
};

export const toggleVisibility = (...elements)=>{
    elements.forEach(element => element.classList.toggle("hidden"));
}
