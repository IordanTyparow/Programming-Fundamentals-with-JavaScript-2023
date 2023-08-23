function poolDay(input){
    let countFood = Number(input[0]);
    let taxs = Number(input[1]);
    let onelounger = Number(input[2]);
    let oneUmbrella = Number(input[3]);

    let summTaxs = countFood * taxs;
    let discount = Math.ceil(countFood * 0.75);
    let summLounger = discount * onelounger;
    let secondDiscount = Math.ceil(countFood * 0.50);
    let summUmbrella = secondDiscount * oneUmbrella;

    let totalPrice = summTaxs + summLounger + summUmbrella;
    
    console.log((totalPrice).toFixed(2) + " lv.");
}

poolDay(["21", "5.50", "4.40", "6.20"]);
poolDay(["50", "6", "8", "4"]);
poolDay(["100", "8", "6", "4"]);


