const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});


$('nav').find('a').click(function(){
    var $href = $(this).attr('href');
    var $anchor = $($href).offset();
    window.scrollTo({left: $anchor.left,top: $anchor.top, behavior: 'smooth'});
    $('.hamburger').click();
    return false;
   
});