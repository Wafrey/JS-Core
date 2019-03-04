function dart() {


	/* Za da izbegnem zakachane na event na vseki div element, shte zakachim eventa na glavniq div v sluchaq s id #playBoard*/

	/* on('click' , 'div... ) v sluchaq vtoroto neshto otgovarq za tova che funkciqta sled nego shte q zakachi na vseki pod div v #playboard div-a (tochno tova koeto ni trqbva) */

	$('#playBoard').on('click', 'div', onPlayBoardClick);

	const maxScore = 100;
	const colorMapping = {
		firstLayer: 0,
		secondLayer: 1,
		thirdLayer: 2,
		fourthLayer: 3,
		fifthLayer: 4,
		sixthLayer: 5,
	};

	let isHome = true;

	function onPlayBoardClick(e) {


		// kogato cukna na vutreshen element mi spira izkachaneto nqkolko puti na elementa.

		e.stopPropagation();

		let points = getScore(e.target.id);

		selectPlayer(points);
	}

	function getScore(id) {
		// TODO: Get points

		return +$('#scoreBoard tbody tr')
			.eq(colorMapping[id])
			.children()
			.eq(1)
			.text()
			.split(' ')[0];
	}

	function selectPlayer(score) {

		let selector = '';

		isHome ? selector = '#Home' : selector = '#Away'



		$pointsElement = $(selector)
			.children()
			.eq(0);

		$pointsElement.text((i, t) => Number(t) + score);
	
		let currentPoints = Number($pointsElement.text());
	
		if (currentPoints >= maxScore) {
			// Set coloring
			if (isHome) {
				$('#Home').children().eq(1).css({
					backgroundColor: 'green'
				});

				$('#Away').children().eq(1).css({
					backgroundColor: 'red'
				});
			}else{
				$('#Away').children().eq(1).css({
					backgroundColor: 'green'
				});

				$('#Home').children().eq(1).css({
					backgroundColor: 'red'
				});
			}
			
			// Remove events
			$('#playBoard').off('click');
		}

		isHome = !isHome;
	}
}