
$(function(){
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();
        var sc = $(this).attr("href"),
            dn = $(sc).offset().top;
        $('html, body').animate({scrollTop: dn}, 600);
    });
});
$(function () {
    $(document).scroll(function () {
        var $nav = $(".headerBody");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});
$(document).ready(function(){
    var scroll_start = 0;
    var startchange = $("#MainInfo");
    var offset = startchange.offset();
    if (startchange.length){
        $(document).scroll(function() {
            scroll_start = $(this).scrollTop();
        });
    }
});
$(document).ready(function() {
    $('.headerBurger').click(function(event){
        $('.headerBurger,.headerMenu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
