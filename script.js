var items = [
	{id: 1, sortOrder: 0, isDone: false, showShadow: false, image: "https://placeimg.com/200/200/animals/1"},
	{id: 2, sortOrder: 1, isDone: false, showShadow: true, image: "https://placeimg.com/200/200/animals/2"},
	{id: 3, sortOrder: 2, isDone: false, showShadow: true, image: "https://placeimg.com/200/200/animals/3"},
	{id: 4, sortOrder: 3, isDone: false, showShadow: true, image: "https://placeimg.com/200/200/animals/4"},
	{id: 5, sortOrder: 4, isDone: false, showShadow: true, image: "https://placeimg.com/200/200/animals/5"},
	{id: 6, sortOrder: 5, isDone: false, showShadow: true, image: "https://placeimg.com/200/200/animals/6"},
	{id: 7, sortOrder: 6, isDone: false, showShadow: true, image: "https://placeimg.com/200/200/animals/7"},
	{id: 8, sortOrder: 7, isDone: false, showShadow: true, image: "https://placeimg.com/200/200/animals/8"},
	{id: 9, sortOrder: 8, isDone: false, showShadow: true, image: "https://placeimg.com/200/200/animals/9"},
	{id: 10, sortOrder: 9, isDone: false, showShadow: true, image: "https://placeimg.com/200/200/animals/10"},
	{id: 11, sortOrder: 10, isDone: false, showShadow: true, image: "https://placeimg.com/200/200/animals/11"},
	{id: 12, sortOrder: 11, isDone: false, showShadow: true, image: "https://placeimg.com/200/200/animals/12"},
	{id: 13, sortOrder: 12, isDone: false, showShadow: true, image: "https://placeimg.com/200/200/animals/13"},
	{id: 14, sortOrder: 13, isDone: false, showShadow: true, image: "https://placeimg.com/200/200/animals/14"},
	{id: 15, sortOrder: 14, isDone: false, showShadow: true, image: "https://placeimg.com/200/200/animals/15"}
];

$(document).ready(function (evt) {
	flowPie.init($('body'), items, '');
	flowPie.buildFlow();

	flowPie.callbackOnClickElement = function (element, event) {
		flowPie.answerCurrentElement();
		flowPie.goNextElement();
	};
});

