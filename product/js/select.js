//select
const mainSelect = document.querySelectorAll(`.main__select`);
const mainSelectArrow = document.querySelector(`.button__select_arrow`);
const selectBox = document.querySelectorAll(`.select__box`);
const selectButton = document.querySelectorAll(`.button__select`);
const selectItem = document.querySelectorAll(`.select__item`);
const selectTitle = document.querySelectorAll(`.title__select`);

mainSelect.forEach(function (elem) {
	elem.addEventListener(`click`, function () {
		elem.nextElementSibling.classList.toggle(`show-select-box`);
		elem.childNodes[3].childNodes[1].classList.toggle(`rotate-arrow-select`);
	})
})
selectItem.forEach(function (item) {
	item.addEventListener(`click`, function () {
		item.parentNode.parentNode.previousElementSibling.childNodes[1].innerHTML = itemText;
	})
	let itemText = item.textContent;
	console.log(itemText);
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