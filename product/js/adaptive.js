const adaptiveButton = document.querySelector(`.about__button_adp`);
const hidenSelectOne = document.querySelector(`.about__disc_box`);
const hidenSelectTwo = document.querySelector(`.about__select`);
const adaptiveArrow = document.querySelector(`.about__button_images`);
adaptiveButton.addEventListener(`click`, function () {
	hidenSelectOne.classList.toggle(`show-hiden-select`);
	hidenSelectTwo.classList.toggle(`show-hiden-select`);
	adaptiveArrow.classList.toggle(`rotate-arrow-adp`);
})

//slider

const adpSliderBox = document.querySelector(`.images__cover`);
const adpSliderLine = document.querySelector(`.images__cover_line`);
const adpSliderItem = document.querySelectorAll(`.images__cover__item`);
const adpButtons = document.querySelectorAll(`.adp__buttons_slider`);
let adpWidth;
let adpCount = 0;
function initAdp() {
	adpWidth = adpSliderBox.offsetWidth;
	adpSliderItem.forEach(function (item) {
		item.style.width = adpWidth + 'px';
		item.style.height = `auto`
	})
	adpSliderLine.style.width = adpWidth * adpSliderItem.length + 'px';

}
initAdp();

adpButtons.forEach(function (item) {
	console.log(item.childNodes[1]);
	console.log(item.childNodes[3]);
	console.log(item.childNodes[5]);
	console.log(item.childNodes[7]);
	item.childNodes[1].addEventListener(`click`, function () {
		item.childNodes[1].classList.toggle(`new-style-button`);
		item.childNodes[3].classList.remove(`new-style-button`);
		item.childNodes[5].classList.remove(`new-style-button`);
		item.childNodes[7].classList.remove(`new-style-button`);
		adpCount = 0;
		adpTranform();
	})
	item.childNodes[3].addEventListener(`click`, function () {
		item.childNodes[3].classList.toggle(`new-style-button`);
		item.childNodes[1].classList.remove(`new-style-button`);
		item.childNodes[5].classList.remove(`new-style-button`);
		item.childNodes[7].classList.remove(`new-style-button`);
		adpCount = 1;
		adpTranform();
	})
	item.childNodes[5].addEventListener(`click`, function () {
		item.childNodes[5].classList.toggle(`new-style-button`);
		item.childNodes[3].classList.remove(`new-style-button`);
		item.childNodes[1].classList.remove(`new-style-button`);
		item.childNodes[7].classList.remove(`new-style-button`);
		adpCount = 2;
		adpTranform();
	})
	item.childNodes[7].addEventListener(`click`, function () {
		item.childNodes[7].classList.toggle(`new-style-button`);
		item.childNodes[3].classList.remove(`new-style-button`);
		item.childNodes[5].classList.remove(`new-style-button`);
		item.childNodes[1].classList.remove(`new-style-button`);
		adpCount = 3;
		adpTranform();
	})
})

function adpTranform() {
	adpSliderLine.style.transform = 'translate(-' + adpCount * adpWidth + 'px)';
}