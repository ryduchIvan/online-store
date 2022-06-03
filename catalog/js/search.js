const searchInput = document.querySelector(`.white__input`)

searchInput.oninput = function () {
	let val = this.value.trim().toUpperCase();
	let catalogItemsTitle = document.querySelectorAll(`.knife__title`);
	if (val != "") {
		catalogItemsTitle.forEach(function (elem) {
			if (elem.innerText.toUpperCase().search(val) == -1) {
				elem.closest(`.catalog__item`).classList.add(`hide`);
				elem.innerHTML = elem.innerText;
			} else {
				elem.closest(`.catalog__item`).classList.remove(`hide`);
				let str = elem.closest(`.catalog__item`).innerText;
				elem.innerHTML = insertMark(str, elem.innerText.toUpperCase().search(val), val.lenght);
			}
		});
	}
	else {
		catalogItemsTitle.forEach(function (elem) {
			elem.closest(`.catalog__item`).classList.remove(`hide`);
			elem.innerHTML = elem.innerText;
		})
	}
}

function insertMark(str, pos, len) {
	return str.slice(0, pos) + `<mark>` + str.slice(pos, pos + len) + `</mark>` + str.slice(pos + len);
}

const inputPlaceholder = searchInput.placeholder;
searchInput.addEventListener(`focus`, function (e) {
	searchInput.placeholder = ""
})
searchInput.addEventListener(`blur`, function (e) {
	searchInput.placeholder = inputPlaceholder;
})
