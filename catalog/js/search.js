const searchInput = document.querySelector(`.white__input`);

searchInput.oninput = function () {
	let val = this.value.trim().toUpperCase();
	const catalogItemsTitle = document.querySelectorAll(`.knife__title`);
	if (val != "") {
		catalogItemsTitle.forEach(function (elem) {
			if (elem.innerText.toUpperCase().search(val) == -1) {
				elem.closest(`.catalog__item`).classList.add(`hide`);
				elem.innerHTML = elem.innerText;
			} else {
				elem.closest(`.catalog__item`).classList.remove(`hide`);
				let str = elem.innerText;
				let position = elem.innerText.toUpperCase().search(val);
				let length = val.length;
				elem.innerHTML = insertMark(str, position, val.length);
			}
		})
	}
}

let searchPlaceholder = searchInput.placeholder;

searchInput.addEventListener(`focus`, function () {
	searchInput.placeholder = ""
});
searchInput.addEventListener(`blur`, function () {
	searchInput.placeholder = searchPlaceholder;
});