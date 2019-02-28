function attachEvents() {
	$('#items li').click(selectTown);

	let towns = [];

	function selectTown() {

		let currentClickedTown = $(this);

		if (currentClickedTown.attr('data-selected') === 'true') {
			currentClickedTown.attr('data-selected', 'false');
			currentClickedTown.css('background', '');
			towns.splice(towns.indexOf(currentClickedTown.text()), 1)

		} else {
			currentClickedTown.attr('data-selected', 'true');
			currentClickedTown.css('background', '#DDD')
			towns.push(currentClickedTown.text());
		}
	}

	$('#showTownsButton').click(showTowns);

	function showTowns() {

		$('#selectedTowns').text(towns.join(', '))
	}
}