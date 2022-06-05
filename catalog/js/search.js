const searchInput = document.querySelector(`.white__input`)//получаем в константу инпут

searchInput.oninput = function () {//вешаем на инпут метод oninput (который отслежует любое изменение инпута) и создаем функцию 
	let val = this.value.trim().toUpperCase();//создаем переменую val = в которое храним value инпута , trim- убераем проблемы ,
	//toUpperCase - выводим value в высокий регистр 
	let catalogItemsTitle = document.querySelectorAll(`.knife__title`);//создаем переменую для все тайтлов корточек ножей 
	if (val != "") {//если пользаватель ввел что то 
		catalogItemsTitle.forEach(function (elem) {//перебераем тайтли 
			if (elem.innerText.toUpperCase().search(val) == -1) {//если значение title переведеного в верхний регистр не совбадание со значением 
				//value inputa тогда мы 
				elem.closest(`.catalog__item`).classList.add(`hide`);//скрываем карточки 
				elem.innerHTML = elem.innerText;
			} else {
				elem.closest(`.catalog__item`).classList.remove(`hide`);//если совпадения есть , мы убираем показываем карточку 
				let position = elem.innerText.toUpperCase().search(val);
				let str = elem.innerText;
				elem.innerHTML = insertMark(str, position, val.length);//если совпадение есть , тогда 
				//в тайтл загружаем новый htmlteg , который создан функцией insertMark , и парадаем 3 параметра 
				//str - строка тайтла
				//position - точка где совпадение началось , 
				//val.length - количество ввиденных символов 
			}
		});
	}
	else {//если пустая строка
		catalogItemsTitle.forEach(function (elem) {//перебыраем тайтли 
			elem.closest(`.catalog__item`).classList.remove(`hide`);//показываем все карточки 
			elem.innerHTML = elem.innerText;
		})
	}
}

function insertMark(string, pos, len) {// создаем функцию , передаем 3 параметра 
	return string.slice(0, pos) + `<mark>` + string.slice(pos, pos + len) + `</mark>` + string.slice(pos + len);// создаем новую строку 
	//string - строка тайтла 
	//pos - точка где происходит совпадение между строкой и value inputa 
	//len - количество символов которые ввел пользаватель 
	//slice() - функция которая отделяет части строки , первое значение откуда отрезать , второе до куда 
	//string.slice(0, pos) - те буквы строки которые не попали в совпадение 
	//`<mark>` + string.slice(pos, pos + len) + `</mark>`- те символи которые попали в совпадение с input.value
	//string.slice(pos + len) оставшаяся часть строки которая не попала в совпадение 
}

const inputPlaceholder = searchInput.placeholder;//создаем константу для плейсхолдера 
searchInput.addEventListener(`focus`, function (e) {//на инпута вешаем метод фокус 
	searchInput.placeholder = ""//при фокусе плейсхолдер будет равен пустой строке
	this.style.background = `none`;
})
searchInput.addEventListener(`blur`, function (e) {//при снятии фокуса 
	searchInput.placeholder = inputPlaceholder;//плейсхолдер будет равен своему изначальному значению
	this.style.background = `url(../../main/img/logo-header/lypa.svg) no-repeat 5% 50%`;
})


