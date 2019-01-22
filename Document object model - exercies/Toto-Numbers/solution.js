function solve() {

	let numbersInput = [];

	let numberInputDiv = document.getElementsByTagName('button');

	numberInputDiv[0].addEventListener('click', startLottery);

	function startLottery() {

		let givenNumbers = document.getElementsByTagName('input')[0];

		let getInput = givenNumbers.value.split(' ');
		numbersInput = getInput.map(Number);

		let enoughNumbers = numbersInput.length == 6;
		let inRange = numbersInput.every(isBelowThreshold);
		let biggerThenZero = numbersInput.every(isAboveThreshold);

		if (enoughNumbers == true && inRange == true && biggerThenZero == true) {

			CreateNumDiv();
			givenNumbers.setAttribute("disabled", "disabled");
			numberInputDiv[0].setAttribute("disabled", "disabled");
		}
	}

	function isBelowThreshold(currentValue) {

		return currentValue < 49;
	}

	function isAboveThreshold(currentValue) {

		return currentValue > 0;
	}

	function CreateNumDiv() {

		let numbersDiv = document.getElementById('allNumbers');

		for (let index = 1; index <= 49; index++) {

			let numDiv = document.createElement('div');
			numDiv.setAttribute('class', 'numbers');
			numDiv.innerText = index;
			let included = numbersInput.includes(index);
			if (included) {
				numDiv.style.backgroundColor = 'orange';
			}

			numbersDiv.appendChild(numDiv);
		}
	}


}