const productButton = document.querySelectorAll(`.in_the_bag`);
const bagProductList = document.querySelector(`.bag__content_list`);
const bagText = document.querySelector(`.bag__tex`);
const bagQuantity = document.querySelector(`.bag_quanity`);
const fullPrice = document.querySelector(`.fullprice`);
let priceBag = 0;

//рандомное id товаров 

const randomId = () => {
	return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};
//удалине пробелой строки 
const priceWithoutSpaces = (str) => {
	return str.replace(/\s/g, "");
};
// добавляет пробелы
const normalPrice = (str) => {
	return String(str).replace(/(\d)(?=(\d\d\d)+([\d]|$))/g, '$1 ');
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
const plusFlullPrice = (currentPrice) => {
	return priceBag += currentPrice;
};
const minusFlullPrice = (currentPrice) => {
	return priceBag -= currentPrice;
};
const printFullPrice = () => {
	fullPrice.textContent = `${normalPrice(priceBag)} ₴`
};
const printQuantity = () => {
	let length = bagProductList.children.length;
	bagQuantity.textContent = length;
	if (length > 0) {
		bagText.classList.add(`active`);
	} else {
		bagText.classList.remove(`active`);
	}
};
const deleteItem = (itemParent) => {
	console.log(itemParent);
	// получить id 
	let id = itemParent.querySelector(`.bag__content_product`).dataset.id;
	//disable false
	document.querySelector(`.catalog__item[data-id = "${id}"]`).querySelector(`.in_the_bag`).disabled = false;
	//minus price
	let currentPrice = parseInt(priceWithoutSpaces(itemParent.querySelector(`.bag__product_price`).textContent));
	console.log(currentPrice);
	minusFlullPrice(currentPrice);
	//print fullpirce
	printFullPrice();
	//remove item
	itemParent.remove();
	//count and print quantity
	printQuantity();
}
productButton.forEach(function (elem) {
	elem.closest(`.catalog__item`).setAttribute(`data-id`, randomId());
	elem.addEventListener(`click`, function (e) {
		let self = e.currentTarget;
		let parent = self.closest(`.catalog__item`);
		let id = parent.dataset.id;
		let img = parent.querySelector(`.catalog__img_img`).getAttribute(`src`);
		let title = parent.querySelector(`.knife__title`).textContent;
		//let priceString = parent.querySelector(`.knife__price`).textContent;
		let pirceNumber = parseInt(priceWithoutSpaces(parent.querySelector(`.knife__price`).textContent));

		//sum
		plusFlullPrice(pirceNumber);
		//print fullprice
		printFullPrice();
		//add to car
		bagProductList.insertAdjacentHTML(`afterbegin`, generateCartProduct(img, title, pirceNumber, id));
		//count and print quantity 
		printQuantity();
		//disable button
		self.disabled = true;
	})
})

bagProductList.addEventListener(`click`, function (event) {
	//console.log(event.target.classList);
	if (event.target.classList.contains(`bag__product_delete`)) {
		deleteItem(event.target.closest(` .bag__content_item`))
	}
})