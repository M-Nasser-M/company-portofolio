$(document).ready(function() {

    $(".owl-one").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            }
        }
    })

    $('.owlExample').owlCarousel({
        items: 1,
        center: true,
        nav: false,
        dots: true,
        loop: true,
        margin: 10,
        startPosition: 2,
        dotsContainer: '.test',

    });


    $('#nxt-btn').on('click', function(e) {
        $('.owlExample').trigger('next.owl.carousel');
    });

    $('#prev-btn').on('click', function(e) {
        $('.owlExample').trigger('prev.owl.carousel');
    });




    $('.bookmarks').on('click', 'li', function(e) {
        $('.owlExample').trigger('to.owl.carousel', [$(this).index(), 300]);
    });
});