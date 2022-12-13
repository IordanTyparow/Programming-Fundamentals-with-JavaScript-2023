function logistic(input) {
    
    let cargo = Number(input[0]);

    let total = 0;

    let priceForminiBus = 0;
    let priceForminitruck = 0;
    let priceForminitrain = 0;
    let buss = 0;
    let truck = 0;
    let train = 0;
   
    for(let i = 1; i <= cargo; i++) {
        let totalCargo = Number(input[i]);
        total += totalCargo;

        if (totalCargo <= 3) {
            buss += totalCargo; 
            priceForminiBus +=  totalCargo * 200;
        } 
        if (totalCargo >= 4 && totalCargo <= 11) {
            truck += totalCargo ;
            priceForminitruck += totalCargo * 175;
        } 
        if (totalCargo >= 12) {
            train += totalCargo;
            priceForminitrain += totalCargo * 120;
        }
    }

    let sumAveragePrice = (priceForminiBus + priceForminitruck + priceForminitrain) / total;
    let bussPrice = (buss / total) * 100;
    let truckPrice = (truck / total) * 100;
    let trainPrice = (train / total) * 100;
    
    console.log(`${(sumAveragePrice).toFixed(2)}`);
    console.log(`${(bussPrice).toFixed(2)}%`);
    console.log(`${(truckPrice).toFixed(2)}%`);
    console.log(`${(trainPrice).toFixed(2)}%`);
}

logistic(["4", "1", "5", "16", "3"]);