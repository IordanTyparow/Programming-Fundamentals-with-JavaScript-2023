function flowers(input) {
    let magnoli = Number(input[0]);
    let zumbioli = Number(input[1]);
    let rose = Number(input[2]);
    let cactus = Number(input[3]);
    let PriceForGift = Number(input[4]);

    let discount = 5 / 100;

    let summ = magnoli * 3.25 + zumbioli * 4 + rose * 3.5 + cactus * 8;
    let taxes = Math.abs(summ * discount - summ);
    let totalPrice = Math.abs(PriceForGift - taxes);

    if (taxes >= PriceForGift){
        console.log(`She is left with ${Math.floor(totalPrice)} leva.`)
    } else {
        console.log(`She will have to borrow ${Math.ceil(totalPrice)} leva.`)
    }

}

flowers(["15", "7", "5", "10", "100"]);

