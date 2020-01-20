function testimonialCarousel() {
    $('#testimonial-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            }
        }
    })
}

function clientsCarousel() {
    $('#client-carousel').owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            575: {
                items: 2
            },
            767: {
                items: 3
            },
            991:{
                items:4
            }
        }
    })
}

function UniqueCarousel() {
    $('#Unique-carousel').owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            575: {
                items: 2
            },
            767: {
                items: 3
            },
            991:{
                items:4
            }
        }
    })
}

function associatesCarousel() {
    $('#associates-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            575: {
                items: 2
            },
            767: {
                items: 3
            },
            991:{
                items:3
            }
        }
    })
}

function contactPopup() {
    $('.contact-btn').on('click', function() {
        $(this).hide();
        $('.contact-popup form').fadeIn();
        $('.contact-popup').css('right','0');
    })
    $('.fa-window-close').on('click', function() {
        $(this).parent('form').hide();
        $('.contact-btn').fadeIn();
        $('.contact-popup').css('right','-15px');
    });
}

function addActive() {
    var currentLink = $(".navbar-expand-lg .navbar-nav .nav-item");
    currentLink.on('click', function() {
        if(currentLink.hasClass('active')) {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
        }
    });
}

$(document).ready(function() {
    testimonialCarousel();
    clientsCarousel();
    UniqueCarousel();
    associatesCarousel();
    contactPopup();
    addActive();
});