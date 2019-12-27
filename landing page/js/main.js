$(document).ready(function() {

    // scroll reveal
    window.sr = ScrollReveal();
    sr.reveal('.lazyloaded', {
        duration: 1000,
        delay: 500
    });


    // back to top
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 200) {
            $(".backtop").fadeIn(500);
        } else {
            $(".backtop").fadeOut(500);
        }
    });
    $(".backtop").click(function() {
        $("body,html").animate({
                scrollTop: 0
            },
            750
        );
    });


});