var flowPie = new function () {
	var that =  this;

	this.flow = [];
	this.utils = {
		isFlowFinished: false
	};
	this.container;
	this.dataSource;
	this.imagePath = "";
	this.currentItem = {
		order: 0,
		position: {
			X: 0,
			Y: 0
		},
		isLast: false,
		isDone: false
	};
	this.answeredElements = [];

	this.init = function (container, dataSource, imagePath) {
		this.container = container;
		this.dataSource = dataSource;
		this.imagePath = imagePath;
	};

	this.buildFlow = function () {
		this.buildStructure();
		this.setProperties();
		this.createDOMElements();
	};

	this.buildStructure = function () {
		// Reset array
		this.flow = [];
		var maxSortOrder = 0, factor;

		this.utils.windowWidth = $(window).width(); // screen width

		// For desktop/mobile
		if(this.utils.windowWidth >= 800) {
			factor = 245; // 245 = width of each item (150px) + margin of each item (95px)
		}else {
			factor = 145; // 145 = width of each item (100px) + margin of each item (45px)
		}

		this.utils.itemsPerRow = Math.floor(this.utils.windowWidth/factor);
		this.utils.rows = Math.ceil(this.dataSource.length/this.utils.itemsPerRow); // number of rows

		for (var i = 0; i < this.utils.rows; i++) {
			this.flow[i] = [];
			var from = (i*this.utils.itemsPerRow);
			var to = ((i+1)*this.utils.itemsPerRow);

			for (var j = from; j < to; j++) {
				var currentSource = this.dataSource[j];

				if(!_.isUndefined(currentSource)) {
					maxSortOrder = currentSource.sortOrder;
					this.flow[i].push({id: currentSource.id, sortOrder: maxSortOrder, image: currentSource.image, isFake: false});

					// Store answered items
					if(currentSource.isDone) {
						this.answeredElements.push(maxSortOrder);
					}
				}
			}

			// Reverse array's structure for odd rows
			if(i%2 != 0) {
				this.flow[i] = _.sortBy(this.flow[i], function (item) { return -item.sortOrder; });
			}
		}

		// Add last item
		var lastIndex = (this.utils.rows-1);
		var lastRow = this.flow[lastIndex];

		if(lastRow.length == this.utils.itemsPerRow) {
			this.flow.push([]);
			lastIndex = (this.utils.rows-1) + 1;
			lastRow = this.flow[lastIndex];
		}

		this.flow[lastIndex].push({id: 'last', sortOrder: maxSortOrder+1, image: "", isFake: false, isLast: true});

		// Fix
		lastRow = this.flow[lastIndex];
		var difference = this.utils.itemsPerRow - lastRow.length;
		if(lastRow.length < this.utils.itemsPerRow) {
			for (var k = 0; k < difference; k++) {
				maxSortOrder = _.max(lastRow, function (item) { return item.sortOrder; }).sortOrder;
				this.flow[lastIndex].push({id: 'fake', sortOrder: maxSortOrder+1, image: "", isFake: true});
			}
		}

		// Last row is odd
		if(lastIndex%2 != 0) {
			this.flow[lastIndex] = _.sortBy(this.flow[lastIndex], function (item) { return -item.sortOrder; });
		}
	};

	this.setProperties = function () {
		for (var i = 0; i < this.flow.length; i++) {
			var to = (this.flow[i].length-1);

			for (var j = 0; j <= to; j++) {
				// If element is not fake
				if(!this.flow[i][j].isFake) {
					var source = this.getSourceById(this.flow[i][j].id);

					// showShadow property
					if(!_.isUndefined(source)) {
						// If element is current
						if((this.currentItem.order == this.flow[i][j].sortOrder) ||
							(this.answeredElements.indexOf(this.flow[i][j].sortOrder) != -1)) {
							this.flow[i][j].showShadow = false;
						}else {
							// Take showShadow from source
							if(_.isUndefined(source.showShadow) || !source.showShadow) {
								this.flow[i][j].showShadow = false;
							}else if(!_.isUndefined(source.showShadow) && source.showShadow) {
								this.flow[i][j].showShadow = true;
							}
						}
					}

					// isDone property
					if(!_.isUndefined(source)) {
						// If element is already answered
						if(this.answeredElements.indexOf(this.flow[i][j].sortOrder) != -1) {
							this.flow[i][j].isDone = true;
						}else {
							// Take isDone from source
							if(_.isUndefined(source.isDone) || !source.isDone) {
								this.flow[i][j].isDone = false;
							}else if(!_.isUndefined(source.isDone) && source.isDone) {
								this.flow[i][j].isDone = true;
							}
						}
					}

					var arrow = this.getArrowProperties(i, j, to);
					this.flow[i][j].arrowDirection = arrow.direction;
					this.flow[i][j].arrowClass = arrow.class;
				}
			}
		}
	};

	this.createDOMElements = function () {
		var flowBox = $("<div class='circularFlow'></div>");
		flowBox.html("");

		for (var i = 0; i < this.flow.length; i++) {
			var currentFlow = this.flow[i];

			for (var j = 0; j < currentFlow.length; j++) {
				var flowItem = currentFlow[j];

				var item = $("<div class='circularFlow-item'></div>");
				item.attr("data-sourceid", flowItem.id);
				item.attr("data-sortorder", flowItem.sortOrder);
				item.attr("data-flowposition", i + '-' + j);
				item.attr("data-isfake", flowItem.isFake);

				if(!flowItem.isFake) {
					if(!flowItem.isLast) {
						// Validate items without image
						var imgUrl = (flowItem.image != "" && !_.isNull(flowItem.image) && !_.isUndefined(flowItem.image))
										? flowItem.image : "https://placeholdit.imgix.net/~text?txtsize=30&txt=No+Image&w=200&h=200";

						// Main element
						item.css({
							'background-image': 'url(' + imgUrl + ')'
						});

						// Shadow
						var shadow = $("<div class='shadow'></div>");
						if(!flowItem.showShadow) {
							shadow.addClass("inactive");
						}
						item.append(shadow);

						// Check
						var check = $("<i class='fa fa-check check'></i>");
						if(flowItem.isDone) {
							check.addClass("active");
						}
						item.append(check);

						// Arrow
						if(flowItem.arrowDirection != "") {
							var arrow = $("<i class='" + flowItem.arrowClass + "'></i>");
							if(flowItem.isDone) {
								arrow.addClass("green");
							}
							item.append(arrow);
						}
					}else {
						item.addClass("end");

						var endText = $("<span class='endText inactive'>END</span>");
						var badge = $("<img class='badge inactive' src='" + this.imagePath + "badge_check.png' alt='END' />");

						if(!this.utils.isFlowFinished) {
							var shadow = $("<div class='shadow'></div>");
							item.append(shadow);
						}else {
							endText.removeClass("inactive").addClass("active");
							badge.removeClass("inactive").addClass("active");
						}

						item.append(endText).append(badge);
					}
				}else {
					item.addClass("fake");
				}

				flowBox.append(item);
			}
		}

		this.container.append(flowBox);
	};

	this.getArrowProperties = function (i, j, to) {
		var arrow = {};

		// Odd row
		if(i%2 != 0) {
			if(j != 0) {
				// Arrow direction is left
				arrow.direction = "left";
				arrow.class = "fa fa-long-arrow-left arrow arrowLeft";
			}else {
				// Arrow direction is down (first item of current row)
				arrow.direction = "down";
				arrow.class = "fa fa-long-arrow-down arrow arrowDown";
			}
		}else {
			if(j != to) {
				// Arrow direction is right
				arrow.direction = "right";
				arrow.class = "fa fa-long-arrow-right arrow arrowRight";
			}else {
				// Arrow direction is down (last item of current row)
				arrow.direction = "down";
				arrow.class = "fa fa-long-arrow-down arrow arrowDown";
			}
		}

		return arrow;
	};

	this.getSourceById = function (id) {
		return _.find(this.dataSource, function (item) { return item.id == id; });
	};

	this.goNextElement = function () {
		// If flow is not finished
		if(!this.utils.isFlowFinished) {

			// Light arrow
			var current = $(".circularFlow-item[data-sortorder="+this.currentItem.order+"]");
			current.find(".arrow").addClass("green");

			// Order
			var order = this.currentItem.order;
			this.currentItem.order = order + 1;

			// Position
			var element = $(".circularFlow-item[data-sortorder="+this.currentItem.order+"]");
			var position = element.data("flowposition").split("-");
			this.currentItem.position = {
				X: parseInt(position[0]),
				Y: parseInt(position[1])
			};
			this.currentItem.isDone = false;

			// Light element
			element.find(".shadow").addClass("inactive");

			// Is last
			if(element.data("sourceid") == "last") {
				this.currentItem.isLast = true;

				// Show END
				element.find(".endText").removeClass("inactive").addClass("active");
				element.find(".badge").removeClass("inactive").addClass("active");

				// Finish flow
				this.utils.isFlowFinished = true;
			}else {
				// Update showShadow property
				this.flow[this.currentItem.position.X][this.currentItem.position.Y].showShadow = false;
			}

		}
	};

	this.answerCurrentElement = function () {
		// If flow is not finished
		if(!this.utils.isFlowFinished) {

			// Show check mark
			var element = $(".circularFlow-item[data-sortorder="+this.currentItem.order+"]");
			element.find(".check").addClass("active");

			// Position (just in case)
			var position = element.data("flowposition").split("-");
			this.currentItem.position = {
				X: parseInt(position[0]),
				Y: parseInt(position[1])
			};

			// Update isDone property
			this.flow[this.currentItem.position.X][this.currentItem.position.Y].isDone = true;

			// Store answered item
			this.answeredElements.push(this.currentItem.order);

		}
	};

	this.finishFlow = function () {
		// If flow is not finished
		if(!this.utils.isFlowFinished) {

			// Finish flow
			this.utils.isFlowFinished = true;
			this.answeredElements = [];

			for (var i = 0; i < this.flow.length; i++) {
				for (var j = 0; j < this.flow[i].length; j++) {
					this.flow[i][j].showShadow = false;
					this.flow[i][j].isDone = true;
					this.answeredElements.push(this.flow[i][j].sortOrder);
				}
			}

			this.container.find(".circularFlow-item").each(function () {
				var element = $(this);

				element.find(".shadow").addClass("inactive");
				element.find(".check").addClass("active");
				element.find(".arrow").addClass("green");

				if(element.data("sourceid") == 'last') {
					element.find(".endText").removeClass("inactive").addClass("active");
					element.find(".badge").removeClass("inactive").addClass("active");
				}
			});

		}
	};

	this.callbackOnClickElement = function (element, event) { };

	$(document).ready(function (evt) {
		// When screen resizes build the flow again
		$(window).on("resize", function () {
			that.flow = [];
			that.container.html("");

			that.buildFlow();
		});

		$("body").on("click", ".circularFlow-item", function (evt) {
			var element = $(this);

			if(!element.data("isfake")) {
				that.callbackOnClickElement(element, evt);
			}
		});
	});
};
