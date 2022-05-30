const buttonBag = document.querySelectorAll(`.in_the_bag`);
const bagProductList = document.querySelector(`.bag__content_list`);
const bagText = document.querySelector(`.bag__tex`);
const bagQuantity = document.querySelector(`.bag_quanity`);
const fullPrce = document.querySelector(`.fullprice`);

let priceBag = 0;
const randomId = () => {
	return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);//рандомное id товаров 
};

const priceWithoutSpaces = (str) => {
	return str.replace(/\s/g, "");//удалине пробелой строки 
};

const normalPrice = (str) => {
	return String(str).replace(/(\d)(?=(\d\d\d)+([\d]|$))/g, '$1 ');// добавляет пробелы
}

const generateCartProduct = (img, title, price, id) => {
	return `
	<li class="bag__content_item">
	<article class="bag__content_product" data-id = "${id}">
		<img src="${img}" alt=""
			class="bag__product_img">
		<div class="bag__porduct_text">
			<h3 class="bag__product_title">
				${title}
			</h3>
			<div class="bag__product_price">${normalPrice(price)} ₴</div>
		</div>
		<div class="bag__product_icon">
			<div class="bag__product_starts">
				<img src="../../main/img/icon/Star 5 (1).svg" alt="">
				<img src="../../main/img/icon/Star 5 (1).svg" alt="">
				<img src="../../main/img/icon/Star 5 (1).svg" alt="">
				<img src="../../main/img/icon/Star 5 (1).svg" alt="">
				<img src="../../main/img/icon/Star 5 (1).svg" alt="">
			</div>
			<div  araia-label="Удалить товар">
				<img src="../../product/img/icon/delete.svg" alt="" class="bag__product_delete">
			</div>
		</div>
	</article>
</li>

	`
}

const sumPriceBag = function (priceFun) {
	priceBag += priceFun;
}
const minusPriceBag = function (priceFun) {
	priceBag -= priceFun;
}
const printFullPrice = function () {
	fullPrce.textContent = normalPrice(priceBag) + ' ₴';
}
const changeQuantity = function () {
	let length = bagProductList.children.length;
	console.log(length);
	bagQuantity.textContent = length;
	if (length > 0) {
		bagText.classList.add(`active`);
	} else {
		bagText.classList.remove(`active`);
	}
	//if (length = 0) {
	//	document.querySelector(`.bag__content_item`).classList.add(`new-flex-style`);
	//} else {
	//	document.querySelector(`.bag__content_item`).classList.remove(`new-flex-style`)
	//}
}
changeQuantity();
buttonBag.forEach(function (elem) {
	elem.closest(`.catalog__item`).setAttribute(`data-id`, randomId());
	elem.addEventListener(`click`, function (item) {
		let self = item.currentTarget;
		let parent = self.closest(`.catalog__item`);
		let img = parent.querySelector(`.catalog__img_img`).getAttribute(`src`);
		let title = parent.querySelector(`.knife__title`).textContent;
		let price = parseInt(priceWithoutSpaces(parent.querySelector(`.knife__price`).textContent));
		let id = parent.dataset.id;
		//Добавление товара в корзину
		bagProductList.insertAdjacentHTML(`afterbegin`, generateCartProduct(img, title, price, id));
		//сумма 
		sumPriceBag(price);
		//Вивели итоговую сумму в блок
		printFullPrice();
		//изменение количества продуктов в корзине
		changeQuantity();
		//делаем так что бы мы могли добавить конкретный товар только один раз 
		self.disabled = true;
	})
})

//удаление товара из корзини 

const deleteItemBag = function (item) {
	//раздизайблили кнопку "в корзину"
	let id = document.querySelector(`.bag__content_product`).dataset.id;
	document.querySelector(`.catalog__item[data-id = "${id}"]`).querySelector(`.in_the_bag`).disabled = false;
	//минисуем цену
	let price = parseInt(priceWithoutSpaces(item.querySelector(`.bag__product_price`).textContent))
	minusPriceBag(price);
	//Выводим итоговую суму
	printFullPrice();
	//убераем элемент
	item.remove();
	//меняем количество значение количества элементов 
	changeQuantity();
}

bagProductList.addEventListener(`click`, function (event) {
	if (event.target.classList.contains(`bag__product_delete`)) {
		deleteItemBag(event.target.closest(`.bag__content_item`));
	}
})