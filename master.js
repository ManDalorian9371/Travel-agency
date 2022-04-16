const banner = document.querySelector('.banner');
banner.addEventListener('mouseenter', showDeal);
banner.addEventListener('mouseleave', notShowDeal);

const deal = document.querySelector('#deal');

function showDeal(){
	deal.style.opacity = '1';
}
function notShowDeal(){
	deal.style.opacity = '0';
}
