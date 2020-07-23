$(document).ready(function(){
    $('.mobile-menu').click(function(event) {
        $('.menu-btn, .main-menu').toggleClass('menu-active')
        $('.btnB').toggleClass('btnB-active')
        $('.menu').toggleClass('active')
        $('.shadow-fix').toggleClass('shadow-active')

        $('.second').hide()
    });
});
