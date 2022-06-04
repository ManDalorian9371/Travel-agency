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
		const data = await respond.json();

		return data;
	} catch (error) {
		console.log(error);
	}
}
// async function getFetch();

if ('' == input.value) {
	popup.style.opacity = '0';
}
input.addEventListener('input', displayMatchs);

function displayMatchs(e){
	if ('' == input.value) {
		popup.style.opacity = '0';
	} else {
		popup.style.opacity = '1';
		let typing = e.target.value;
		getFetch().then((data) => {
			data.data.forEach((x) => {
				if (x.country.toLowerCase() == typing.toLowerCase()) {
					console.log(typing);
					while (popup.firstChild) popup.removeChild(popup.firstChild);

					const newSpan = (document.createElement('span').textContent = x.country);
					popup.append(newSpan);
					popup.addEventListener('click', () => {
						let link = 'https://www.tourradar.com/d/' + x.country.toLowerCase();
						window.location.href = link;
					});
				}
			});
		});
	}
}
