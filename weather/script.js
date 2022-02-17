function script(d, s, id) {
	var js,
		fjs = d.getElementsByTagName(s)[0];
	js = d.createElement(s);
	js.id = id;
	js.src = 'https://weatherwidget.io/js/widget.min.js';
	fjs.parentNode.insertBefore(js, fjs);
}

let touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';

window.addEventListener(touchEvent, mode);

function mode() {
	const currentTheme = document.getElementById('weather').getAttribute('data-theme');
	console.log(currentTheme);
	if (currentTheme == 'gray') {
		light();
	} else {
		dark();
	}
}

function light() {
	localStorage.setItem('data-theme', 'pure');
	document.documentElement.setAttribute('data-theme', 'pure');
	document.getElementById('weather').setAttribute('data-theme', 'pure');
	document.getElementById('weather').removeAttribute('data-basecolor');
	document.getElementById('weather').setAttribute('data-textcolor', '#37352f');
	document.getElementById('weather').removeAttribute('data-cloudfill');
	script(document, 'script', 'weatherwidget-io-js');
}

function dark() {
	localStorage.setItem('data-theme', 'gray');
	document.documentElement.setAttribute('data-theme', 'gray');
	document.getElementById('weather').setAttribute('data-theme', 'gray');
	document.getElementById('weather').setAttribute('data-basecolor', '#0f111a');
	document.getElementById('weather').removeAttribute('data-textcolor');
	document.getElementById('weather').setAttribute('data-cloudfill', '#0f111a');
	script(document, 'script', 'weatherwidget-io-js');
}

let currentTheme = localStorage.getItem('data-theme');

if (currentTheme == 'pure') {
	light();
} else {
	dark();
}
