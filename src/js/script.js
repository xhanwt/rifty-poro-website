const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});

$(function () {
    $('.nav-links li a').bind('click touchstart', function () {
            $('.hamburger').click();
    });
});