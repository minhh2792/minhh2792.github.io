$(document).ready(function() {
	(function waitForRipples() {
	    if ('ripples' in $.fn && typeof $.fn.ripples === 'function') {
			$('#startpage').ripples({
				dropRadius: 50,
				peturbance: 0.01,
				resolution: 256,
			});
	    }
	    else {
	        setTimeout(waitForRipples, 100);
	    }
	})()
});