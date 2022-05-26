//select
const mainSelect = document.querySelectorAll(`.main__select`);
const mainSelec = document.querySelector(`.main__select`);
const mainSelectArrow = document.querySelectorAll(`.button__select_arrow`);
const selectBox = document.querySelectorAll(`.select__box`);
const selectButton = document.querySelectorAll(`.button__select`);
const selectItem = document.querySelectorAll(`.select__item`);
const selectTitle = document.querySelectorAll(`.title__select`);
const countryItems = document.querySelectorAll(`.country__item`)
const main = document.querySelector(`.main`);

mainSelect.forEach(function (elem) {
	elem.addEventListener(`click`, function () {
		elem.nextElementSibling.classList.toggle(`show-select-box`);
		elem.childNodes[3].childNodes[1].classList.toggle(`rotate-arrow-select`);
		console.log(elem.nextElementSibling.classList);
	})
})
selectItem.forEach(function (item) {
	item.addEventListener(`click`, function (event) {
		selectBox.forEach(function (elem) {
			elem.classList.remove(`show-select-box`);
		})
		item.parentNode.parentNode.previousElementSibling.childNodes[1].innerHTML = itemText;
		let countryClass = event.target.dataset[`country`];
		console.log(countryClass);
		countryItems.forEach(function (elem) {
			elem.classList.remove(`hide`);
			if (!elem.classList.contains(countryClass)) {
				elem.classList.add(`hide`);
			}
		})
	})
	let itemText = item.textContent;
})

//calc
const plus = document.querySelector(`.bag__finihs_plus`);
console.log(plus);
const minus = document.querySelector(`.bag__finish_minus`);
const inputBag = document.querySelector(`.bag__finish_input`);
console.log(inputBag);
const price = document.querySelector(`.bag__price`);
console.log(+price.value);
let num = 0;
const priceValue = +price.value;
console.log(priceValue);
function numberPlus() {
	if (num > 19) return false;
	num++;
	this.textContent = num;
	price.value = +price.value + priceValue;
}

function numberMinus() {
	if (num < 1) return false;
	num--;
	this.textContent = num;
	console.log(num);
	price.textContent / 2;
	price.value = +price.value - priceValue;
}
plus.addEventListener(`click`, function () {
	numberPlus.call(inputBag);
})
minus.addEventListener(`click`, function () {
	numberMinus.call(inputBag);
})
//bonus
const bag = document.querySelector(`.bag`);
const bonustText = document.querySelector(`.bag__bonus_text`);

bag.addEventListener(`mouseover`, function (event) {
	if ((event.target.classList == 'bag__bonus_image')) {
		bonustText.classList.add(`show-bonus-text`);
	} else {
		bonustText.classList.remove(`show-bonus-text`);
	}
})

//const sliderTextItemT = document.querySelector(`.slider__text_item`)
//main.addEventListener(`click`, function (event) {
//	if ((event.target.classList[0] == `about__select`)) {
//		selectBox.forEach(function (elem) {
//			elem.classList.remove(`show-select-box`);
//		})
//		console.log(true);
//	}
//})

//main.addEventListener(`click`, function (event) {
//	if ((event.target.classList[0] == `about__select`)) {
//		selectBox.forEach(function (elem) {
//			elem.classList.remove(`show-select-box`);
//		})
//		console.log(true);
//	}
//})

//const sliderBoxText = document.querySelector(`.slider__text_box`);
//console.log(sliderBoxText);

body.addEventListener(`click`, function (event) {
	if ((event.target.classList[0] != `main__select`) && (event.target.classList[0] != `select__item`) && (event.target.classList[0] != `title__select`) && (event.target.classList[0] != `button__select`) && (event.target.classList[0] != `button__select_arrow`)) {
		selectBox.forEach(function (elem) {
			elem.classList.remove(`show-select-box`);
		})
		mainSelectArrow.forEach(function (arrow) {
			arrow.classList.remove(`rotate-arrow-select`)
		})
	}
})