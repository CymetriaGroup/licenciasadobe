export default function init() {
    $(document).ready(function () {
        var classList = ['cloud', 'commerce'];
        // var classList = ['afterEffects', 'commerce', 'cloud', 'illustrator', 'indesign', 'photoshop'];
        var marvelHeroSlider = new Swiper('.marvel-container .swiper-container', {
            autoplay: true,
            loop: false,
            slidesPerView: 1,
            autoplay: {
                delay: 5000,
            },
            observer: true,
            observeParents: true,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            },
            on: {
                init: function () {
                    var index = this.activeIndex; // current slide index
                    $('.marvel-container')
                        .removeClass(classList)
                        .addClass(classList[index]);

                    $('.marvel-container .img-wrapper')
                        .removeClass('active')
                        .eq(index)
                        .addClass('active');
                }
            }
        }).on('slideChange', function () {
            var index = this.activeIndex; // current slide index
            $('.marvel-container')
                .removeClass(classList)
                .addClass(classList[index]);
            $('.marvel-container .img-wrapper')
                .removeClass('active')
                .eq(index)
                .addClass('active');
        });
        $(window).on('resize', function () {
            marvelHeroSlider.update();
        });
    });
}
init()