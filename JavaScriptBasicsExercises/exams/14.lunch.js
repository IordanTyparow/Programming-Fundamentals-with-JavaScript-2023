function lunch(input) {

    let easterBread = Number(input[0]);
    let eggs = Number(input[1]);
    let kilogramsCookie = Number(input[2]);

    let totalPriceEasterBread = easterBread * 3.20;
    let totalPriceEggs = eggs * 4.35;
    let totalPriceCookie = kilogramsCookie * 5.40;

    let paintPrice = eggs * 12 * 0.15;

    let totalPrice = totalPriceEasterBread + totalPriceEggs + totalPriceCookie + paintPrice;
    console.log(totalPrice.toFixed(2));
}

lunch(["3", "2", "3"]);