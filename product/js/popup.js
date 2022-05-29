//slider
const popupBox = document.querySelector(`.popup__box`);
const popupLine = document.querySelector(`.popup__line`);
const popupItem = document.querySelectorAll(`.popup__item`);
const popupPrev = document.querySelector(`.popup__prev`);
const popupNext = document.querySelector(`.popup__next`)
let popupWidth;
let popupCount = 0;

function popupInit() {
	popupWidth = popupBox.offsetWidth;
	console.log(popupWidth);
	popupItem.forEach(function (item) {
		item.style.width = popupWidth + 'px';
	})
	popupLine.style.width = popupWidth * popupItem.length + 'px';
}
popupInit();
popupPrev.addEventListener(`click`, function () {
	popupCount--;
	if (popupCount < 0) {
		popupCount = popupItem.length - 1;
	}
	rollPopup();
})

popupNext.addEventListener(`click`, function () {
	popupCount++;
	if (popupCount >= popupItem.length) {
		popupCount = 0;
	}
	rollPopup();
})
function rollPopup() {
	popupLine.style.transform = 'translate(-' + popupCount * popupWidth + 'px)';
}

//open popup

const imageCover = document.querySelector(`.images__cover`);
const popup = document.querySelector(`.popup`);
const imgItemOne = document.querySelector(`.add_one`);
const imgItemTwo = document.querySelector(`.add_two`);
const imgItemThree = document.querySelector(`.add_three`);
const imgItemFour = document.querySelector(`.add_four`);
imageCover.addEventListener(`click`, function () {
	rollPopup();
	body.classList.add(`lock-body`);
	popup.classList.add(`open-popup`);
})

imgItemOne.addEventListener(`click`, function () {
	popupCount = 1;
	rollPopup();
	body.classList.add(`lock-body`);
	popup.classList.add(`open-popup`);
})
imgItemTwo.addEventListener(`click`, function () {
	popupCount = 2;
	rollPopup();
	body.classList.add(`lock-body`);
	popup.classList.add(`open-popup`);
})
imgItemThree.addEventListener(`click`, function () {
	popupCount = 3;
	rollPopup();
	body.classList.add(`lock-body`);
	popup.classList.add(`open-popup`);
})
imgItemFour.addEventListener(`click`, function () {
	popupCount = 4;
	rollPopup();
	body.classList.add(`lock-body`);
	popup.classList.add(`open-popup`);
})

//close popup
const imgPopup = document.querySelectorAll(`.img_popup`);
popup.addEventListener(`click`, function (event) {
	if ((event.target.classList !== popupPrev.classList) && (event.target.classList !== popupNext.classList) && (event.target.tagName !== `IMG`)) {
		body.classList.remove(`lock-body`);
		popup.classList.remove(`open-popup`);
	}
})
const popupClose = document.querySelector(`.popup__close`);
popupClose.addEventListener(`click`, function () {
	body.classList.remove(`lock-body`);
	popup.classList.remove(`open-popup`);
})
