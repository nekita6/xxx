var menu = document.querySelector('.menu')
var menu_icon = document.querySelector('.menu_icon')
var open_icon = document.querySelector('.open_icon')
var change;
var touch;
var	startingX;

menu_icon.onclick = function openMenu() {

	menu.style.left = '0';
	menu_icon.style.display = 'none'
	open_icon.style.display = 'block'

}

open_icon.onclick = function closeMenu() {

	menu.style.left = '-100%';
	menu_icon.style.display = 'block'
	open_icon.style.display = 'none'

}

document.ontouchstart = function startTouches(e) {
	
	startingX = e.touches[0].clientX;

}

document.ontouchmove = function moveTouches(e) {
	
	touch = e.touches[0];
	change = startingX - touch.clientX;
	change = -change;

	if (change > 0 && change <= window.screen.width) {
		menu.style.left = 'calc(-100% + ' + change*1.681 + 'px)';
	}
	if (change < 0) {
		menu.style.left = 'calc(-100% - ' + change/1.681 + 'px)';
	}

}

document.ontouchend = function moveTouches(e) {
	
	if (change > 150) {
		menu.style.left = '0';
		menu_icon.style.display = 'none'
		open_icon.style.display = 'block'
	}

	else {
		menu.style.left = '-100%';
		menu_icon.style.display = 'block'
		open_icon.style.display = 'none'
	}
	
}

window.onresize = function(event) {

	menu.style.left = '-100%';
	menu_icon.style.display = 'block'
	open_icon.style.display = 'none'

	if (window.innerWidth > 960) {

		menu_icon.style.display = 'none'

	}

};