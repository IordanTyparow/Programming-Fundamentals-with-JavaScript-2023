function kongVSgozilla(input) {

    let buget = Number(input[0]);
    let satics = Number(input[1]);
    let onePriceDress = Number(input[2]);

    let sumForDecor = buget * 0.10;
    let sumForDress = satics * onePriceDress;

    if (satics > 150) {
        let discount = 0;
        discount = sumForDress * 0.10;
        sumForDress = Math.abs(discount - sumForDress);
    }

    let totalPriceForTheFilm = sumForDecor + sumForDress;

    if (totalPriceForTheFilm <= buget) {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${(buget - totalPriceForTheFilm).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${(totalPriceForTheFilm - buget).toFixed(2)} leva more.`);
    }
}
kongVSgozilla(["9587.88",
    "222",
    "55.68"])

