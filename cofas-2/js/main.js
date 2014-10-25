$('a').click(function(event){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 1000);
    return false;
});

$('.scroll').click(function(){
    $("html, body").animate({ scrollTop: $(window).height()}, 1000);
    return false;
});