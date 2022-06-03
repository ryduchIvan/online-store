const searchInput = document.querySelector(`.input`);
searchInput.oninput = function () {
	let val = this.value.trim();
	let catalogItems = document.querySelectorAll(`.li`);
	if (val != '') {
		catalogItems.forEach(function (elem) {
			if (elem.innerText.search(val) == -1) {
				elem.classList.add(`hide`)
				elem.innerHTML = elem.innerText;
			} else {
				elem.classList.remove(`hide`);
				let str = elem.innerText;
				elem.innerHTML = insertMark(str, elem.innerText.search(val), val.length);
			}
		})
	} else {
		catalogItems.forEach(function (elem) {
			elem.classList.remove(`hide`);
			elem.innerHTML = elem.innerText;
		})
	}
}

function insertMark(string, pos, len) {
	//hello world
	//hello <mark>wo</mark>rld
	//hello+<mark>+wo+</mark>+rld
	return string.slice(0, pos) + `<mark>` + string.slice(pos, pos + len) + `</mark>` + string.slice(pos + len);
}