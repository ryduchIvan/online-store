const mainSelect = document.querySelectorAll(`.main__select`);
const mainSelectArrow = document.querySelector(`.button__select_arrow`);
const selectBox = document.querySelectorAll(`.select__box`);
const selectButton = document.querySelectorAll(`.button__select`);

mainSelect.forEach(function (elem) {
	elem.addEventListener(`click`, function () {
		elem.nextElementSibling.classList.toggle(`show-select-box`);
		elem.childNodes[3].childNodes[1].classList.toggle(`rotate-arrow-select`);
	})
})