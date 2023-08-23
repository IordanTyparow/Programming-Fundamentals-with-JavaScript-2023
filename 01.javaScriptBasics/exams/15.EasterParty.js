function easterParty(input) {

    let humans = Number(input[0]);
    let cuverFor1Human = Number(input[1]);
    let buged = Number(input[2]);

    if (humans >= 10 && humans <= 15) {
        cuverFor1Human *= 0.85;
    } else if (humans > 15 && humans <= 20) {
        cuverFor1Human *= 0.80;
    } else if (humans > 20) {
        cuverFor1Human *= 0.75;
    }

    let cakeDiscount = buged * 0.10;
    let totalPriceForParty = (humans * cuverFor1Human) + cakeDiscount;

    if (buged >= totalPriceForParty) {
        console.log(`It is party time! ${(buged - totalPriceForParty).toFixed(2)} leva left.`);
    } else {
        console.log(`No party! ${(totalPriceForParty - buged).toFixed(2)} leva needed.`);
    }

}
easterParty(["18", "30", "450"]);
