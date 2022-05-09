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
window.addEventListener(`resize`, init);
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
const forestBox = document.querySelector(`.forest__box`);
const forestLine = document.querySelector(`.forest__line`);
const forestItems = document.querySelectorAll(`.forest__items`);
const forestItem = document.querySelectorAll(`.forest__item`);
const forestSlide = document.querySelector(`.forst__button`);
const forestOne = document.querySelector(`.forest__button_one`);
const forestTwo = document.querySelector(`.forest__button_two`);
const forestThree = document.querySelector(`.forest__button_three`);
const forestFour = document.querySelector(`.forest__button_four`);
let forestCount = 0;
let forestWidth;

function forestInit() {
	forestWidth = forestBox.offsetWidth;
	forestItems.forEach(item => {
		item.style.width = forestWidth + 'px';
		item.style.height = 'auto';
	})
	forestLine.style.width = forestWidth * forestItems.length + 'px';
	forestScroll()
}
forestInit();
window.addEventListener(`resize`, forestInit);

forestOne.addEventListener(`click`, function () {
	forestOne.classList.add(`new-style-forest`)
	forestTwo.classList.remove(`new-style-forest`);
	forestThree.classList.remove(`new-style-forest`);
	forestFour.classList.remove(`new-style-forest`);
	forestCount = 0;
	forestScroll()
})
forestTwo.addEventListener(`click`, function () {
	forestOne.classList.remove(`new-style-forest`)
	forestTwo.classList.add(`new-style-forest`);
	forestThree.classList.remove(`new-style-forest`);
	forestFour.classList.remove(`new-style-forest`);
	forestCount = 1;
	forestScroll()
})
forestThree.addEventListener(`click`, function () {
	forestOne.classList.remove(`new-style-forest`)
	forestTwo.classList.remove(`new-style-forest`);
	forestThree.classList.add(`new-style-forest`);
	forestFour.classList.remove(`new-style-forest`);
	forestCount = 2;
	forestScroll()
})
forestFour.addEventListener(`click`, function () {
	forestOne.classList.remove(`new-style-forest`)
	forestTwo.classList.remove(`new-style-forest`);
	forestThree.classList.remove(`new-style-forest`);
	forestFour.classList.add(`new-style-forest`);
	forestCount = 3;
	forestScroll()
})
function forestScroll() {
	forestLine.style.transform = 'translate(-' + forestCount * forestWidth + 'px)';
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

//mobile-menumobile__list--drop-dropdown
const burger = document.querySelector(`.burger__menu`);
const burgerMobile = document.querySelector(`.burger__menu__box`);
const body = document.querySelector(`body`);
const mobileMenu = document.querySelector(`.mobile__menu`)
const mobileList = document.querySelector(`.mobile__list`);
const dropdown = document.querySelector(`.mobile__list--dropdown`);
const mobileBack = document.querySelector(`.mobile-black__link`);
const dropDropMenu = document.querySelector(`.mobile__list--drop-dropdown`);


const scrollTop = function () {
	mobileMenu.scrollTo({
		top: 0,
		behavior: 'smooth',
	})
}

const initialMenu = function (event) {
	document.querySelector(`.mobile__list--dropdown`).classList.remove(`dropdown-tranformation`);
	document.querySelector(`.mobile__nav`).querySelector(`.mobile__list`).classList.remove(`mobile__nav-tranformation`);
	scrollTop();
}

burger.addEventListener(`click`, function () {
	mobileMenu.classList.add(`open-mobile-menu`);
	body.classList.add(`lock`);
	initialMenu();
})
burgerMobile.addEventListener(`click`, function () {
	mobileMenu.classList.remove(`open-mobile-menu`)
	body.classList.remove(`lock`);
})

mobileList.addEventListener(`click`, function (event) {
	console.log(event.target);
	if (event.target.classList.contains(`mobile__link--drop`)) {
		event.preventDefault();
		event.target.closest(`.mobile__list`).classList.add(`mobile__nav-tranformation`);
		event.target.closest(`.mobile__item`).querySelector(`.mobile__list--dropdown`).classList.add(`dropdown-tranformation`);
		scrollTop();
	}
	if (event.target.classList.contains(`catalog__open`)) {
		event.preventDefault();
		event.target.closest(`.mobile__list--dropdown`).classList.add(`dropdown-close`);
	}
	if (event.target.classList.contains(`mobile-back__link`)) {
		event.preventDefault();
		event.target.closest(`.mobile__list--dropdown`).classList.remove(`dropdown-tranformation`);
		event.target.closest(`.mobile__nav`).querySelector(`.mobile__list`).classList.remove(`mobile__nav-tranformation`);
		scrollTop();
	}
	if (event.target.classList.contains(`drop-drop-back__link`)) {
		event.preventDefault();
		event.target.closest(`.mobile__list--dropdown`).classList.remove(`dropdown-close`);
	}
})
