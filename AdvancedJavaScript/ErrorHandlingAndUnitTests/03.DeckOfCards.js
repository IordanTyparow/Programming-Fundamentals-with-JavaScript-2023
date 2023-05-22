function deckOfCard(cards) {
    let result = [];
    let invalidCards = [];

    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const validSuits = ['S', 'H', 'D', 'C'];

    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const face = card.slice(0, -1);
        const suit = card.slice(-1);

        const suitMap = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663',
        }

        if (!validFaces.includes(face) || !validSuits.includes(suit)) {
            invalidCards.push(`Invalid card: ${face + suit}`);
            break;
        } else {
            result.push(`${face}${suitMap[suit]}`);
        }
    }
    if (invalidCards.length > 0) {
        console.log(invalidCards.join(' '));  
        result = [];
    } else if (result.length > 0) {
        console.log(result.join(' '));
    }
}

deckOfCard(['5S', '3D', 'QD', '1C']);
deckOfCard(['AS', '10D', 'KH', '2C']);