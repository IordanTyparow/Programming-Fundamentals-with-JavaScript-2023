function food(input) {

    let index = 0;
    let days = Number(input[index]);
    index++;
    let food = Number(input[index]);
    index++;

    let eatDog = 0;
    let eatCat = 0;
    let sumEatenByDog = 0;
    let sumEatenByCat = 0;
    let biscquits = 0;

    for (let i = 1; i <= days; i++) {
        eatDog = Number(input[index]);
        sumEatenByDog += eatDog;
        index++;
        eatCat = Number(input[index]);
        sumEatenByCat += eatCat;
        index++;
        if (i % 3 === 0) {
            biscquits = biscquits + ((eatDog + eatCat) * 0.10);
        }
    }
    let totalEatenFood = sumEatenByCat + sumEatenByDog;

    let percentTotalEatenFood = (totalEatenFood / food) * 100;
    let percentTotalEatenDog = (sumEatenByDog / totalEatenFood) * 100;
    let percentTotalEatenCat = (sumEatenByCat / totalEatenFood) * 100;

    console.log(`Total eaten biscuits: ${Math.round(biscquits)}gr.`);
    console.log(`${percentTotalEatenFood.toFixed(2)}% of the food has been eaten.`);
    console.log(`${percentTotalEatenDog.toFixed(2)}% eaten from the dog.`);
    console.log(`${percentTotalEatenCat.toFixed(2)}% eaten from the cat.`);
}

food([
    "3",
    "1000",
    "300",
    "20",
    "100",
    "30",
    "110",
    "40"
]);