const sortPriceDown = document.querySelector(.sort_asc);//создали константу внесли кнопу для сиртировки по возростанию цены
const sortPriceUp = document.querySelector(.sort_desc);//создали константу внесли кнопу для сиртировки по убыванию цены
const sortRating = document.querySelector(.sort - rating);//создали константу внесли кнопу для сиртировки по возростанию рейтинга

sortPriceDown.addEventListener(click, function () { //на кнопку повесли метод клик , который запускат функцию с атрибутом data-price
	mySortDown(data - price);
})
sortPriceUp.addEventListener(click, function () {//на кнопку повесли метод клик , который запускат функцию с атрибутом data-price
	mySortUp(data - price);
})
sortRating.addEventListener(click, function () {//на кнопку повесли метод клик , который запускат функцию с атрибутом data-rating
	mySortUp(data - rating);
})

function mySortDown(sortType) {// создали функцию с параметром sortType
	const nav = document.querySelector(.knife__items);//создали константу с родителем всех элементов
	for (let i = 0; i < nav.children.length; i++) {//запускаем цикл который будет сравнивать атрибути не больше количество детей раз
		for (let j = i; j < nav.children.length; j++) {//запускаем еще один цикл с которым будет сравниваться 
			if (+nav.children[i].getAttribute(sortType) > +nav.children[j].getAttribute(sortType)) {// если атрибути одного элемента будет больше чем атрибут другоо 
				replaceNode = nav.replaceChild(nav.children[j], nav.children[i]);//тогда меняем их местами 
				insertAfter(replaceNode, nav.children[i]);//а элемент который пропал виводим под него 
			}
		}
	}
}
function mySortUp(sortType) {
	const nav = document.querySelector(.knife__items);
	for (let i = 0; i < nav.children.length; i++) {
		for (let j = i; j < nav.children.length; j++) {
			if (+nav.children[i].getAttribute(sortType) < +nav.children[j].getAttribute(sortType)) {
				replaceNode = nav.replaceChild(nav.children[j], nav.children[i]);
				insertAfter(replaceNode, nav.children[i]);
			}
		}
	}
}

function insertAfter(elem, refElem) {//создаем функцию для ввода пропавшего элемента 
	return refElem.parentNode.insertBefore(elem, refElem.nextSibling);//??
}