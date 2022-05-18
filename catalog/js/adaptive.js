const sidebarTitle = document.querySelector(`.sidebar__title`);
const sidebar = document.querySelector(`.catalog__side`);
const sidebarTitileArrow = document.querySelector(`.sidebar__title_arrow`);
const sideTitlePrice = document.querySelector(`.side__title__price`);
const sliderPriceLabel = document.querySelectorAll(`.slider__price_label`);

sidebarTitle.addEventListener(`click`, function () {
	sidebar.classList.toggle(`show-sidebar`);
	sidebarTitileArrow.classList.toggle(`rotate-arrow`);
	sideTitlePrice.classList.toggle(`hide-title-price`);
	sliderPriceLabel.forEach(function (elem) {
		elem.classList.toggle(`change-label`);
	})
})