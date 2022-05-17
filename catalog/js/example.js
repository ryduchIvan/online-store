let a = [5, 2, 12, 9, 7, 11, 8];// создали переменную а с массивом цифр

for (let i = 0; i < a.length; i++) {
	for (let j = i; j < a.length; j++) {
		if (a[i] > a[j]) {
			let temp = a[i];
			a[i] = a[j];
			a[j] = temp;
		}
		console.log(a);
	}
}

//const nav = document.querySelector(`.nav`);
//replaceNode = nav.replaceChild(nav.children[1], nav.children[0]);
//console.log(replaceNode);
//nav.appendChild(replaceNode);

const sortPriceDown = document.querySelector(`.sort_asc`);
const sortPriceUp = document.querySelector(`.sort_desc`);
const sortPopular = document.querySelector(`.sort_popular`);
const sortRating = document.querySelector(`.sort_rating`);
const sortPriceDown = document.querySelector(`.sort_price_down`);
const sortPriceUp = document.querySelector(`.sort_price_up`);

sortPriceDown.addEventListener(`click`, function () {
	mySortDown(`data-price`);
})
sortPriceUp.addEventListener(`click`, function () {
	mySortUp(`data-price`);
})

sortPriceDown.addEventListener(`click`, function () {
	mySortDown(`data-price`);
});

sortPriceUp.addEventListener(`click`, function () {
	mySortUp(`data-price`);
});

sortPopular.addEventListener(`click`, function () {
	mySortDown(`data-popular`)
});

sortRating.addEventListener(`click`, function () {
	mySortDown(`data-rating`);
})

function mySortDown(sortType) {
	const items = document.querySelector(`.catalog__grid`)
	for (let i = 0; i < items.children.length; i++) {
		for (let j = i; j < items.children.length; j++) {
			if (+items.children[i].getAttribute(sortType) > +items.children[j].getAttribute(sortType)) {
				replaceNode = items.replaceChild(items.children[j], items.children[i]);
				insertAfter(replaceNode, items.children[i]);
			}
		}
	}
}
function mySortUp(sortType) {
	const items = document.querySelector(`.catalog__grid`)
	for (let i = 0; i < items.children.length; i++) {
		for (let j = i; j < items.children.length; j++) {
			if (+items.children[i].getAttribute(sortType) < +items.children[j].getAttribute(sortType)) {
				replaceNode = items.replaceChild(items.children[j], items.children[i]);
				insertAfter(replaceNode, items.children[i]);
			}
		}
	}
}

function insertAfter(elem, refElem) {
	return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

sliderRange.noUiSlider.on(`update`, function (values, handle) {
	inputs[handle].value = Math.round(values[handle]);
})

