const sortTitleMobile = document.querySelector(`.sort__select_title_mobile`);
const sortSelectItemMobile = document.querySelector(`.select__item_all_mobile`);
const sortSelectMobile = document.querySelector(`.sort__select_mobile`);
const sortSelectTextMobile = document.querySelector(`.sort__select_row_text_mobile`);
const sortSelectArrowMobile = document.querySelector(`.sort__select_arrow_mobile`);

sortTitleMobile.addEventListener(`click`, function () {
	sortSelectItemMobile.classList.toggle(`show-sort-item`);
	sortSelectArrowMobile.classList.toggle(`rotate-arrow`);
})

const sortPriceDownMobile = document.querySelector(`.select__item_price_down_m`);
const sortPriceUpMobile = document.querySelector(`.select__item_price_up_m`);
const sortPopularMobile = document.querySelector(`.select__item_popular_m`);
const sortRatingMobile = document.querySelector(`.select__item_rating_m`);


sortPriceUpMobile.addEventListener(`click`, function () {
	mySortDown(`data-price`);
	sortSelectItemMobile.classList.remove(`show-sort-item`);
	sortArrow.classList.remove(`rotate-arrow`);
	sortSelectTextMobile.innerHTML = "По убыванию цены"
})
sortPriceDownMobile.addEventListener(`click`, function () {
	mySortUp(`data-price`);
	sortSelectItemMobile.classList.remove(`show-sort-item`);
	sortArrow.classList.remove(`rotate-arrow`);
	sortSelectTextMobile.innerHTML = "По увеличению цены"
})


sortPopularMobile.addEventListener(`click`, function () {
	mySortDown(`data-popular`)
	sortSelectItemMobile.classList.remove(`show-sort-item`);
	sortArrow.classList.remove(`rotate-arrow`);
	sortSelectTextMobile.innerHTML = "По популярности";
});

sortRatingMobile.addEventListener(`click`, function () {
	mySortDown(`data-rating`);
	sortSelectItemMobile.classList.remove(`show-sort-item`);
	sortArrow.classList.remove(`rotate-arrow`);
	sortSelectTextMobile.innerHTML = "По рейтингу";
})