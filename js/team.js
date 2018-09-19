(function ($) {

  resizeTeamImages();
  $(window).resize(function () {
      resizeTeamImages();
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
    console.log('resize');
      $('.team-container').each(function (idx, element) {
          $(element).css('height', $(element).css('width'));
      })
  }

})(jQuery);
