// custom js
$(document).ready(function(){

	//testimonials
	$('.testimonials-slider').slick({
		centerMode: true,
		autoplay: true,
		infinite: true,
		speed: 1000,
		autoplaySpeed: 3000,
		arrows: false,
		dots: true,
		centerPadding: 0,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 768,
			settings: {				
				slidesToShow: 2
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1
			}
		}
		]
	});

// document ready end 
});


