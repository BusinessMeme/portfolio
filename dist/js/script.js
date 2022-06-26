import * as skillAnim from './modules/_skillsAnimation.js';
import * as pageUpAnim from './modules/_pageUpAnimation.js';
import * as myValid from './modules/_validation.js';

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeElem = document.querySelector('.menu__close');

// function ElSwitch (elem) {   
//     this.elem = elem;
//     this.isVisible = false;
// }
// let pageupSwitch = new ElSwitch(document.querySelector('.pageup'));

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

document.addEventListener('click', function (event) {
    if (event.target.tagName == 'A') {
        event.preventDefault();
        pageUpAnim.smoothScroll(event.target);
        menu.classList.remove('active');
    }
});

// pageupSwitch.elem.addEventListener('click', function (event) {
//     event.preventDefault();
//     pageUpAnim.smoothScroll(pageupSwitch.elem);
// });

document.addEventListener('scroll', function () {
    skillAnim.skillsLoading();

    if (window.screen.width >= 768) {
        if (window.scrollY > 950 && !pageupSwitch.isVisible) {
            pageupSwitch.isVisible = true;
            pageUpAnim.fadeIn(pageupSwitch.elem);
        } else if (window.scrollY < 950 && pageupSwitch.isVisible){
            pageupSwitch.isVisible = false;
            pageUpAnim.fadeOut(pageupSwitch.elem);
        }
    }
});


myValid.email.addEventListener('input', function () {
    myValid.emailInputValid();
});

myValid.name.addEventListener('input', function() {
    myValid.nameInputValid();
});

myValid.form.addEventListener('submit', function(event) {
    if(!myValid.mySubmitValid()) {
        event.preventDefault();
    }
});

myValid.privacy.addEventListener('click', function() {
    myValid.privacyClick();
});