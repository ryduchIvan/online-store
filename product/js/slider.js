const sliderBox = document.querySelector(`.stock__box`);
const sliderLine = document.querySelector(`.stock__line`);
const sliderItems = document.querySelectorAll(`.slider__items`);
const sliderItem = document.querySelectorAll(`.stock__item`);
const buttonPrev = document.querySelector('.slider__prev');
const buttonNext = document.querySelector(`.slider__next`);
const slideOne = document.querySelector(`.slide_one`);
const slideTwo = document.querySelector(`.slide_two`);
const slideThree = document.querySelector(`.slide_three`);
const slide = document.querySelector(`.slide`);
let count = 0;
let width;

function init() {
	width = sliderBox.offsetWidth;
	sliderItems.forEach(item => {
		item.style.width = width + `px`;
		item.style.height = `auto`;
	})
	sliderLine.style.width = width * sliderItems.length + 'px';
	rollSlider()
}
init();
window.addEventListener(`resize`, init);
slideOne.addEventListener(`click`, function () {
	slideOne.classList.add(`new-style`);
	slideTwo.classList.remove(`new-style`);
	slideThree.classList.remove(`new-style`);
	count = 0;
	rollSlider()
})
slideTwo.addEventListener(`click`, function () {
	slideTwo.classList.add(`new-style`);
	slideOne.classList.remove(`new-style`);
	slideThree.classList.remove(`new-style`);
	count = 1;
	rollSlider()
})
slideThree.addEventListener(`click`, function () {
	slideThree.classList.add(`new-style`);
	slideOne.classList.remove(`new-style`);
	slideTwo.classList.remove(`new-style`);
	count = 2;
	rollSlider()
})

function rollSlider() {
	sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}

//slider-two

const hiteBox = document.querySelector(`.hite__box`);
const hiteLine = document.querySelector(`.hite__line`);
const hiteItems = document.querySelectorAll(`.hite__items`);
const hiteItem = document.querySelectorAll(`.hite__item`);
const hiteSlide = document.querySelectorAll(`.hite`);
const hiteSlideOne = document.querySelector(`.hite__one`);
const hiteSlideTwo = document.querySelector(`.hite__two`);
const hiteSlideThree = document.querySelector(`.hite__three`);

let widthHite;
let hiteScroll = 0;
function initTwo() {
	widthHite = hiteBox.offsetWidth;
	hiteItems.forEach(item => {
		item.style.width = widthHite + `px`;
		item.style.height = 'auto';
	})
	hiteLine.style.width = widthHite * hiteItems.length + 'px';
}
initTwo();
window.addEventListener(`resize`, initTwo);

hiteSlideOne.addEventListener(`click`, function () {
	hiteSlideOne.classList.add(`hite-new-style`);
	hiteSlideTwo.classList.remove(`hite-new-style`);
	hiteSlideThree.classList.remove(`hite-new-style`)

	hiteScroll = 0;
	hiteTransform();
})
hiteSlideTwo.addEventListener(`click`, function () {
	hiteSlideOne.classList.remove(`hite-new-style`);
	hiteSlideTwo.classList.add(`hite-new-style`);
	hiteSlideThree.classList.remove(`hite-new-style`)

	hiteScroll = 1;
	hiteTransform();
})
hiteSlideThree.addEventListener(`click`, function () {
	hiteSlideOne.classList.remove(`hite-new-style`);
	hiteSlideTwo.classList.remove(`hite-new-style`);
	hiteSlideThree.classList.add(`hite-new-style`)

	hiteScroll = 2;
	hiteTransform();
})

function hiteTransform() {
	hiteLine.style.transform = 'translate(-' + hiteScroll * widthHite + 'px)';
}