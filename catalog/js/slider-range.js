const sliderRangeArrow = document.querySelector(`.slider_range_arrow`);
const sliderRangeBox = document.querySelector(`.slider__box`);

sliderRangeArrow.addEventListener(`click`, function () {
	sliderRangeBox.classList.toggle(`show-slider-inputs`);
	sliderRangeArrow.classList.toggle(`rotate-slider-arrow`);
})

const sliderRange = document.querySelector(`.slider__price_range`);//внесли в коснтанту наш слайдер

if (sliderRange) { // если это слайдер есть
	noUiSlider.create(sliderRange, {// тогла плагин создает слайдер 
		start: [200, 5000],//настойра - мин и макс стартового значения
		connect: true,//создает линию которая являеться промижутком цены (в нашем случаии черная)
		step: 50,//размер передвежения ползунка
		range: {
			'min': [200],//мин значение слайдер
			'max': [5000]//макс значение слайдер
		}
	});
	const inputZero = document.querySelector(`.slider__pirce_input`);//вносим в константу первый инпут
	const inputOne = document.querySelector(`.slider__pirce_input_two`);//вносим в константу второй инпут
	const inputs = [inputZero, inputOne];//создаем массив из двух инпутов 

	sliderRange.noUiSlider.on('update', function (values, handle) { //вешае метод update на слайдер и создаем функция с двома параметрами
		//velues - отвечает за изминения положеный полузнков 
		//handle - отвечает за какой именно ползунок был перемищен 0 - первый слайдер 1- второй
		inputs[handle].value = Math.round(values[handle]);//массив инпутов с параметром handle(то есть для каждого импута свое value) его value будет равно
		//Округленное значение изменение ползунка (у 1 инпут - 1 ползунок , у второго - 2 полузунок)
		//и каждый инпут будет принимать значение своего полузнка
		console.log(values)
		console.log(handle)
	});

	const setRangeSlider = (i, value) => {
		let arr = [null, null];
		arr[i] = value;
		console.log(arr);
		sliderRange.noUiSlider.set(arr);
	}

	inputs.forEach((el, index) => {
		el.addEventListener(`change`, (e) => {
			console.log(index);
			setRangeSlider(index, e.currentTarget.value)
		})
	})
}