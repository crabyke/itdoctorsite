// VARIABLES

// EVENT LISTENERS
window.addEventListener("scroll", scrollFunction);

// FUNCTIONS

function scrollFunction() {
    let nav = document.getElementById("navbar");
    let logo = document.getElementById("logo");
    nav.classList.toggle("sticky", window.scrollY > 0);
    logo.classList.toggle("transformer", window.scrollY > 0);
};