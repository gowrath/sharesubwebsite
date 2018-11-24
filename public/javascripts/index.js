$(function() {
	// Initialze carousel
	$('.carousel.carousel-slider').carousel({
		fullWidth: true,
		indicators: true
	});
	// Carousel autoplay
	setInterval(function() {
		$('.carousel.carousel-slider').carousel("next");
	}, 5000);
});