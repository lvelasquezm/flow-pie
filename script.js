var items = [
	{id: 1, sortOrder: 0, showShadow: false, isAnswered: false, image: "http://lorempixel.com/200/200/food/0"},
	{id: 2, sortOrder: 1, showShadow: true, isAnswered: false, image: "http://lorempixel.com/200/200/food/1"},
	{id: 3, sortOrder: 2, showShadow: true, isAnswered: false, image: "http://lorempixel.com/200/200/food/2"},
	{id: 4, sortOrder: 3, showShadow: true, isAnswered: false, image: "http://lorempixel.com/200/200/food/3"},
	{id: 5, sortOrder: 4, showShadow: true, isAnswered: false, image: "http://lorempixel.com/200/200/food/4"},
	{id: 6, sortOrder: 5, showShadow: true, isAnswered: false, image: "http://lorempixel.com/200/200/food/5"},
	{id: 7, sortOrder: 6, showShadow: true, isAnswered: false, image: "http://lorempixel.com/200/200/food/6"},
	{id: 8, sortOrder: 7, showShadow: true, isAnswered: false, image: "http://lorempixel.com/200/200/food/7"},
	{id: 9, sortOrder: 8, showShadow: true, isAnswered: false, image: "http://lorempixel.com/200/200/food/8"},
	{id: 10, sortOrder: 9, showShadow: true, isAnswered: false, image: "http://lorempixel.com/200/200/food/9"},
	{id: 11, sortOrder: 10, showShadow: true, isAnswered: false, image: "http://lorempixel.com/200/200/food/10"},
	{id: 12, sortOrder: 11, showShadow: true, isAnswered: false, image: "http://lorempixel.com/200/200/food/0"},
	{id: 13, sortOrder: 12, showShadow: true, isAnswered: false, image: "http://lorempixel.com/200/200/food/1"},
	{id: 14, sortOrder: 13, showShadow: true, isAnswered: false, image: "http://lorempixel.com/200/200/food/2"},
	{id: 15, sortOrder: 14, showShadow: true, isAnswered: false, image: "http://lorempixel.com/200/200/food/3"},
	/*{id: 16, sortOrder: 15, showShadow: true, isAnswered: false, image: "http://lorempixel.com/200/200/food/4"},
	{id: 17, sortOrder: 16, showShadow: true, isAnswered: false, image: "http://lorempixel.com/200/200/food/5"},
	{id: 18, sortOrder: 17, showShadow: true, isAnswered: false, image: "http://lorempixel.com/200/200/food/6"},
	{id: 19, sortOrder: 18, showShadow: true, isAnswered: false, image: "http://lorempixel.com/200/200/food/7"},
	{id: 20, sortOrder: 19, showShadow: true, isAnswered: false, image: "http://lorempixel.com/200/200/food/8"},
	{id: 21, sortOrder: 20, showShadow: true, isAnswered: false, image: "http://lorempixel.com/200/200/food/9"},
	{id: 22, sortOrder: 21, showShadow: true, isAnswered: false, image: "http://lorempixel.com/200/200/food/10"},
	{id: 23, sortOrder: 22, showShadow: true, isAnswered: false, image: "http://lorempixel.com/200/200/food/0"},
	{id: 24, sortOrder: 23, showShadow: true, isAnswered: false, image: "http://lorempixel.com/200/200/food/1"},
	{id: 25, sortOrder: 24, showShadow: true, isAnswered: false, image: "http://lorempixel.com/200/200/food/2"},
	{id: 26, sortOrder: 25, showShadow: true, isAnswered: false, image: "http://lorempixel.com/200/200/food/3"},
	{id: 27, sortOrder: 26, showShadow: true, isAnswered: false, image: "http://lorempixel.com/200/200/food/4"},
	{id: 28, sortOrder: 27, showShadow: true, isAnswered: false, image: "http://lorempixel.com/200/200/food/5"},
	{id: 29, sortOrder: 28, showShadow: true, isAnswered: false, image: "http://lorempixel.com/200/200/food/6"},
	{id: 30, sortOrder: 29, showShadow: true, isAnswered: false, image: "http://lorempixel.com/200/200/food/7"},
	{id: 31, sortOrder: 30, showShadow: true, isAnswered: false, image: "http://lorempixel.com/200/200/food/8"},
	{id: 32, sortOrder: 31, showShadow: true, isAnswered: false, image: "http://lorempixel.com/200/200/food/9"},
	{id: 33, sortOrder: 32, showShadow: true, isAnswered: false, image: "http://lorempixel.com/200/200/food/10"},
	{id: 34, sortOrder: 33, showShadow: true, isAnswered: false, image: "http://lorempixel.com/200/200/food/0"},
	{id: 35, sortOrder: 34, showShadow: true, isAnswered: false, image: "http://lorempixel.com/200/200/food/1"},
	{id: 36, sortOrder: 35, showShadow: true, isAnswered: false, image: "http://lorempixel.com/200/200/food/2"},
	{id: 37, sortOrder: 36, showShadow: true, isAnswered: false, image: "http://lorempixel.com/200/200/food/3"},
	{id: 38, sortOrder: 37, showShadow: true, isAnswered: false, image: "http://lorempixel.com/200/200/food/4"},
	{id: 39, sortOrder: 38, showShadow: true, isAnswered: false, image: "http://lorempixel.com/200/200/food/5"},
	{id: 40, sortOrder: 39, showShadow: true, isAnswered: false, image: "http://lorempixel.com/200/200/food/6"},
	{id: 41, sortOrder: 40, showShadow: true, isAnswered: false, image: "http://lorempixel.com/200/200/food/7"},
	{id: 42, sortOrder: 41, showShadow: true, isAnswered: false, image: "http://lorempixel.com/200/200/food/8"},
	{id: 43, sortOrder: 42, showShadow: true, isAnswered: false, image: "http://lorempixel.com/200/200/food/9"},
	{id: 44, sortOrder: 43, showShadow: true, isAnswered: false, image: "http://lorempixel.com/200/200/food/10"},
	{id: 45, sortOrder: 44, showShadow: true, isAnswered: false, image: "http://lorempixel.com/200/200/food/0"},*/
];

$(document).ready(function (evt) {
	flowPie.init($("body"), items, '');
	flowPie.buildFlow();

	flowPie.callbackOnClickElement = function (element, event) {
		flowPie.goNextElement();
	};
});

