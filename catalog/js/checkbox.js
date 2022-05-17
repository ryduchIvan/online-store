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

const catalogItem = document.querySelectorAll(`.catalog__item`);//внесли в коснтанту все карточки товара 
const catalogSide = document.querySelector(`.catalog__side`);//внесли в консатнту сайд бар 
const catalogGrid = document.querySelector(`.catalog__grid`);// внесли в коснтанту родителя карточек товара
const checkboxLabel = document.querySelector(`.checkbox__label`);//внесли в костанту лейбел 
catalogSide.addEventListener(`click`, (event) => {//на сайд бар повесили метод клик, функцию с параметром event 
	if (event.target.tagName == 'LABEL') {// если мы кликайем на сайд бар и то на что мы кликним  label 
		console.log(true);//выводим в консоль true

		let filterClass = event.target.dataset[`f`];// получаем в переменую атрибут data-f
		catalogItem.forEach((elem) => {//перебираем все товари 
			if (!elem.classList.contains(filterClass)) {//если класс товара не включает value пременой 
				elem.classList.toggle(`hide`);//тогда мы эти элементы скрываем 
				catalogGrid.classList.add(`new-grid`);
			}
		})
	} else {// если елемент на который мы кликнули не лейбел 
		console.log(false);//выводим false
	}
})