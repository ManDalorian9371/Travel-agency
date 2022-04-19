// const banner = document.querySelector('.banner');
// banner.addEventListener('mouseenter', showDeal);
// banner.addEventListener('mouseleave', notShowDeal);

// const deal = document.querySelector('#deal');

// function showDeal(){
// 	deal.style.opacity = '1';
// }
// function notShowDeal(){
// 	deal.style.opacity = '0';
// }
//
let cAndc;
let popup = document.querySelector('.popup');
let input = document.querySelector('.form-control');
let cities = '';
let contries = [];
async function getFetch(){
	try {
		const respond = await fetch('https://countriesnow.space/api/v0.1/countries/');
		const dataa = await respond.json();
		cAndc = dataa.data;

		console.log(cAndc);
		return cAndc;
	} catch (error) {
		console.log(error);
	}
}
// async function getFetch();
console.log(getFetch());
getFetch().then((data) => console.log(data));

if ('' == input.value) {
	popup.style.opacity = '0';
}
input.addEventListener('input', displayMatchs);

function displayMatchs(){
	if ('' == input.value) {
		popup.style.opacity = '0';
	} else {
		popup.style.opacity = '1';
	}
}
