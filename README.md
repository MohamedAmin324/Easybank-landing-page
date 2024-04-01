# Frontend Mentor - Easybank landing page

![Design preview for the Easybank landing page coding challenge](./design/desktop-preview.jpg)

This is a solution to the [Easybank landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Easybank landing page](#frontend-mentor---easybank-landing-page)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
  - [Author](#author)

## Overview

A static landing page with simple animations

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Links

- Solution URL: [Easybank landing page Solution](https://github.com/MohamedAmin324/Easybank-landing-page)
- Live Site URL: [Easybank landing page Live Preview](https://mohamedamin324.github.io/Easybank-landing-page/)

## My process

First, I analyzed both the desktop and mobile design to identify the general structure of the HTML code, which elements to use and which sections will make up the final UI. Some elements are specific for one of the two designs and therefore are hidden by default or will be hidden when a certain breakpoint is reached.
Using BEM naming convention for naming classes on sections and components. SCSS partials helped breakdown making styling every component easier than stacking them up in a huge CSS file.
Lastly, I used JS to toggle the navigation menu and prevent window scrolling on mobile view and to toggle the desktop background image and navbar elements on desktop view.

========= Update =========

I have recently went through the code again & I realized that I should not implement a CSS feature (media queries) using JS, I also added animations for the navigation menu & services & articles section on scroll (using the InterSectionObserver API)

### Built with

- Semantic HTML5 markup
- SCSS
- Flexbox
- CSS Grid
- BEM Methodology
- Mobile-first workflow
- JavaScript

### What I learned

I learned more about the SCSS folder structure. Also this was my first time using ES6 modules to break down my JavaScript code into more manageable files.

========= Update =========

I refactored the JS code & used the the InterSectionObserver API to implement simple animations on scroll

## Author

- Frontend Mentor - [@constantcode9909](https://www.frontendmentor.io/profile/constantcode9909)
- My Website - [MohamedAmineBasdouri](https://mohamed-amine-basdouri.netlify.app/)
