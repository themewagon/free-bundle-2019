'use strict';

(function ($) {

	/**
   * [isMobile description]
   * @type {Object}
   */
	window.isMobile = {
		Android: function Android() {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function BlackBerry() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function iOS() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function Opera() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function Windows() {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function any() {
			return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
		}
	};
	window.isIE = /(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
	window.windowHeight = window.innerHeight;
	window.windowWidth = window.innerWidth;


	if ($('#fss-bg').length) {
		var initialise = function initialise() {
			scene.add(mesh);
			scene.add(light);
			container.appendChild(renderer.element);
			window.addEventListener('resize', resize);
		};

		var resize = function resize() {
			renderer.setSize(container.offsetWidth, container.offsetHeight);
		};

		var animate = function animate() {
			now = Date.now() - start;
			light.setPosition(300 * Math.sin(now * 0.001), 200 * Math.cos(now * 0.0005), 60);
			renderer.render(scene);
			requestAnimationFrame(animate);
		};

		var container = $('#fss-bg')[0];
		var renderer = new FSS.CanvasRenderer();
		var scene = new FSS.Scene();
		var light = new FSS.Light('#111122', '#FF0022');
		var geometry = new FSS.Plane(window.innerWidth, window.innerHeight, 6, 4);
		var material = new FSS.Material('#FFFFFF', '#FFFFFF');
		var mesh = new FSS.Mesh(geometry, material);
		var now,
			    start = Date.now();

		initialise();
		resize();
		animate();
	}

	var default_effect = {
		"particles": {
			"number": {
				"value": 80,
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
					"width": 0,
					"color": "#000000"
				},
				"polygon": {
					"nb_sides": 5
				}
				// "image": {
				// "src": "img/github.svg",
				// "width": 100,
				// "height": 100
				// }
			},
			"opacity": {
				"value": 0.5,
				"random": false,
				"anim": {
					"enable": false,
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
					"speed": 40,
					"size_min": 0.1,
					"sync": false
				}
			},
			"line_linked": {
				"enable": true,
				"distance": 150,
				"color": "#ffffff",
				"opacity": 0.4,
				"width": 1
			},
			"move": {
				"enable": true,
				"speed": 6,
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
					"mode": "repulse"
				},
				"onclick": {
					"enable": true,
					"mode": "push"
				},
				"resize": true
			},
			"modes": {
				"grab": {
					"distance": 400,
					"line_linked": {
						"opacity": 1
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
					"distance": 200,
					"duration": 0.4
				},
				"push": {
					"particles_nb": 4
				},
				"remove": {
					"particles_nb": 2
				}
			}
		},
		"retina_detect": true
	};
	var star_effect = {
		"particles": {
			"number": {
				"value": 250,
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
					"width": 0,
					"color": "#000000"
				},
				"polygon": {
					"nb_sides": 5
				},
				"image": {
					"src": "img/github.svg",
					"width": 100,
					"height": 100
				}
			},
			"opacity": {
				"value": 0.5,
				"random": false,
				"anim": {
					"enable": false,
					"speed": 1,
					"opacity_min": 0.1,
					"sync": false
				}
			},
			"size": {
				"value": 1,
				"random": true,
				"anim": {
					"enable": true,
					"speed": 7.192807192807193,
					"size_min": 0.1,
					"sync": false
				}
			},
			"line_linked": {
				"enable": false,
				"distance": 1,
				"color": "#ffffff",
				"opacity": 0.25,
				"width": 1
			},
			"move": {
				"enable": true,
				"speed": 1,
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
					"enable": false,
					"mode": "grab"
				},
				"onclick": {
					"enable": false,
					"mode": "push"
				},
				"resize": true
			},
			"modes": {
				"grab": {
					"distance": 150,
					"line_linked": {
						"opacity": .5
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
					"distance": 200,
					"duration": 0.4
				},
				"push": {
					"particles_nb": 4
				},
				"remove": {
					"particles_nb": 2
				}
			}
		},
		"retina_detect": true
	};

	var snow_effect = {
		"particles": {
			"number": {
				"value": 400,
				"density": {
					"enable": true,
					"value_area": 800
				}
			},
			"color": {
				"value": "#fff"
			},
			"shape": {
				"type": "circle",
				"stroke": {
					"width": 0,
					"color": "#000000"
				},
				"polygon": {
					"nb_sides": 5
				},
				"image": {
					"src": "img/github.svg",
					"width": 100,
					"height": 100
				}
			},
			"opacity": {
				"value": 0.5,
				"random": true,
				"anim": {
					"enable": false,
					"speed": 1,
					"opacity_min": 0.1,
					"sync": false
				}
			},
			"size": {
				"value": 10,
				"random": true,
				"anim": {
					"enable": false,
					"speed": 40,
					"size_min": 0.1,
					"sync": false
				}
			},
			"line_linked": {
				"enable": false,
				"distance": 500,
				"color": "#ffffff",
				"opacity": 0.4,
				"width": 2
			},
			"move": {
				"enable": true,
				"speed": 6,
				"direction": "bottom",
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
					"mode": "bubble"
				},
				"onclick": {
					"enable": true,
					"mode": "repulse"
				},
				"resize": true
			},
			"modes": {
				"grab": {
					"distance": 400,
					"line_linked": {
						"opacity": 0.5
					}
				},
				"bubble": {
					"distance": 400,
					"size": 4,
					"duration": 0.3,
					"opacity": 1,
					"speed": 3
				},
				"repulse": {
					"distance": 200,
					"duration": 0.4
				},
				"push": {
					"particles_nb": 4
				},
				"remove": {
					"particles_nb": 2
				}
			}
		},
		"retina_detect": true
	};

	var bubble_effect = {
		"particles": {
			"number": {
				"value": 6,
				"density": {
					"enable": true,
					"value_area": 800
				}
			},
			"color": {
				"value": "#1b1e34"
			},
			"shape": {
				"type": "polygon",
				"stroke": {
					"width": 0,
					"color": "#000"
				},
				"polygon": {
					"nb_sides": 12
				},
				"image": {
					"src": "img/github.svg",
					"width": 100,
					"height": 100
				}
			},
			"opacity": {
				"value": 0.3,
				"random": true,
				"anim": {
					"enable": false,
					"speed": 1,
					"opacity_min": 0.1,
					"sync": false
				}
			},
			"size": {
				"value": 160,
				"random": false,
				"anim": {
					"enable": true,
					"speed": 10,
					"size_min": 40,
					"sync": false
				}
			},
			"line_linked": {
				"enable": false,
				"distance": 200,
				"color": "#ffffff",
				"opacity": 1,
				"width": 2
			},
			"move": {
				"enable": true,
				"speed": 8,
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
					"enable": false,
					"mode": "grab"
				},
				"onclick": {
					"enable": false,
					"mode": "push"
				},
				"resize": true
			},
			"modes": {
				"grab": {
					"distance": 400,
					"line_linked": {
						"opacity": 1
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
					"distance": 200,
					"duration": 0.4
				},
				"push": {
					"particles_nb": 4
				},
				"remove": {
					"particles_nb": 2
				}
			}
		},
		"retina_detect": true
	};

	var nasa_effect = {
		"particles": {
			"number": {
				"value": 160,
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
					"width": 0,
					"color": "#000000"
				},
				"polygon": {
					"nb_sides": 5
				},
				"image": {
					"src": "img/github.svg",
					"width": 100,
					"height": 100
				}
			},
			"opacity": {
				"value": 1,
				"random": true,
				"anim": {
					"enable": true,
					"speed": 1,
					"opacity_min": 0,
					"sync": false
				}
			},
			"size": {
				"value": 3,
				"random": true,
				"anim": {
					"enable": false,
					"speed": 4,
					"size_min": 0.3,
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
				"speed": 1,
				"direction": "none",
				"random": true,
				"straight": false,
				"out_mode": "out",
				"bounce": false,
				"attract": {
					"enable": false,
					"rotateX": 600,
					"rotateY": 600
				}
			}
		},
		"interactivity": {
			"detect_on": "canvas",
			"events": {
				"onhover": {
					"enable": true,
					"mode": "bubble"
				},
				"onclick": {
					"enable": true,
					"mode": "repulse"
				},
				"resize": true
			},
			"modes": {
				"grab": {
					"distance": 400,
					"line_linked": {
						"opacity": 1
					}
				},
				"bubble": {
					"distance": 250,
					"size": 0,
					"duration": 2,
					"opacity": 0,
					"speed": 3
				},
				"repulse": {
					"distance": 400,
					"duration": 0.4
				},
				"push": {
					"particles_nb": 4
				},
				"remove": {
					"particles_nb": 2
				}
			}
		},
		"retina_detect": true
	};

	if ($('#particles-js').length) {
		var _particles_effect = default_effect,
			    _effect_data = $('#particles-js').data('effect');

		switch (_effect_data) {
			case 'star':
				_particles_effect = star_effect;
				break;
			case 'nasa':
				_particles_effect = nasa_effect;
				break;
			case 'bubble':
				_particles_effect = bubble_effect;
				break;
			case 'snow':
				_particles_effect = snow_effect;
				break;
			default:
				_particles_effect = default_effect;
		}

		particlesJS("particles-js", _particles_effect);
	}
	if ($('.quietflow').length) {
		var optData = eval('(' + $('.quietflow').attr('data-options') + ')'),
			    optDefault = {
			theme: "bouncingBalls",
			specificColors: ["rgba(255, 214, 108, .5)", "rgba(192, 55, 23, .5)", "rgba(255, 153, 53, .5)", "rgba(141, 16, 12, .5)", "rgba(53, 71, 45, .5)"],
			backgroundCol: "#333"
		},
			    options = $.extend(optDefault, optData);
		$("body").quietflow(options);
	}
	if ($('.ribbons-bg').length) {
		new Ribbons({
			colorSaturation: "60%",
			colorBrightness: "50%",
			colorAlpha: 0.5,
			colorCycleSpeed: 5,
			verticalPosition: "random",
			horizontalSpeed: 200,
			ribbonCount: 3,
			strokeSize: 0,
			parallaxAmount: -0.2,
			animateSections: true
		});
	}
	var smokyBG = $('#smoky-bg').waterpipe({
		gradientStart: '#51ff00',
		gradientEnd: '#001eff',
		smokeOpacity: 0.1,
		numCircles: 1,
		maxMaxRad: 'auto',
		minMaxRad: 'auto',
		minRadFactor: 0,
		iterations: 8,
		drawsPerFrame: 10,
		lineWidth: 2,
		speed: 10,
		bgColorInner: "#292929",
		bgColorOuter: "#111"
	});
	$('.vegas-container').each(function () {
		var self = $(this),
			    optData = eval('(' + self.attr('data-options') + ')'),
			    optDefault = {
			overlay: true,
			transition: 'fade',
			transitionDuration: 4000,
			delay: 10000,
			animation: 'random',
			animationDuration: 20000,
			slides: [{ src: 'https://picsum.photos/1000/800' }, { src: 'https://picsum.photos/1000/801' }, { src: 'https://picsum.photos/1000/802' }]
		},
			    options = $.extend(optDefault, optData);
		self.vegas(options);
	});
	$(".player").mb_YTPlayer({
		showControls: false,
		ratio: 'auto',
		loop: true,
		autoPlay: true,
		mute: true
	});
	/**
   * Countdown
   */
	$('.countdown__module').each(function () {
		var self = $(this),
			    _date = self.attr('data-date'),
			    _strf = self.html();
		self.countdown(_date, function (event) {
			self.html(event.strftime(_strf));
		}).removeClass("hide");
	});
	
})(jQuery);