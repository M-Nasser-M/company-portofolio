$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            }
        }
    })
});


var action = false,
    clicked = false;
var Owl = {

    init: function() {
        Owl.carousel();
    },

    carousel: function() {
        var owl;
        $(document).ready(function() {

            owl = $('.owlExample').owlCarousel({
                items: 1,
                center: true,
                nav: false,
                dots: false,
                loop: true,
                margin: 10,
                startPosition: 2,
                dotsContainer: '.test',

            });


            $('#nxt-btn').on('click', function(e) {
                owl.trigger('next.owl.carousel');
            });

            $('#prev-btn').on('click', function(e) {
                owl.trigger('prev.owl.carousel');
            });




            $('.bookmarks').on('click', 'li', function(e) {
                owl.trigger('to.owl.carousel', [$(this).index(), 300]);
            });
        });
    }
};