const productTitle = document.querySelector(`.product__title`);
const productArrow = document.querySelector(`.product__title_arrow`);
const checkboxProduct = document.querySelector(`.checkbox__list`);

productTitle.addEventListener(`click`, function () {
	productArrow.classList.toggle(`rotate-checkbox-arrow`);
	checkboxProduct.classList.toggle(`show-checkbox-list`);
})

const steelTitle = document.querySelector(`.steel__title`);
const steelArrow = document.querySelector(`.steel__title_arrow`);
const checkboxSteel = document.querySelector(`.steel__list`);


steelTitle.addEventListener(`click`, function () {
	steelArrow.classList.toggle(`rotate-checkbox-arrow`);
	checkboxSteel.classList.toggle(`show-checkbox-list`);
})

const handleTitle = document.querySelector(`.handle__title`);
const handleArrow = document.querySelector(`.handle__title_arrow`);
const checkboxHandle = document.querySelector(`.handle__list`);

handleTitle.addEventListener(`click`, function () {
	handleArrow.classList.toggle(`rotate-checkbox-arrow`);
	checkboxHandle.classList.toggle(`show-checkbox-list`);
})

const stuffTitle = document.querySelector(`.stuff__title`);
const stuffArrow = document.querySelector(`.stuff__title_arrow`);
const checkboxStuff = document.querySelector(`.stuff__list`);

stuffTitle.addEventListener(`click`, function () {
	stuffArrow.classList.toggle(`rotate-checkbox-arrow`);
	checkboxStuff.classList.toggle(`show-checkbox-list`);
})

const goldTitle = document.querySelector(`.gold__title`);
const goldArrow = document.querySelector(`.gold__title_arrow`);
const checkboxGold = document.querySelector(`.gold__list`);

goldTitle.addEventListener(`click`, function () {
	goldArrow.classList.toggle(`rotate-checkbox-arrow`);
	checkboxGold.classList.toggle(`show-checkbox-list`);
})

//Сортировка 

const catalogItem = document.querySelectorAll(`.catalog__item`);
const catalogSide = document.querySelector(`.catalog__side`);
const catalogGrid = document.querySelector(`.catalog__grid`)
const checkboxLabel = document.querySelector(`.checkbox__label`);
catalogSide.addEventListener(`click`, (event) => {
	if (event.target.tagName !== 'LABEL') {
		return console.log(false);
	}

	let filterClass = event.target.dataset[`f`];

	catalogItem.forEach((elem) => {
		if (!elem.classList.contains(filterClass)) {
			elem.classList.toggle(`hide`);
			catalogGrid.classList.add(`new-grid`);
		}
	})
})
