$('nav').find('a').click(function(){
    var $href = $(this).attr('href');
    var $anchor = $($href).offset();
    window.scrollTo({left: $anchor.left,top: $anchor.top, behavior: 'smooth'});
    console.log('runned')
    return false;
   
});