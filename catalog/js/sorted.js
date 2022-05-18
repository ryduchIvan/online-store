const sortArrow = document.querySelector(`.sort__select_arrow`);
const sortTitle = document.querySelector(`.sort__select_title`)
const sortSelectItem = document.querySelector(`.select__item_all`);
const sortSelect = document.querySelector(`.sort__select`);
const sortSelectText = document.querySelector(`.sort__select_row_text`);

sortTitle.addEventListener(`click`, function () {
	sortSelectItem.classList.toggle(`show-sort-item`);
	sortArrow.classList.toggle(`rotate-arrow`);
})
const sortArrowMobile = document.querySelector(`.sort__select_arrow_mobile`);
const sortTitleMobile = document.querySelector(`.sort__select_title_mobile`)
const sortSelectItemMobile = document.querySelector(`.select__item_all_mobile`);
const sortSelectMobile = document.querySelector(`.sort__select_mobile`);
const sortSelectTextMobile = document.querySelector(`.sort__select_row_text_mobile`);

sortTitleMobile.addEventListener(`click`, function () {
	sortSelectItemMobile.classList.toggle(`show-sort-item`);
	sortArrowMobile.classList.toggle(`rotate-arrow`);
})
const sortPriceDown = document.querySelector(`.select__item_price_down`);
const sortPriceUp = document.querySelector(`.select__item_price_up`);
const sortPopular = document.querySelector(`.select__item_popular`);
const sortRating = document.querySelector(`.select__item_rating`);


sortPriceUp.addEventListener(`click`, function () {
	mySortDown(`data-price`);
	sortSelectItem.classList.remove(`show-sort-item`);
	sortArrow.classList.remove(`rotate-arrow`);
	sortSelectText.innerHTML = "По убыванию цены"
})
sortPriceDown.addEventListener(`click`, function () {
	mySortUp(`data-price`);
	sortSelectItem.classList.remove(`show-sort-item`);
	sortArrow.classList.remove(`rotate-arrow`);
	sortSelectText.innerHTML = "По увеличению цены"
})


sortPopular.addEventListener(`click`, function () {
	mySortDown(`data-popular`)
	sortSelectItem.classList.remove(`show-sort-item`);
	sortArrow.classList.remove(`rotate-arrow`);
	sortSelectText.innerHTML = "По популярности";
});

sortRating.addEventListener(`click`, function () {
	mySortDown(`data-rating`);
	sortSelectItem.classList.remove(`show-sort-item`);
	sortArrow.classList.remove(`rotate-arrow`);
	sortSelectText.innerHTML = "По рейтингу";
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
