(function ($) {
    $('.snapchat-code').hide();
    $('.convergence-text').hide();

    $("body").css('overflow', 'hidden');

    $('div').each(function () {
        var imageUrl = $(this).attr('convergence-src');
        if (typeof imageUrl != typeof undefined) {
            var image = new Image();
            image.src = imageUrl;
        }
    });

    $('.event-theme').on('click', function () {
        $('.event-theme').each(function () {
            $(this).removeClass("active");
        })
        $(this).addClass("active");
        var themeTitle = $(this).text().replace(/\s+/, "");
        themeTitle = '#' + themeTitle;
        $('.event-cards').each(function () {
            $(this).removeClass("active-cards");
        })
        //console.log(themeTitle);
        $(themeTitle).addClass("active-cards");
    });

    $('.fa-snapchat-ghost').click(() => {
        $('.snapchat-code').show("scale", {
            percent: 100,
            direction: 'both',
            origin: ['center', 'middle']
        }, 400)
    });

    $('.snapchat-code').click(() => {
        $('.snapchat-code').hide("scale", {
            percent: 0,
            direction: 'both',
            origin: ['middle', 'center']
        }, 400);
    });

    $(".menu-link").click(function (e) {
        e.preventDefault();
        $(".menu").toggleClass("open");
        $(".menu-overlay").toggleClass("open");
    });

    resizeTeamImages();
    $(window).resize(function () {
        resizeTeamImages();
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

    var animData = {
        wrapper: document.getElementById('preloader-animation'),
        animType: 'svg',
        loop: true,
        prerender: true,
        autoplay: true,
        path: 'animation.json'
    };
    var anim = bodymovin.loadAnimation(animData);
    anim.setSpeed(1);
    bodymovin.setSubframeRendering(false);

    $(window).on('load', function () {
        setTimeout(function () {
            anim.stop();

            setTimeout(function () {
                $('#preloader').fadeOut('slow', function () {
                    $('#preloader').remove();
                    $("body").css('overflow', 'auto');
                });
            }, 1700);

            $('#preloader-animation').hide();
            $('.convergence-text').show();

            // Wrap every letter in a span
            $('.ml1 .letters').each(function () {
                $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
            });

            anime.timeline({
                    loop: false
                })
                .add({
                    targets: '.ml1 .letter',
                    scale: [0.3, 1],
                    opacity: [0, 1],
                    translateZ: 0,
                    easing: "easeOutExpo",
                    duration: 600,
                    delay: function (el, i) {
                        return 70 * (i + 1)
                    }
                }).add({
                    targets: '.ml1 .line',
                    scaleX: [0, 1],
                    opacity: [0.5, 1],
                    easing: "easeOutExpo",
                    duration: 700,
                    offset: '-=875',
                    delay: function (el, i, l) {
                        return 80 * (l - i);
                    }
                });
        }, 4000);
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
        // "retina_detect": true
    });

    function resizeTeamImages() {
        $('.team-container').each(function (idx, element) {
            $(element).css('height', $(element).css('width'));
        })
    }

})(jQuery);
