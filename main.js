const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');
const menuItems = document.querySelector('.menuItems');

toggle.addEventListener('click', activiate);

function activiate(){
	menu.classList.toggle('active');
	menuItems.classList.toggle('active');
}
