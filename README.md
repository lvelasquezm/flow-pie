# flow-pie
Simple HTML5+CSS3+Javascript game, ideal for quizzes.

# Summary
FlowPie is an interactive game which can be used for different purposes. It creates route experience which basically allows users to go 
throught different steps between a set of items defined for the game.

# Features
* Cross browser
* Resposive UI
* Beautiful UI/UX
* Easy initialization
* Can be used for multiple games (quizzes, learning games, etc.)

# Usage
* Add the external libraries references into your HTML page: [jQuery](https://jquery.com/), [Underscore.js](http://underscorejs.org/) 
and [FontAwesome](https://fontawesome.com/)
```html
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.min.css">
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js"></script>
```
* Add the internal resources references into your HTML page: ```flowPie.css``` and ```flowPie.js```
```html
<link rel="stylesheet" href="flowPie.css">
<script src="flowPie.js"></script>
```
* Initialize your flow items and the flow itself:
```javascript
/* Initialize the items of the flow */
var items = [
  {id: 1, sortOrder: 0, showShadow: false, isAnswered: false, image: "https://placeimg.com/200/200/animals/1"},
  {id: 2, sortOrder: 1, showShadow: true, isAnswered: false, image: "https://placeimg.com/200/200/animals/2"},
  {id: 3, sortOrder: 2, showShadow: true, isAnswered: false, image: "https://placeimg.com/200/200/animals/3"},
  {id: 4, sortOrder: 3, showShadow: true, isAnswered: false, image: "https://placeimg.com/200/200/animals/4"},
  {id: 5, sortOrder: 4, showShadow: true, isAnswered: false, image: "https://placeimg.com/200/200/animals/5"}
]

/* Initialize the flow */
flowPie.init($('body'), items, ''); // Init the flow passing the DOM element container, the flow items and the path where the badge image is located
flowPie.buildFlow(); // Build the flow

/* Initialize the callback to be executed when clicking any element in the flow */
flowPie.callbackOnClickElement = function (element, event) {
  // Make awesome stuffs here, like open a modal with a question
  // ...
  
  // Set the current element as done and move to the next
  flowPie.answerCurrentElement();
  flowPie.goNextElement();
};
```

# How it looks
## Flow after first initialization
![Flow Pie](https://i.imgur.com/oCpH7w5.jpg)
## Flow after having set as done a few items
![Flow Pie](https://i.imgur.com/Uyohn1e.jpg)
## Flow finished
![Flow Pie](https://i.imgur.com/eWOg65m.jpg)

# Reference
## Items
* __id__ ```{Number}```: Unique identifier of each flow item
* __sortOrder__ ```{Number}```: Defines the order of the item in the flow
* __isDone__ ```{Boolean}```: Indicates if the flow item is done
* __showShadow__ ```{Boolean}```: Defines if the DOM element representing the item will be covered by a shadow (represents that the item isn't done)
* __image__ ```{String}```: Image URL of the item

## flowPie
### Properties
* __currentItem__ ```{Object}```: Represent the current active item of the flow
  * __isDone__ ```{Boolean}```: Indicates if the item is done
  * __isLast__ ```{Boolean}```: Indicates if the item is the last in the flow
  * __order__ ```{Number}```: Indicates the order of the item in the flow
  * __position__ ```{Object}```: Indicates the ```X,Y``` position of the item in the flow
* __utils__ ```{Object}```: Utility object in the flow
  * __isFlowFinished__ ```{Boolean}```: Indicates if flow is finished
  * __rows__ ```{Number}```: Indicates the number of rows within the flow
  * __itemsPerRow__ ```{Number}```: Indicates the number of items in a row in the flow
  * __windowWidth__ ```{Number}```: Indicates the current window width
  
## Methods
* __init__ ```function(container, dataSource, imagePath)```: Initializes the flow with 3 parameters
  * __container__: DOM element that will contain the flow
  * __dataSource__: Data source of items that the flow will contain
  * __imagePath__: Path wehere the bagde image/icon is located (badge icon is shown where the flow is finished) 
* __buildFlow__ ```function()```: Build all the DOM elements that shapes the flow
* __callbackOnClickElement__ ```function(element, event)```: Callback to be executed when clicking any element in the flow
* __answerCurrentElement__ ```function()```: Set the current element as done. This means that the current DOM element will not have the shadow any more and will have the check icon active
* __goNextElement__ ```function()```: Move to the next element in the flow (calling this method will update the ```currentItem``` property)
