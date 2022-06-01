const buttonBag = document.querySelectorAll(`.in_the_bag`);
const bagProductList = document.querySelector(`.bag__content_list`);
const bagQuantity = document.querySelector(`.bag_quanity`);
const fullpirce = document.querySelector(`.fullprice`);
const bagText = document.querySelector(`.bag__tex`);
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

const generateCartProduct = function (id, img, title, price) {
	return `
<li class="bag__content_item">
<article class="bag__content_product" data-id ="${id}">
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
const bagSum = function (price) {
	priceBag += price;
}
const bagMinus = function (price) {
	priceBag -= price;
}
const printFullPrice = function () {
	fullpirce.textContent = `${normalPrice(priceBag)} ₴`;
}
const changeQuantity = function () {
	let length = bagProductList.children.length;
	bagQuantity.textContent = length;
	if (length > 0) {
		bagText.classList.add(`active`);
	} else {
		bagText.classList.remove(`active`);
	}
}

buttonBag.forEach(function (elem) {
	elem.closest(`.catalog__item`).setAttribute(`data-id`, randomId());
	elem.addEventListener(`click`, function (item) {
		let self = item.currentTarget;
		let parent = self.closest(`.catalog__item`);
		let id = parent.dataset.id;
		let img = parent.querySelector(`.catalog__img_img`).getAttribute(`src`);
		let title = parent.querySelector(`.knife__title`).textContent;
		let price = parseInt(priceWithoutSpaces(parent.querySelector(`.knife__price`).textContent));

		bagProductList.insertAdjacentHTML(`afterbegin`, generateCartProduct(id, img, title, price));
		bagSum(price);
		printFullPrice();
		changeQuantity();
		elem.disabled = true;
	})
})

const deleteItem = function (a) {
	let idPoruduct = a.querySelector(`.bag__content_product`).dataset.id;
	document.querySelector(`.catalog__item[data-id = "${idPoruduct}"]`).querySelector(`.in_the_bag`).disabled = false;
	let price = parseInt(priceWithoutSpaces(a.querySelector(`.bag__product_price`).textContent));
	bagMinus(price);
	printFullPrice();
	a.remove();
	changeQuantity();
}

bagProductList.addEventListener(`click`, function (event) {
	if (event.target.classList.contains(`bag__product_delete`)) {
		deleteItem(event.target.closest(`.bag__content_item`))
	}
})

//Оформление заказа

const buttonOrder = document.querySelector(`.bag__product_btn`);
const modal = document.querySelector(`.modal`);
//open modal
buttonOrder.addEventListener(`click`, function () {
	modal.classList.toggle(`show-modal`);
})
//close modal
modal.addEventListener(`click`, function (event) {
	console.log(event.target.classList)
	if (event.target.classList.contains(`order__modal`)) {
		modal.classList.remove(`show-modal`);
	}
})

const orderModalOpenProd = document.querySelector(`.order__modal_products`);
const orderModalList = document.querySelector(`.order__modal__list`);
const arrowOrder = document.querySelector(`.arrow_order`);
let flag = 0;
orderModalOpenProd.addEventListener(`click`, function (e) {
	if (flag == 0) {
		orderModalList.classList.toggle(`show-order-product`);
		arrowOrder.classList.toggle(`rotate-arrow-order`);
		flag == 1;
	} else {
		orderModalList.classList.remove(`show-order-product`);
		flag == 0;
	}
})


