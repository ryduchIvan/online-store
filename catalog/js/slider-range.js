const sliderRangeArrow = document.querySelector(`.slider_range_arrow`);
const sliderRangeBox = document.querySelector(`.slider__box`);

sliderRangeArrow.addEventListener(`click`, function () {
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
	});

	const setSliderRange = function (index, value) {// создаем функцию с 2 параметрами 
		//index - значение lenght каждого инпута
		//value - содержание
		let arr = [null, null];//создали массив с null значением 
		arr[index] = value;//передаем в массив значение инпута 
		sliderRange.noUiSlider.set(arr);//вешаем на слайдер метод set и передаем слайдеру значения массива
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