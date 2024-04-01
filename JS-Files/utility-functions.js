export const selectAll = (...selectors) => {
    return selectors.map(currentSelector => document.querySelector(currentSelector)
    );
};

export const toggleVisibility = (...elements) => {
    elements.forEach(element => element.classList.toggle("hidden"));
    const isModalHidden = !elements.find((e) => e.classList.contains("modal")).classList.contains("hidden")
    document.body.classList.toggle("stop-scrolling", isModalHidden);
}

// export function addScrollAnimation(animationClass, ...elements) {
//     const observer = new IntersectionObserver((entries) => {
//         console.log(entries);
//         entries.forEach(({ isIntersecting, target }) => {
//             if (isIntersecting) target.classList.add(animationClass);
//             else target.classList.remove(animationClass);
//         }
//         )
//     })

//     elements.forEach((e) => observer.observe(e));
// }
