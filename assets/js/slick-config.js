$(document).ready(function() {
	(function waitForSlick() {
	    if ('slick' in $.fn && typeof $.fn.slick === 'function') {
			$('.slick-start').slick({
				arrows: true,
				dots: true,
				infinite: true,
				speed: 150,
				slidesToShow: 1,
				slidesToScroll: 1,
				fade: true,
				cssEase: 'linear'
			});
	    }
	    else {
	        setTimeout(waitForSlick, 100);
	    }
	})()
});