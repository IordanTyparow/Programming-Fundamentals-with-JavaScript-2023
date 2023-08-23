function pets(input) {
   let countDays = Number(input[0]);
   let foodleft = Number(input[1]);
   let foodForDog = Number(input[2]);
   let foodForaDayCat = Number(input[3]);
   let foodFortutrle = Number(input[4]);

    let neededFoodForDog = countDays * foodForDog;
    let neededFoodForCat = countDays * foodForaDayCat;
    let neededFoodForTurtle = (countDays * foodFortutrle) * 0.001;
    
    let totalPrice = neededFoodForDog + neededFoodForCat + neededFoodForTurtle;   
    
    if (foodleft >= totalPrice){
        let leftFood = Math.abs(totalPrice - foodleft);
        console.log(`${Math.floor(leftFood)} kilos of food left.`);
    } else {
        let diff = Math.ceil(totalPrice - foodleft);
        console.log(`${diff} more kilos of food are needed.`);
    }

    
}


pets(["2", "10", "1", "1", "1200"]);
pets(["5", "10", "2.1", "0.8", "321"]);



