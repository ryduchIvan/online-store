const mainSelect = document.querySelectorAll(`.main__select`);
const mainSelectArrow = document.querySelector(`.button__select_arrow`);
const selectBox = document.querySelector(`.select__box`);

mainSelect.forEach(function (item) {
	item.addEventListener(`click`, function (event) {
		item.nextElementSibling.classList.toggle = 'show-select-box';
	})
})
