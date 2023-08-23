function agency(input) {

    let name = input[0];
    let oldTicets = Number(input[1]);
    let kidTicets = Number(input[2]);
    let netnaPrice = Number(input[3]);
    let taxs = Number(input[4]);

    let netnaKids = netnaPrice * 0.30;
    let priceForOldTicets = netnaPrice + taxs;
    let kidTaxs = netnaKids + taxs
    
    let totalPrice = (kidTicets * kidTaxs) + (oldTicets * priceForOldTicets);
    let win = totalPrice * 0.20;
    
    console.log(`The profit of your agency from ${name} tickets is ${win.toFixed(2)} lv.`);
}

agency([
    "WizzAir",
    "15",
    "5",
    "120",
    "40"
]);