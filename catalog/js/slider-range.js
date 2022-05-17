const sliderRangeTitle = document.querySelector(`.slider__price_title`);
const sliderRangeArrow = document.querySelector(`.slider_range_arrow`);
const sliderRangeBox = document.querySelector(`.slider__box`);
const filterButton = document.querySelector(`.button__filter`);

sliderRangeTitle.addEventListener(`click`, function () {
	sliderRangeBox.classList.toggle(`show-slider-inputs`);
	sliderRangeArrow.classList.toggle(`rotate-slider-arrow`);
})

const sliderRange = document.querySelector(`.slider__price_range`);//внесли в коснтанту наш слайдер

if (sliderRange) {
	noUiSlider.create(sliderRange, {
		start: [200, 5000],
		connect: true,
		step: 50,
		range: {
			'min': 200,
			'max': 5000
		}
	});

	const inputZero = document.querySelector(`.slider__pirce_input`);//внесли в конст первый инпут
	const inputOne = document.querySelector(`.slider__pirce_input_two`);//внесли в конст второй инпут
	const inputs = [inputZero, inputOne];

	sliderRange.noUiSlider.on(`update`, function (values, handle) {//на слайдер повесили функцию которая с 2 параметраи
		// values - перемещение полузнка 
		//handle - сам ползунок ( 1 - 0 , 2 - 1)
		inputs[handle].value = Math.round(values[handle]);//за первый инпут отвечает первый полузнок , за второй - второй 
		//в каждый инпут мы передаем значение перемещение полузнка 
		let sliderValue = inputs[0].value;
		console.log(sliderValue);
		filterButton.addEventListener(`click`, function () {
			catalogItem.forEach(function (elem) {
				if (sliderValue > +elem.dataset['price']) {
					elem.classList.add(`hide`);
				}
			})
		})
	});

	const setSliderRange = function (index, value) {// создаем функцию с 2 параметрами 
		//index - значение lenght каждого инпута
		//value - содержание
		let arr = [null, null];//создали массив с null значением 
		arr[index] = value;//передаем в массив значение инпута 
		sliderRange.noUiSlider.set(arr);//вешаем на слайдер метод set и передаем слайдеру значения массива
		let valueFilterOne = arr[0];
		let valueFilterTwo = arr[1];

		filterButton.addEventListener(`click`, function () {
			catalogItem.forEach(function (elem) {
				console.log(valueFilterOne);
				console.log(valueFilterTwo);
				if (valueFilterOne > +elem.dataset['price']) {
					elem.classList.add(`hide`);
				}
			})
		})

	}
	inputs.forEach(function (e, index) {//на инпуты вешаем функцию с 2 параметрами 
		//index - значение length инпута 
		//el - сам инпут 
		e.addEventListener(`change`, function (e) { //вешаем на элемент метод change и запускаем функцию с параметром 
			//e - инпут который изменили 
			setSliderRange(index, e.currentTarget.value);// запускаем функцию передачи значений массива слайдеру с 2 параметрами
			//index - какой контертно инпут был изменен 
			//e.currentTarget.value - и значение инпута только того , которого мы изменили
		})
	})
}


const sliderRangeTitleTwo = document.querySelector(`.slider__price_title_two`);
const sliderRangeArrowTwo = document.querySelector(`.slider_range_arrow_two`);
const sliderRangeBoxTwo = document.querySelector(`.slider__box_two`);
const sliderRangeTwo = document.querySelector(`.slider__price_range_two`);
sliderRangeTitleTwo.addEventListener(`click`, function () {
	sliderRangeBoxTwo.classList.toggle(`show-slider-inputs`);
	sliderRangeArrowTwo.classList.toggle(`rotate-slider-arrow`);
})

if (sliderRangeTwo) {
	noUiSlider.create(sliderRangeTwo, {
		start: [10, 200],
		connect: true,
		step: 10,
		range: {
			'min': 10,
			'max': 200
		}
	});

	const inputZeroTwo = document.querySelector(`.slider__length_input`);//внесли в конст первый инпут
	const inputOneTwo = document.querySelector(`.slider__length_input_two`);//внесли в конст второй инпут
	const inputsTwo = [inputZeroTwo, inputOneTwo];

	sliderRangeTwo.noUiSlider.on(`update`, function (values, handle) {//на слайдер повесили функцию которая с 2 параметраи
		// values - перемещение полузнка 
		//handle - сам ползунок ( 1 - 0 , 2 - 1)
		inputsTwo[handle].value = Math.round(values[handle]);//за первый инпут отвечает первый полузнок , за второй - второй 
		//в каждый инпут мы передаем значение перемещение полузнка 
	});

	const setSliderRange = function (index, value) {// создаем функцию с 2 параметрами 
		//index - значение lenght каждого инпута
		//value - содержание
		let arr = [null, null];//создали массив с null значением 
		arr[index] = value;//передаем в массив значение инпута 
		sliderRangeTwo.noUiSlider.set(arr);//вешаем на слайдер метод set и передаем слайдеру значения массива
	}

	inputsTwo.forEach(function (e, index) {//на инпуты вешаем функцию с 2 параметрами 
		//index - значение length инпута 
		//el - сам инпут 
		e.addEventListener(`change`, function (e) { //вешаем на элемент метод change и запускаем функцию с параметром 
			//e - инпут который изменили 
			setSliderRange(index, e.currentTarget.value);// запускаем функцию передачи значений массива слайдеру с 2 параметрами
			//index - какой контертно инпут был изменен 
			//e.currentTarget.value - и значение инпута только того , которого мы изменили
		})
	})
}

const sliderRangeTitleThree = document.querySelector(`.slider__price_title_three`);
const sliderRangeArrowThree = document.querySelector(`.slider_range_arrow_three`);
const sliderRangeBoxThree = document.querySelector(`.slider__box_three`);
const sliderRangeThree = document.querySelector(`.slider__price_range_three`);
sliderRangeTitleThree.addEventListener(`click`, function () {
	sliderRangeBoxThree.classList.toggle(`show-slider-inputs`);
	sliderRangeArrowThree.classList.toggle(`rotate-slider-arrow`);
})

if (sliderRangeThree) {
	noUiSlider.create(sliderRangeThree, {
		start: [30, 300],
		connect: true,
		step: 5,
		range: {
			'min': 30,
			'max': 300
		}
	});

	const inputZeroThree = document.querySelector(`.slider__alllength_input`);//внесли в конст первый инпут
	const inputOneThree = document.querySelector(`.slider__alllength_input_two`);//внесли в конст второй инпут
	const inputsThree = [inputZeroThree, inputOneThree];

	sliderRangeThree.noUiSlider.on(`update`, function (values, handle) {//на слайдер повесили функцию которая с 2 параметраи
		// values - перемещение полузнка 
		//handle - сам ползунок ( 1 - 0 , 2 - 1)
		inputsThree[handle].value = Math.round(values[handle]);//за первый инпут отвечает первый полузнок , за второй - второй 
		//в каждый инпут мы передаем значение перемещение полузнка 
	});

	const setSliderRange = function (index, value) {// создаем функцию с 2 параметрами 
		//index - значение lenght каждого инпута
		//value - содержание
		let arr = [null, null];//создали массив с null значением 
		arr[index] = value;//передаем в массив значение инпута 
		sliderRangeThree.noUiSlider.set(arr);//вешаем на слайдер метод set и передаем слайдеру значения массива
	}

	inputsThree.forEach(function (e, index) {//на инпуты вешаем функцию с 2 параметрами 
		//index - значение length инпута 
		//el - сам инпут 
		e.addEventListener(`change`, function (e) { //вешаем на элемент метод change и запускаем функцию с параметром 
			//e - инпут который изменили 
			setSliderRange(index, e.currentTarget.value);// запускаем функцию передачи значений массива слайдеру с 2 параметрами
			//index - какой контертно инпут был изменен 
			//e.currentTarget.value - и значение инпута только того , которого мы изменили
		})
	})
}

const sliderRangeTitleFour = document.querySelector(`.slider__price_title_four`);
const sliderRangeArrowFour = document.querySelector(`.slider_range_arrow_four`);
const sliderRangeBoxFour = document.querySelector(`.slider__box_four`);
const sliderRangeFour = document.querySelector(`.slider__price_range_four`);
sliderRangeTitleFour.addEventListener(`click`, function () {
	sliderRangeBoxFour.classList.toggle(`show-slider-inputs`);
	sliderRangeArrowFour.classList.toggle(`rotate-slider-arrow`);
})

if (sliderRangeFour) {
	noUiSlider.create(sliderRangeFour, {
		start: [5, 20],
		connect: true,
		step: 1,
		range: {
			'min': 5,
			'max': 20
		}
	});

	const inputZeroFour = document.querySelector(`.slider__width_input`);//внесли в конст первый инпут
	const inputOneFour = document.querySelector(`.slider__width_input_two`);//внесли в конст второй инпут
	const inputsFour = [inputZeroFour, inputOneFour];

	sliderRangeFour.noUiSlider.on(`update`, function (values, handle) {//на слайдер повесили функцию которая с 2 параметраи
		// values - перемещение полузнка 
		//handle - сам ползунок ( 1 - 0 , 2 - 1)
		inputsFour[handle].value = Math.round(values[handle]);//за первый инпут отвечает первый полузнок , за второй - второй 
		//в каждый инпут мы передаем значение перемещение полузнка 
	});

	const setSliderRange = function (index, value) {// создаем функцию с 2 параметрами 
		//index - значение lenght каждого инпута
		//value - содержание
		let arr = [null, null];//создали массив с null значением 
		arr[index] = value;//передаем в массив значение инпута 
		sliderRangeFour.noUiSlider.set(arr);//вешаем на слайдер метод set и передаем слайдеру значения массива
	}

	inputsFour.forEach(function (e, index) {//на инпуты вешаем функцию с 2 параметрами 
		//index - значение length инпута 
		//el - сам инпут 
		e.addEventListener(`change`, function (e) { //вешаем на элемент метод change и запускаем функцию с параметром 
			//e - инпут который изменили 
			setSliderRange(index, e.currentTarget.value);// запускаем функцию передачи значений массива слайдеру с 2 параметрами
			//index - какой контертно инпут был изменен 
			//e.currentTarget.value - и значение инпута только того , которого мы изменили
		})
	})
}





