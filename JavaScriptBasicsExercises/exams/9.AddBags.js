function bags(input) {

    let bagasse = Number(input[0]);
    let kilogramsBagasse = Number(input[1]);
    let days = Number(input[2]);
    let countBags = Number(input[3]);
   
    let totalBags = 0;
    let finalPrice = 0;

    if (kilogramsBagasse < 10) {
        totalBags = bagasse * 0.20;
    } else if (kilogramsBagasse >= 10 && kilogramsBagasse <= 20) {
        totalBags = bagasse * 0.50;
    }  else if (kilogramsBagasse > 20) {
        totalBags = bagasse;
    }

    let increase = 0;

    if (days > 30) {
        increase = totalBags * 1.10;
    } else if (days >= 7 && days <= 30) {
        increase = totalBags * 1.15;
    }  else if (days < 7) {
        increase = totalBags * 1.40;
    }

    finalPrice = increase * countBags;
    console.log(`The total price of bags is: ${finalPrice.toFixed(2)} lv.`);
}

bags(["30",
"18",
"15",
"2"])















