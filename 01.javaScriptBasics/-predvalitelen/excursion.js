function excrusion(input) {

    let countPeople = Number(input[0]);
    let cartFortransport = Number(input[1]);
    let countCarts = Number(input[2]);
    let biletForMozei = Number(input[3]);

    let nights = cartFortransport * 20;
    let cartForTransportPrice = countCarts * 1.60;
    let mozeiBiletsPrice = biletForMozei * 6;

    let totalPrice = nights + cartForTransportPrice + mozeiBiletsPrice;

    let totalSummForGroup = totalPrice * countPeople;

    let discount = totalSummForGroup * 1.25;

    console.log(discount.toFixed(2));
}

excrusion(["20", "14", "30", "6"]);