/*jslint browser : true, devel : true */
/* global document, requestAnimationFrame */

document.onreadystatechange = function () {
	'use strict';
	/*
	 * Fade in and out animation by chrisbuttery
	 * Github - https://github.com/chrisbuttery
	 */
	function fadeIn(el) {
		el.style.opacity = 0;
		el.style.display = "block";

		(function fade() {
			var val = parseFloat(el.style.opacity);
			if (!((val += 0.1) >= 1.1)) {
				el.style.opacity = val;
				requestAnimationFrame(fade);
			}
		}());
	}

	function fadeOut(el) {
		(function fade() {
			var val = parseFloat(el.style.opacity);
			if ((val -= 0.1) == 0) {
				el.style.opacity = 0;
				el.style.display = "none";
			} else {
				el.style.opacity = val;
				requestAnimationFrame(fade);
			}
		}());
	}

	/*
	 *	Get the value to calculate resistance
	 * @return color calue
	 */

	function getValue(value) {
		switch (value) {
		case "Black":
			return 0;
		case "Brown":
			return 1;
		case "Red":
			return 2;
		case "Orange":
			return 3;
		case "Yellow":
			return 4;
		case "Green":
			return 5;
		case "Blue":
			return 6;
		case "Violet":
			return 7;
		case "Grey":
			return 8;
		case "White":
			return 9;
		}
	}

	/*
	 *	Calculate tolerance value
	 * @return tolerance
	 */

	function getTolerance(tol) {
		switch (tol) {
		case "Gold":
			return 5;
		case "Silver":
			return 10;
		case "Transparent":
			return 20;
		}
	}

	function convert(value) {
		if (value >= 1000 && value <= 999999) {
    	value = value / 1000;
      value = value + " K";
   	} else if (value >= 1000000 && value <= 999999999) {
      value = value / 1000000;
      value = value + " M";
   	} else if (value >= 1000000000 && value <= 99999999999) {
      value = value / 1000000000;
      value = value + " G";
   	}

		return value;
	}

	/*
	 *	Waiting for the ready state of the browser
	 * This is to make sure all the elements are loaded in the DOM
	 */

	if (document.readyState === "complete") {

		// Initialise all the required variables
		var btn = document.querySelectorAll(".btn"), result = document.querySelector('#value'), tolerance = document.querySelector('#tolerance'), first, second, third, fourth, resistance = 0;

		/*
		 *	Button click event listeners
		 *	Keeps track of the button click.
		 */
		btn.forEach(function (btn) {
			btn.addEventListener("click", function (e) {
				e.stopPropagation();
				var sibling = btn.nextElementSibling,
					firstVisible = document.querySelector('.visible'),
					dropDown;

				/*
				 * Remove the visible class if an element is already in the DOM
				 */
				if (firstVisible) {
					fadeOut(firstVisible);
					firstVisible.classList.remove("visible");
				}

				if (!sibling.classList.contains("visible")) {
					fadeIn(sibling);
					sibling.classList.add("visible");
				} else {
					fadeOut(sibling);
					sibling.classList.remove("visible");
				}

				/*
				 * Click event for the List items
				 */
				dropDown = document.querySelector('.visible');

				dropDown.addEventListener("click", function (e) {
					if (e.target.nodeName === 'LI') {
						var parent = e.target.parentElement.previousElementSibling;

						if (parent.classList.contains('first')) {
							first = getValue(e.target.innerHTML);
							if (first == 0) {
								return false;
							}
						}

						if (parent.classList.contains('second')) {
							second = getValue(e.target.innerHTML);
						}

						if (parent.classList.contains('third')) {
							third = getValue(e.target.innerHTML);
						}

						if (parent.classList.contains('fourth')) {
							fourth = getTolerance(e.target.innerHTML);
						}

						if (e.target.innerHTML === "Yellow" || e.target.innerHTML === "White" || e.target.innerHTML === "Transparent") {
							parent.style.color = "black";
						} else {
							parent.style.color = "#fff";
						}
						parent.classList.add('4-band-set');

						parent.style.backgroundColor = e.target.innerHTML;

						if (first !== undefined && second !== undefined && third !== undefined) {
							var addNum = first + '' + second, power = 10**third;
							resistance = convert(addNum * power);

							result.innerHTML = resistance;

							if (fourth != undefined) {
								tolerance.innerHTML = fourth + "%";
							}
						}
					}
				});
			});
		});

		document.addEventListener("click", function () {
			var visible = document.querySelector(".visible");

			if (visible) {
				fadeOut(visible);
				visible.classList.remove("visible");
			}
		});

	}
};
