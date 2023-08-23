function boat(input) {

    let budet = Number(input[0]);
    let season = input[1];
    let fishermen = Number(input[2]);

    let totalPrice = 0;

    switch (season) {
        case "Spring": totalPrice = 3000; break;
        case "Summer": 
        case "Autumn": totalPrice = 4200; break;
        case "Winter": totalPrice = 2600; break;
    }

    if (fishermen <= 6){
        totalPrice = totalPrice * 0.90;
    } else if (fishermen <= 11){
        totalPrice = totalPrice * 0.85;
    } else if (fishermen >= 12){
        totalPrice = totalPrice * 0.75;
    }

    if (fishermen % 2 == 0 && season !== "Autumn"){
        totalPrice = totalPrice * 0.95;
    }
    
    if (budet >= totalPrice){
        totalPrice =budet - totalPrice;
        console.log(`Yes! You have ${totalPrice.toFixed(2)} leva left.`);
    } else {
        totalPrice = totalPrice - budet;
       console.log(`Not enough money! You need ${totalPrice.toFixed(2)} leva.`);
    }
}

boat(["2000", "Winter", "13"]);

