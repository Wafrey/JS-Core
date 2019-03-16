function cardDeckBuilder(selector) {

    let suits = {

        'H': '\u2665',
        'C': '\u2663',
        'D': '\u2666',
        'S': '\u2660'
    };

    let cards = [];

    return {
        addCard(face, suit) {

            $(selector).append($('<div class="card"></div>').text(`${face} ${suits[suit]}`).on('click', reverse));
            cards.push({
                face: face,
                suit: suits[suit]
            });
        }
    };

    function reverse() {
        cards.reverse()
        $(selector).empty()

        for (const card of cards) {
            $(selector).append($('<div class="card"></div>').text(`${card.face} ${card.suit}`).on('click', reverse));
        }
    }
}