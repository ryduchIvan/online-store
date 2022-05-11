const items = document.querySelector(`.items__sort`);
const item = document.querySelector(`.sort__item`);

items.addEventListener(`click`, function () {
	item.classList.add(`show`);
})