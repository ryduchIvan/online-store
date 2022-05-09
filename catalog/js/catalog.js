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
