function tenis(input) {

    let tennisRocetPrice = Number(input[0]);
    let countTennisRocet = Number(input[1]);
    let shoesPrice = Number(input[2]);

    let rocetPrice = countTennisRocet * tennisRocetPrice;
    let oneShoesPrice = tennisRocetPrice / 6;

    let totalShoesPrice = shoesPrice * oneShoesPrice;

    let leftEquipmants = (rocetPrice + totalShoesPrice) * 0.2

    let avgPrice = rocetPrice + totalShoesPrice + leftEquipmants;

    console.log(`Price to be paid by Djokovic ${Math.floor(avgPrice / 8)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(avgPrice * 7 / 8)}`);
}

tenis(["850", "4", "2"]);