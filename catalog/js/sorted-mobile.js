const sortArrowMobile = document.querySelectorAll(`.sort__select_arrow_mobile`);
const sortTitleMobile = document.querySelectorAll(`.sort__select_title_mobile`)
const sortSelectItemMobile = document.querySelectorAll(`.select__item_all_mobile`);
const sortSelectMobile = document.querySelectorAll(`.sort__select_mobile`);
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