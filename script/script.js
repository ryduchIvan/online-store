//SLIDER ONE

const sliderBox = document.querySelector(`.stock__box`);
const sliderLine = document.querySelector(`.stock__line`);
const sliderItems = document.querySelectorAll(`.slider__items`);
const sliderItem = document.querySelectorAll(`.stock__item`);
const buttonPrev = document.querySelector('.slider__prev');
const buttonNext = document.querySelector(`.slider__next`);
const slideOne = document.querySelector(`.slide_one`);
const slideTwo = document.querySelector(`.slide_two`);
const slideThree = document.querySelector(`.slide_three`);
const slideFhor = document.querySelector(`.slide_fhor`);
const slideFight = document.querySelector(`.slide_fight`);
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
window.addEventListener(`resize`, init, forestSlide);
slideOne.addEventListener(`click`, function () {
	slideOne.classList.add(`new-style`);
	slideTwo.classList.remove(`new-style`);
	slideThree.classList.remove(`new-style`);
	slideFhor.classList.remove(`new-style`);
	slideFight.classList.remove(`new-style`);
	count = 0;
	rollSlider()
})
slideTwo.addEventListener(`click`, function () {
	slideTwo.classList.add(`new-style`);
	slideOne.classList.remove(`new-style`);
	slideThree.classList.remove(`new-style`);
	slideFhor.classList.remove(`new-style`);
	slideFight.classList.remove(`new-style`);
	count = 1;
	rollSlider()
})
slideThree.addEventListener(`click`, function () {
	slideThree.classList.add(`new-style`);
	slideOne.classList.remove(`new-style`);
	slideTwo.classList.remove(`new-style`);
	slideFhor.classList.remove(`new-style`);
	slideFight.classList.remove(`new-style`);
	count = 2;
	rollSlider()
})
slideFhor.addEventListener(`click`, function () {
	slideFhor.classList.add(`new-style`);
	slideOne.classList.remove(`new-style`);
	slideTwo.classList.remove(`new-style`);
	slideThree.classList.remove(`new-style`);
	slideFight.classList.remove(`new-style`);
	count = 3;
	rollSlider()
})
slideFight.addEventListener(`click`, function () {
	slideFight.classList.add(`new-style`);
	slideOne.classList.remove(`new-style`);
	slideTwo.classList.remove(`new-style`);
	slideFhor.classList.remove(`new-style`);
	slideThree.classList.remove(`new-style`);
	count = 4;
	rollSlider()
})
function rollSlider() {
	sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}
//SLIDER ONE-END

//SLIDER TWO
//SLIDER TWO-END

//SLIDER THIRD
const hiteBox = document.querySelector(`.hite__box`);
const hiteLine = document.querySelector(`.hite__line`);
const hiteItems = document.querySelectorAll(`.hite__items`);
const hiteItem = document.querySelectorAll(`.hite__item`);
const hiteSlide = document.querySelectorAll(`.hite`);
const hiteSlideOne = document.querySelector(`.hite__one`);
const hiteSlideTwo = document.querySelector(`.hite__two`);
const hiteSlideThree = document.querySelector(`.hite__three`);
const hiteSlideFour = document.querySelector(`.hite__four`);
const hiteSlideFight = document.querySelector(`.hite__fight`);
let widthHite;
let hiteScroll = 0;
function initTwo() {
	widthHite = hiteBox.offsetWidth;
	console.log(widthHite);
	hiteItems.forEach(item => {
		item.style.width = widthHite + `px`;
		item.style.height = 'auto';
	})
	hiteLine.style.width = widthHite * hiteItems.length + 'px';
}
initTwo();


hiteSlideOne.addEventListener(`click`, function () {
	hiteSlideOne.classList.add(`hite-new-style`);
	hiteSlideTwo.classList.remove(`hite-new-style`);
	hiteSlideThree.classList.remove(`hite-new-style`)
	hiteSlideFour.classList.remove(`hite-new-style`);
	hiteSlideFight.classList.remove(`hite-new-style`);
	hiteScroll = 0;
	hiteTransform();
})
hiteSlideTwo.addEventListener(`click`, function () {
	hiteSlideOne.classList.remove(`hite-new-style`);
	hiteSlideTwo.classList.add(`hite-new-style`);
	hiteSlideThree.classList.remove(`hite-new-style`)
	hiteSlideFour.classList.remove(`hite-new-style`);
	hiteSlideFight.classList.remove(`hite-new-style`);
	hiteScroll = 1;
	hiteTransform();
})
hiteSlideThree.addEventListener(`click`, function () {
	hiteSlideOne.classList.remove(`hite-new-style`);
	hiteSlideTwo.classList.remove(`hite-new-style`);
	hiteSlideThree.classList.add(`hite-new-style`)
	hiteSlideFour.classList.remove(`hite-new-style`);
	hiteSlideFight.classList.remove(`hite-new-style`);
	hiteScroll = 2;
	hiteTransform();
})
hiteSlideFour.addEventListener(`click`, function () {
	hiteSlideOne.classList.remove(`hite-new-style`);
	hiteSlideTwo.classList.remove(`hite-new-style`);
	hiteSlideThree.classList.remove(`hite-new-style`)
	hiteSlideFour.classList.add(`hite-new-style`);
	hiteSlideFight.classList.remove(`hite-new-style`);
	hiteScroll = 3;
	hiteTransform();
})
hiteSlideFight.addEventListener(`click`, function () {
	hiteSlideOne.classList.remove(`hite-new-style`);
	hiteSlideTwo.classList.remove(`hite-new-style`);
	hiteSlideThree.classList.remove(`hite-new-style`)
	hiteSlideFour.classList.remove(`hite-new-style`);
	hiteSlideFight.classList.add(`hite-new-style`);
	hiteScroll = 4;
	hiteTransform();
})
function hiteTransform() {
	hiteLine.style.transform = 'translate(-' + hiteScroll * widthHite + 'px)';
}
//SLIDER THIRD-END
const forestButton = document.querySelectorAll(`.forest__buttons`);
const forestButtonOne = document.querySelector(`.forest__button_one`);
const forestButtonTwo = document.querySelector(`.forest__button_two`);
const forestButtonThree = document.querySelector(`.forest__button_three`);
const forestButtonFour = document.querySelector(`.forest__button_four`);
const forestBox = document.querySelector(`.forest__box`);
const forestItems = document.querySelectorAll(`.forest__items`)
const forestLine = document.querySelector(`.forest__line`);
let widthForest;
let forestTranform = 0;

function forestInit() {
	widthForest = forestBox.offsetWidth;
	forestItems.forEach(item => {
		item.style.width = widthForest + 'px';
		item.style.height = 'auto';
	})
	forestLine.style.width = widthForest * forestItems.length + 'px';
}
forestInit();

forestButtonOne.addEventListener(`click`, function () {
	forestButtonOne.classList.add(`new-style-forest`);
	forestButtonTwo.classList.remove(`new-style-forest`);
	forestButtonThree.classList.remove(`new-style-forest`);
	forestButtonFour.classList.remove(`new-style-forest`);
	widthForest = 0;
	forestSlide();
})
forestButtonTwo.addEventListener(`click`, function () {
	forestButtonOne.classList.remove(`new-style-forest`);
	forestButtonTwo.classList.add(`new-style-forest`);
	forestButtonThree.classList.remove(`new-style-forest`);
	forestButtonFour.classList.remove(`new-style-forest`);
	widthForest = 1;
	forestSlide();
})
forestButtonThree.addEventListener(`click`, function () {
	forestButtonOne.classList.remove(`new-style-forest`);
	forestButtonTwo.classList.remove(`new-style-forest`);
	forestButtonThree.classList.add(`new-style-forest`);
	forestButtonFour.classList.remove(`new-style-forest`);
	widthForest = 2;
	forestSlide();
})
forestButtonFour.addEventListener(`click`, function () {
	forestButtonOne.classList.remove(`new-style-forest`);
	forestButtonTwo.classList.remove(`new-style-forest`);
	forestButtonThree.classList.remove(`new-style-forest`);
	forestButtonFour.classList.add(`new-style-forest`);
	widthForest = 3;
	forestSlide();
})

function forestSlide() {
	forestLine.style.transform = 'translate(-' + widthHite * widthForest + 'px)';
}
//HIDEN MENU

const visibleLink = document.querySelector(`.black__link__one`);
const hiddenMenu = document.querySelector(`.hidden__menu`);
const hiddenContainer = document.querySelector(`.hidden__container`);

visibleLink.addEventListener(`mouseover`, function () {
	hiddenContainer.classList.add(`show-hidden-menu`);
})
visibleLink.addEventListener(`mouseout`, function () {
	hiddenContainer.classList.remove(`show-hidden-menu`);
})
hiddenContainer.addEventListener(`mouseout`, function () {
	hiddenContainer.classList.remove(`show-hidden-menu`);
})
hiddenContainer.addEventListener(`mouseover`, function () {
	hiddenContainer.classList.add(`show-hidden-menu`);
})