function vacation(input){
    let budet = Number(input[0]);
    let nights = Number(input[1]);
    let priceForNights = Number(input[2]);
    let procentForanotherSumm = Number(input[3]);
    
    if (nights > 7){
        priceForNights = priceForNights * 0.95;
    }
    let countNights = nights * priceForNights;
    let discount = budet * procentForanotherSumm / 100;
    let totalPrice = countNights + discount;
    let diff = Math.abs(totalPrice - budet);
    
    if (totalPrice <= budet){
        console.log(`Ivanovi will be left with ${diff.toFixed(2)} leva after vacation.`);
    }
    
    if (totalPrice > budet){
        console.log(`${diff.toFixed(2)} leva needed.`);
    }
  
}

vacation(["800.50","8", "100", "2"]);
vacation(["500","7","66","15"]);


   