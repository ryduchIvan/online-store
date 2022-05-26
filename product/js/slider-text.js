const sliderTextBox = document.querySelector(`.slider__text_box`)
const sliderTextLine = document.querySelector(`.slider__text_line`);
const sliderTextItem = document.querySelectorAll(`.slider__text_item`);
const sliderTextButtons = document.querySelector(`.slider__text_buttons`);

const sliderHeightOne = document.querySelector(`.slider__text_item_one`);
const sliderHeightTwo = document.querySelector(`.slider__text_item_two`);
const sliderHeightThree = document.querySelector(`.slider__text_item_three`);
const sliderHeightFour = document.querySelector(`.slider__text_item_four`);

let widthSliderText;
let countSliderText = 0;

function widthSliderItem() {
	widthSliderText = sliderTextBox.offsetWidth;
	sliderTextItem.forEach(function (item) {
		item.style.width = widthSliderText;
	})
	sliderTextLine.style.width = widthSliderText * sliderTextItem.length + 'px';
}
widthSliderItem();
console.log(sliderTextButtons.childNodes);
sliderTextButtons.childNodes[1].addEventListener(`click`, function (event) {
	countSliderText = 0;
	event.target.classList.add(`show-after`);
	sliderTextButtons.childNodes[3].classList.remove(`show-after`);
	sliderTextButtons.childNodes[5].classList.remove(`show-after`);
	sliderTextButtons.childNodes[7].classList.remove(`show-after`);
	rollSliderText();
	sliderTextBox.style.height = sliderHeightOne.offsetHeight + 'px';
})
sliderTextButtons.childNodes[3].addEventListener(`click`, function (event) {
	countSliderText = 1;
	event.target.classList.add(`show-after`);
	sliderTextButtons.childNodes[1].classList.remove(`show-after`);
	sliderTextButtons.childNodes[5].classList.remove(`show-after`);
	sliderTextButtons.childNodes[7].classList.remove(`show-after`);
	rollSliderText();
	sliderTextBox.style.height = sliderHeightTwo.offsetHeight + 'px';
})
sliderTextButtons.childNodes[5].addEventListener(`click`, function (event) {
	countSliderText = 2;
	event.target.classList.add(`show-after`);
	sliderTextButtons.childNodes[1].classList.remove(`show-after`);
	sliderTextButtons.childNodes[3].classList.remove(`show-after`);
	sliderTextButtons.childNodes[7].classList.remove(`show-after`);
	rollSliderText();
	sliderTextBox.style.height = sliderHeightThree.offsetHeight + 'px';
})
sliderTextButtons.childNodes[7].addEventListener(`click`, function (event) {
	countSliderText = 3;
	event.target.classList.add(`show-after`);
	sliderTextButtons.childNodes[1].classList.remove(`show-after`);
	sliderTextButtons.childNodes[3].classList.remove(`show-after`);
	sliderTextButtons.childNodes[5].classList.remove(`show-after`);
	rollSliderText();
	sliderTextBox.style.height = sliderHeightFour.offsetHeight + 'px';
})

function rollSliderText() {
	sliderTextLine.style.transform = 'translate(-' + countSliderText * widthSliderText + 'px)';
}

//height

//let heightSliderText;
//const sliderTextContainer = document.querySelector(`.slider__text_container`);
//function height() {
//	sliderTextItem.forEach(function (elem) {
//		heightSliderText = elem.offsetHeight;
//		console.log(heightSliderText);
//	})
//	sliderTextBox.style.height = heightSliderText + 'px';
//}