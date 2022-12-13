function Market(input) {
    let budetPetar = Number(input[0]);
    let countVideoCards = Number(input[1]);
    let countProcesor = Number(input[2]);
    let ramMemory = Number(input[3]);

    let summVideoCards = countVideoCards * 250; // 500
    let summCPU = summVideoCards * 0.35;
    let sumForCPU = countProcesor * summCPU; // 175

    let priceRAM = summVideoCards * 0.10;
    let oneRAM = ramMemory * priceRAM;

    let totalPrice = summVideoCards + sumForCPU + oneRAM; 
    
    if (summVideoCards > sumForCPU){
        totalPrice = totalPrice - (totalPrice * 0.15);
    }

    let money = Math.abs(totalPrice - budetPetar);

    if (budetPetar >= totalPrice){
        console.log(`You have ${money.toFixed(2)} leva left!`);
    } else{
        console.log(`Not enough money! You need ${money.toFixed(2)} leva more!`)
    }
   
}

Market(["900","2","1", "3"]);
Market(["920.45","3","1","1"]);






    




