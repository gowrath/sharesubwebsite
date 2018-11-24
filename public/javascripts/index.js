$(function() {
	// Initialze carousel
	$('.carousel.carousel-slider').carousel({
		fullWidth: true,
		indicators: true
	});
	// Carousel autoplay
	var playCarousel = setInterval(function() {
		$('.carousel.carousel-slider').carousel("next");
	}, 5000);
	// Carousel control
	$('.carousel.carousel-slider').mouseenter(function() {
		clearInterval(playCarousel);
	})
	$('.carousel.carousel-slider').mouseleave(function() {
		playCarousel = setInterval(function() {
			$('.carousel.carousel-slider').carousel("next");
		}, 5000);
	})
});