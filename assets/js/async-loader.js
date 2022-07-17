/*
jQuery loader.
*/
(function() {

	if (document.querySelector(".jquery") !== null) {
		const script = document.createElement("script");

		script.src  = 'assets/js/jquery.min.js';
		script.type = 'text/javascript';

		script.addEventListener('load', () => {
			console.log(`jQuery ${$.fn.jquery} has been loaded successfully!`);
			jQueryScripts();
		});

		document.head.appendChild(script);
	}

})();

/*
Vanilla JS scripts.
*/
(function() {

	// Date and Time
	if (document.getElementById("Date") !== null) {
		loadJS("assets/js/datetime.js", true);
	}
	// Search
	if (document.querySelector(".textarea") !== null) {
		loadJS("assets/js/search.js", true);
	}
	// Stars
	if (document.querySelector(".stars") !== null) {
		loadJS("assets/js/stars.js", true);
	}
})();

/*
jQuery dependent scripts.
*/
function jQueryScripts() {

	// slick carousel
	if (document.querySelector(".slick-start") !== null) {
		loadJS("assets/js/slick.min.js", false);
		loadJS("assets/js/slick-config.js", true);
		loadCSS("assets/css/slick.css");
		loadCSS("assets/css/slick-theme.css");
	}
	// jQuery Ripples plugin
	if (document.querySelector(".ripples") !== null) {
		loadJS("assets/js/jquery.ripples.min.js", false);
		loadJS("assets/js/jquery.ripples-config.js", true);
	}
}

/*
JS async loader.
*/
function loadJS(FILE_URL, async = true, footer = true, defer) {

	let scriptEle = document.createElement("script"),
		FILE_NAME = FILE_URL.substr(FILE_URL.lastIndexOf('/') + 1);
	
	scriptEle.setAttribute("src", FILE_URL);
	scriptEle.setAttribute("type", "text/javascript");

	if ( defer == true ) {
		defer = "";
		scriptEle.setAttribute("defer", defer);
	}

	if ( async == true ) {
		async = "";
		scriptEle.setAttribute("async", async);
	}

	if (footer == true) {
		document.body.appendChild(scriptEle);
	} else {
		document.head.appendChild(scriptEle);
	}

	// Success event 
	scriptEle.addEventListener("load", () => {
		console.log("JS file loaded", FILE_NAME)
	});
	// Error event
	scriptEle.addEventListener("error", (ev) => {
		console.log("Error loading JS file", ev);
	});
}

/*
CSS loader.
*/
function loadCSS(FILE_URL, crossorigin = false) {

	let styleEle = document.createElement("link"),
		FILE_NAME = FILE_URL.substr(FILE_URL.lastIndexOf('/') + 1);

	styleEle.setAttribute("rel", "stylesheet");
	styleEle.setAttribute("type", "text/css");
	styleEle.setAttribute("href", FILE_URL);

	if ( crossorigin == true ) {
		crossorigin = "anonymous";
		styleEle.setAttribute("crossorigin", crossorigin);
	}

	document.head.appendChild(styleEle);

	// Success event 
	styleEle.addEventListener("load", () => {
		console.log("CSS file loaded", FILE_NAME)
	});
	// Error event
	styleEle.addEventListener("error", (ev) => {
		console.log("Error loading CSS file", ev);
	});
}