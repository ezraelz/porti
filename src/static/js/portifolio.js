$(document).ready(function() {
    function checkScreenWidth() {
        if (window.innerWidth < 800) {
            $('.navbar').addClass('hide');
            $('#bars').removeClass('hide');
        } else {
            $('.navbar').removeClass('hide');
            $('#bars').addClass('hide');
        }
    }

    // Initial check when the document is ready
    checkScreenWidth();

    // Listen for window resize events
    $(window).resize(function() {
        checkScreenWidth();
    });
    
    $('#close').addClass('hide');

    $('#bars').click(function(){
        $('.navbar').toggleClass('hide');
        $('#close').removeClass('hide');
        $('#bars').addClass('hide');
    });
    $('#close').click(function(){
        $('.navbar').toggleClass('hide');
        $('#bars').removeClass('hide');
        $('#close').addClass('hide');
    });
});

