function smoothScroll (element) {
    const href = element.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
    top: offsetTop,
    behavior: "smooth"
    });
}

function fadeIn (el) {
    let opacity = 0.01;

    el.style.display = "flex";

    let timer = setInterval(function() {
        el.style.opacity = opacity;
        opacity += opacity * 0.1;

        if (opacity >= 1) {
            clearInterval(timer);
        }        
    }, 10);
}

function fadeOut (el) {
    let opacity = 1;

    let timer = setInterval(function() {

        el.style.opacity = opacity;
        opacity -= opacity * 0.1;
        
        if (opacity <= 0.1) {
            clearInterval(timer);
            el.style.display = "none";
            el.style.opacity = 0;
        }
    }, 10);
}

export {smoothScroll, fadeIn, fadeOut};