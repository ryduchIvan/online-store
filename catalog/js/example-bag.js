const productButton = document.querySelectorAll(`.in_the_bag`);//Внесли в константу кнопку "в корзину"
const bagProductList = document.querySelector(`.bag__content_list`);//Внесли в константу список , в который будут добовляться товары 
const bagText = document.querySelector(`.bag__tex`);// Внесли в константу блок корзина 
const bagQuantity = document.querySelector(`.bag_quanity`);//внесли в константу счетчик товаров к корзине
const fullPrice = document.querySelector(`.fullprice`);//внесли в константу итоговую цену товаров в корзине 
let priceBag = 0;//переменная цена 

//Создаем три функции , 1) Дает уникальный id каждому продукту 2) Переводит цены из строки в цифру (удаляет пробелы символы и тд)
//3) После того как fullprice посчитан , переводит обратно из цифри в строку (добавляет пробелы  и символы)
const randomId = () => {
	return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);//рандомное id товаров 
};

const priceWithoutSpaces = (str) => {
	return str.replace(/\s/g, "");//удалине пробелой строки 
};

const normalPrice = (str) => {
	return String(str).replace(/(\d)(?=(\d\d\d)+([\d]|$))/g, '$1 ');// добавляет пробелы
}

const generateCartProduct = (img, title, price, id) => {//создаем константу , передаем 4 параметра
	//img - фото продкута которое мы добавили в коризну 
	//title - название продукта которое мы добавили в корзину 
	//price - цена товара который мы добавили в коризну
	//id - уникальный id товара которой мы добавили в коризну 

	//Возращаем нашу html форму которую мы подготовили за рание с заменной элементов на наши параметры 
	//что бы в корзину передавлся конкретно тот елемент , которые мы добавили в корзину
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
const plusFlullPrice = (currentPrice) => {//Создаем функцию которая плюсует цены продуктов добавленых в коризину 
	return priceBag += currentPrice;
};
const minusFlullPrice = (currentPrice) => {//Создаем функцию которая минусует цены продуктов добавленых в коризину 
	return priceBag -= currentPrice;
};
const printFullPrice = () => {//создаем функцию которая уже готовую цену записывает в блок фулпрайс , и переводит ее в строку 
	fullPrice.textContent = `${normalPrice(priceBag)} ₴`
};
const printQuantity = () => {//создаем функцию
	let length = bagProductList.children.length;//где переменная length ровняеться количеству элементов в списке (в корзине)
	bagQuantity.textContent = length;//пишем что textContent(цифра элемента) будет ровна количеству продуктов в корзине
	if (length > 0) {//если товаров хотя бы один 
		bagText.classList.add(`active`);//тогда мы добавляем класс active нашему блоку "коризна ". Именно этот класс дает возможность 
		//при навидении открыть корзину 
	} else {//если товаров нет 
		bagText.classList.remove(`active`);//удаляем класс 
	}
};

const deleteItem = (itemParent) => {//создаем функцию удаления товара с корзини с параметром itemParent
	console.log(itemParent);
	// получить id 
	let id = itemParent.querySelector(`.bag__content_product`).dataset.id;//получаем id товара который находиться в корзине 
	//disable false
	document.querySelector(`.catalog__item[data-id = "${id}"]`).querySelector(`.in_the_bag`).disabled = false;//уберем disabled с кнопки
	//добавить в корзину того елемента , который мы удалили в корзине
	//minus price
	let currentPrice = parseInt(priceWithoutSpaces(itemParent.querySelector(`.bag__product_price`).textContent));//создаем переменую которая равна
	//и переводит из строки в число уберая проблемы и символы
	console.log(currentPrice);
	minusFlullPrice(currentPrice);//запускаем функцию минус , передаем параметр currentPrice , так как именно он отвечает за цену в корзину 
	//конкретного продукта
	//print fullpirce
	printFullPrice();//выводим итоговую суму в блок 
	//remove item
	itemParent.remove();//удаляем html форму из корзини
	//count and print quantity
	printQuantity();//меняем число которые отвечает за количество продуктов
}

productButton.forEach(function (elem) {//перебераем все кнопки "добавить в корзину"
	elem.closest(`.catalog__item`).setAttribute(`data-id`, randomId());//находим родитилей этих кнопка (в нашем случаем это карточка продкта)
	//и добавляем карточке продкута уникальный id который будет записан в атрибут data-id
	elem.addEventListener(`click`, function (e) {//создаем функцию с методом клик
		let self = e.currentTarget;//создаем переменую self которая будет равна элементу на который мы нажали 
		let parent = self.closest(`.catalog__item`);//создаем переменую parent которая будет равна родителю кнопки "в корзину"
		//в нашем случаии карточки элемента
		let id = parent.dataset.id;//создаем переменую id которая равно значению data-set карточки элемента, на кнопку которого мы нажали
		let img = parent.querySelector(`.catalog__img_img`).getAttribute(`src`);//создаем переменую img которая будет ровна значению атрибута src 
		//(ссылкой фото) той карточки на кнопку которой мы нажали 
		let title = parent.querySelector(`.knife__title`).textContent;//создаем переменую title которая будет ровна строке блока (knife__title)
		//той карточки на кнопку которой мы нажали
		//let priceString = parent.querySelector(`.knife__price`).textContent;
		let pirceNumber = parseInt(priceWithoutSpaces(parent.querySelector(`.knife__price`).textContent));//создаем переменую priceNumber которая будет
		//ровна значению блока (knife__price) той карточки на кнопку которой мы нажали , убирает пробелы , а после переводит и строки в число 
		console.log(pirceNumber);

		//Запускаем функцию суми , передавая параметр priceNumber (то число которое уже переведенной в цифру и соотвествует цены карточки)
		plusFlullPrice(pirceNumber);
		//print fullprice
		printFullPrice();//запускаем функцию которая выводит готовую цену в блок , при этом занову переводит ее в строку и добавляем символы
		//add to car
		bagProductList.insertAdjacentHTML(`afterbegin`, generateCartProduct(img, title, pirceNumber, id));//добавляем нашу форму в список 
		//передаем в 4 параметра (каждый параметр соотвествует карточке , на кнопку которую мы нажали)
		//count and print quantity 
		printQuantity();//после того как добавили продкут в корзину , показываем количество продуктов в блок 
		//disable button
		self.disabled = true;//не разрешаем добавлять больше чем один раз наш товар в коризну
	})
})

bagProductList.addEventListener(`click`, function (event) {//создаем функцию для нашего списка продуктов в корзине с параметром event
	//console.log(event.target.classList);
	if (event.target.classList.contains(`bag__product_delete`)) {//если то на что мы кликнули имеент в себе класс `bag__product_delete`
		deleteItem(event.target.closest(` .bag__content_item`))//тогда запускаем нашу функцию и передаем в качестве параметра элемент в корзине
	}
})