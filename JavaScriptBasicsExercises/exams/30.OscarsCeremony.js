function ceremony(input) {

    let price = Number(input[0]);

    let statuetessPrice = price * 0.70;
    let ketPrice = statuetessPrice * 0.85; 
    let musicPrice = ketPrice * 1 / 2;

    let totalPrice = price + statuetessPrice + ketPrice + musicPrice;

    console.log(totalPrice.toFixed(2));
}

ceremony(["3500"]);