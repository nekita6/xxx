var menu = document.querySelector('.menu')
var menu_icon = document.querySelector('.menu_icon')
var open_icon = document.querySelector('.open_icon')
var change;
var touch;
var	startingX;

function openMenu() {

	menu.style.left = '0';
	menu_icon.style.display = 'none'
	open_icon.style.display = 'block'

}

function closeMenu() {

	menu.style.left = '-100%';
	menu_icon.style.display = 'block'
	open_icon.style.display = 'none'

}

menu_icon.onclick = function() { openMenu() }
open_icon.onclick = function() { closeMenu() }

document.ontouchstart = function startTouches(e) {
	
	startingX = e.touches[0].clientX;

}

document.ontouchmove = function moveTouches(e) {
	
	touch = e.touches[0];
	change = startingX - touch.clientX;

	if (change < 0) { menu.style.left = 'calc(-100% - ' + change + 'px)' }

	else { menu.style.left = 'calc(-100% + ' + change + 'px)' }

}

document.ontouchend = function moveTouches(e) {
	
	if (change < -150) { openMenu() }

	else { closeMenu() }
	
}

window.onresize = function(event) {

	closeMenu()

	if (window.innerWidth > 960) {

		menu_icon.style.display = 'none'

	}

};