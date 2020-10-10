// VARIABLES
const hamburger = document.querySelector("#hamburger");
const hiddenNav = document.querySelector("#hidden-nav");
const backToTop = document.querySelector("#back-to-top");
let nav = document.getElementById("navbar");
let logo = document.getElementById("logo");


// EVENT LISTENERS
window.addEventListener("scroll", scrollFunction);
window.addEventListener("scroll", backToTopDisplay);
hamburger.addEventListener("click", showHiddenNav);
backToTop.addEventListener("click", jumpToTop);

// FUNCTIONS

function scrollFunction() {
    nav.classList.toggle("sticky", window.scrollY > 0);
};

function showHiddenNav() {
    if (hiddenNav.style.display == "none") {
        hiddenNav.style.display = "block";
    } else {
        hiddenNav.style.display = "none";
    }
}

function backToTopDisplay() {
    if (window.scrollY > 0) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
}

function jumpToTop() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
}

if (window.innerWidth < 450) {
    window.scrollFunction = function () {
        return false;
    }
}