//humburger//
$('.button-nav').on('click', function () {
    $('.humburger').toggleClass('show-hide');

});

//accordeon//
$('ul li > h2').on('click', function () {
    $(this).toggleClass('active');
    $(this).next('div').slideToggle('slow');

});


//dial//
$("#form-button").on('click', function () {
    $('.modal').css('display', 'flex').animate({opacity: 1}, 500);
});

$('.close').on('click', function () {
    $('.modal').css('display', 'none');
});

//tab//

$('.nav-tab a').on('click', function (e) {
    e.preventDefault();
    $('.nav-tab .active').removeClass('active');
    $(this).addClass('active');
    var tab = $(this).attr('href');
    $('.tab').not(tab).css({'display': 'none'});
    $(tab).fadeIn(600);

});

//tooltip//


$('#phone').mouseenter(function () {
    $('.tool').css('display', 'block').animate({opacity: 1}, 700);

    $('#phone').mouseleave(function () {
        $('.tool').css('display', 'none');
    })
});


//scroll//














