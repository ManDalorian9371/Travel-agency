const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');
const menuItems = document.querySelector('.menuItems');
const bMusic = document.getElementById('backMusic');

toggle.addEventListener('click', activiate);

function activiate(){
	bMusic.play();
	menu.classList.toggle('active');
	menuItems.classList.toggle('active');
}

function sendEmail(){
	var link = 'mailto:mostafarafati888@gmail.com';
	window.location.href = link;
}
