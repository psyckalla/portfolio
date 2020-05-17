function clickBurger() {
    $('.hamburger').on('click', function(event) {
        $('nav',).toggleClass('hidden-burger');
    });
};

$(clickBurger());