function tickets(input) {

    let buget = Number(input[0]);
    let category = input[1];
    let people = Number(input[2]);

    let totalPrice = 0;
    let ticet = 0; 

    if (people >= 1 && people <= 4) {
        totalPrice = buget * 0.75; 
    } else if (people >= 5 && people <= 9) {
        totalPrice = buget * 0.60;
    } else if (people >= 10 && people <= 24) {
        totalPrice = buget * 0.50;
    } else if (people >= 25 && people <= 49) {
        totalPrice = buget * 0.40;
    } else {
        totalPrice = buget * 0.25;
    }
      
    switch(category) {
        case "VIP": ticet = 499.99; break;
        case "Normal": ticet = 249.99; break;    
    }

    let moneyLeft = buget - totalPrice;
    let ticetPrice = ticet * people;
    let leftMoney = Math.abs(moneyLeft - ticetPrice);
    
    if (ticetPrice <= moneyLeft) {
        
        console.log(`Yes! You have ${leftMoney.toFixed(2)} leva left.`);
    } else {
        let diff = ticetPrice - moneyLeft;
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }
}

tickets(["50000", "Normal" , "200"]);
