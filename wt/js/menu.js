document.querySelector('.menu_icon').addEventListener('click', openMenu)
var menu = document.querySelector('.menu')
var menu_icon = document.querySelector('.menu_icon')
var open_icon = document.querySelector('.open_icon')

function openMenu() {

	menu.className += ' open';
	menu_icon.style.display = 'none'
	open_icon.style.display = 'block'

}

document.querySelector('.open_icon').addEventListener('click', closeMenu)

function closeMenu() {

	menu.className = 'menu';
	menu_icon.style.display = 'block'
	open_icon.style.display = 'none'

}

