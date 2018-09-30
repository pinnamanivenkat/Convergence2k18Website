(function ($) {
    $('.snapchat-code').hide();

    var imageLazyLoad = new LazyLoad({
        elements_selector: ".lazy"
    })

    $(window).on('load', function () {
        resizeTeamImages();
    });

    $(window).resize(function () {
        resizeTeamImages();
    })

    function resizeTeamImages() {
        var cw = $('.team-container').width();
        console.log(cw);
        if (cw <= 50) {
            location.reload();
        }
        $('.team-container').css({
            'height': cw + 'px'
        });
    }

    $('.present').on('click', function () {
        $('.event-theme').each(function () {
            $(this).removeClass("active");
        })
        $(this).addClass("active");
        var themeTitle = $(this).text().replace(/\s+/, "");
        themeTitle = '#' + themeTitle;
        $('.event-cards').each(function () {
            $(this).removeClass("active-cards");
        })
        $(themeTitle).addClass("active-cards");
    });

    $('.fa-snapchat-ghost').click(() => {
        $('.snapchat-code').show(400)
    });

    $('.snapchat-code').click(() => {
        $('.snapchat-code').hide(400);
    });

    $(".menu-link").click(function (e) {
        e.preventDefault();
        $(".menu").toggleClass("open");
        $(".menu-overlay").toggleClass("open");
    });

    $('a').not('[href="#"]').not('[href="#0"]').click(function (event) {
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('.menu').toggleClass('open');
                $('.menu-overlay').toggleClass('open');
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, "swing", function () {
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex', '-1');
                        $target.focus();
                    };
                });
            }
        }
    });

    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 100,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 2,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 10
                },
                "image": {
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 1,
                "random": false,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 10,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 0
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 100,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 5
                },
                "remove": {
                    "particles_nb": 4
                }
            }
        },
    });

})(jQuery);