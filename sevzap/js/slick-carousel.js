(function () {
    var moduleName = 'slickCarousel';

    [].slice.call(document.querySelectorAll('.js-slider')).forEach(function (wrapper) {
        if (wrapper.dataset[moduleName + 'Init'] === 'true') return;
        wrapper.dataset[moduleName + 'Init'] = 'true';

        var list         = wrapper.querySelector('.js-slider-list');
        var arrows       = wrapper.querySelector('.js-slider-arrows');
        var currentIndex = wrapper.querySelector('.js-slider-current-index');
        var dots         = wrapper.querySelector('.js-slider-dots');

        $(list).on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
            var i = (currentSlide ? currentSlide : 0) + 1;
            currentIndex.textContent = i < 10 ? '0' + i : i;
        });

        $(list).on('init', function () {
            [].slice.call(dots.querySelectorAll('button')).forEach(function (btn) {
                var number = btn.innerHTML;

                if (number < 10) {
                    btn.innerHTML = 0 + number;
                }
            });
        });

        $(list).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            lazyLoad: 'ondemand',
            dots: true,
            appendArrows: arrows,
            appendDots: dots,
            prevArrow: '<button type="button" class="arrow arrow--prev arrow--type-1"></button>',
            nextArrow: '<button type="button" class="arrow arrow--next arrow--type-1"></button>'
        })
    });
})();