const buttonBag = document.querySelectorAll(`.in_the_bag`);
const bagProductList = document.querySelectorAll(`.bag__content_list`);
const bagQuantity = document.querySelectorAll(`.bag_quanity`);
const fullpirce = document.querySelectorAll(`.fullprice`);
const bagText = document.querySelectorAll(`.bag__tex`);
let priceBag = 0;
let productArray = [];
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
	fullpirce.forEach(function (elem) {
		elem.textContent = `${normalPrice(priceBag)} ₴`
	});
}
const bagProductListSolo = document.querySelector(`.bag__content_list`);
const changeQuantity = function () {
	let length = bagProductListSolo.children.length;
	bagQuantity.forEach(function (elem) {
		elem.textContent = length;
	})
	if (length > 0) {
		bagText.forEach(function (elem) {
			elem.classList.add(`active`);
		})
	} else {
		bagText.forEach(function (elem) {
			elem.classList.remove(`active`);
		})
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

		bagProductList.forEach(function (elem) {
			elem.insertAdjacentHTML(`afterbegin`, generateCartProduct(id, img, title, price));
		})
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

//bagProductList.forEach(addEventListener(`click`, function (event) {
//	if (event.target.classList.contains(`bag__product_delete`)) {
//		deleteItem(event.target.closest(`.bag__content_item`))
//	}
//})
//)
bagProductList.forEach(function (elem) {
	elem.addEventListener(`click`, function (event) {
		if (event.target.classList.contains(`bag__product_delete`)) {
			deleteItem(event.target.closest(`.bag__content_item`));
		}
	})
})
//Оформление заказа
const generateModalProduct = function (id, img, title, price) {
	return `
	<li class="order__modal_item">
	<article class="order__modal_product" data-id ="${id}">
		<img src="${img}" alt="">
		<div class="order__modal_text">
			<h3 class="order__modal_title order__modal_title_knife">
			${title}
			</h3>
			<span class="order__modal_price">${normalPrice(price)}</span>
		</div>
		<button class="order__modal__delete">Удалить</button>
	</article>
</li>
	`
}


let priceModal = 0;
const buttonOrder = document.querySelectorAll(`.bag__product_btn`);
const modal = document.querySelector(`.modal`);
const orderModalOpenProd = document.querySelector(`.order__modal_products`);
const orderModalList = document.querySelector(`.order__modal__list`);
const arrowOrder = document.querySelector(`.arrow_order`);
const plusModalPrice = function (price) {
	priceModal += price;
}
const printFullPriceModal = function () {
	fullPriceModal.textContent = normalPrice(priceModal) + ` ₴`;
}
//let array = bagProductList.children;
//let fullprice = fullpirce.textContent;
//let length = array.length;
//document.querySelector(`.order__modal_quantity span`).textContent = `${length} шт`;
const changeModalQuantity = function () {
	let length = orderModalList.children.length;
	document.querySelector(`.order__modal_quantity span`).textContent = length + ` шт`;
}
//open modal
buttonOrder.forEach(function (elem) {
	elem.addEventListener(`click`, function () {
		modal.classList.toggle(`show-modal`);
		let array = bagProductListSolo.children;
		for (item of array) {
			let id = item.querySelector(`.bag__content_product`).dataset.id;
			let title = item.querySelector(`.bag__product_title`).textContent;
			let img = item.querySelector(`.bag__product_img`).getAttribute(`src`);
			let price = parseInt(priceWithoutSpaces(item.querySelector(`.bag__product_price`).textContent));
			orderModalList.insertAdjacentHTML(`afterbegin`, generateModalProduct(id, img, title, price));
			plusModalPrice(price);
			printFullPriceModal();
			changeModalQuantity();
			//let obj = {};
			//obj.title = title;
			//obj.price = price;
			//productArray.push(obj);
		}
		//console.log(productArray);
	})
})

//delete product


//close modal
modal.addEventListener(`click`, function (event) {
	console.log(event.target.classList)
	if (event.target.classList.contains(`order__modal`)) {
		modal.classList.remove(`show-modal`);
	}
})


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

let fullPriceModal = document.querySelector(`.order__modal_summ span`);
const minusModalProduct = function (price) {
	priceModal -= price
}

const deleteModalProduct = function (a) {
	//let idPoruduct = a.querySelector(`.order__modal_product`).dataset.id;
	//document.querySelector(`.catalog__item[data-id = "${idPoruduct}"]`).querySelector(`.in_the_bag`).disabled = false;
	//console.log(idPoruduct);
	a.remove();
	let price = parseInt(priceWithoutSpaces(a.querySelector(`.order__modal_price`).textContent));
	minusModalProduct(price);
	printFullPriceModal();
	changeModalQuantity();

	//let idPoruduct = a.querySelector(`.bag__content_product`).dataset.id;
	//document.querySelector(`.catalog__item[data-id = "${idPoruduct}"]`).querySelector(`.in_the_bag`).disabled = false;
	//let priceBag = parseInt(priceWithoutSpaces(document.querySelector(`.bag__content_product`).querySelector(`.bag__product_price`).textContent));
	//bagMinus(priceBag);
	//printFullPrice();
	//const bagContentItems = document.querySelectorAll(`.bag__content_item`);
	//bagContentItems.forEach(function (elem) {
	//	console.log(elem);
	//})
	////document.querySelector(`.bag__content_item`).remove();
	//changeQuantity();
}

orderModalList.addEventListener(`click`, function (event) {
	if (event.target.classList.contains(`order__modal__delete`)) {
		deleteModalProduct(event.target.closest(`.order__modal_item`));
	};
})




//php
//document.querySelector(`.order__modal_form`).addEventListener(`submit`, function (e) {
//	let formData = new FormData(self);
//	let self = e.currentTarget;
//	let name = self.querySelector(`[name = "Имя"]`).value;
//	let tel = self.querySelector(`[name = "Номер телефона"]`).value;
//	let email = self.querySelector(`[name = "Электронная почта"]`).value;
//	formData.append(`Товары`, JSON.stringify(productArray));
//	formData.append(`Имя`, name);
//	formData.append(`Номер телефона`, tel);
//	formData.append(`Электронная почта`, email);

//	let xhr = new XMLHttpRequest();

//	xhr.onreadystatechange = function () {
//		if (xhr.readyState === 4) {
//			if (xhr.status === 200) {
//				console.log(`Отправлено`)
//			}
//		}
//	}

//	xhr.open('POST', 'mail.php', true);
//	xhr.send(formData);

//	self.reset();
//})