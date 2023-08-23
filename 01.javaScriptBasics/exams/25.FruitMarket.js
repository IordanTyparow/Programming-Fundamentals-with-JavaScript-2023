function friuts(input) {

    let strawBerryPrice = Number(input[0]);
    let countBanana = Number(input[1]);
    let countOrange = Number(input[2]);
    let countraspBerries = Number(input[3]);
    let countstrawBerryKilograms = Number(input[4]);

    let raspberriesPrice = strawBerryPrice / 2;
      
    let orangePrice = raspberriesPrice - (0.4 * raspberriesPrice);
    let bananaPrice = raspberriesPrice - (0.8 * raspberriesPrice);

    let sumForRaspberries = countraspBerries * raspberriesPrice;
    let sumForOrange = countOrange * orangePrice;
    let sumForBanana = countBanana * bananaPrice;
    let sumForstrawberries = countstrawBerryKilograms * strawBerryPrice;

    let totalPrice = (sumForRaspberries + 
                     sumForOrange +
                     sumForBanana + 
                     sumForstrawberries);    

    console.log((totalPrice).toFixed(2));
}

friuts(["63.5", "3.57", "6.35", "8.15", "2.5"]);