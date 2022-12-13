function harvestExs(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let z = Number(input[2]);
    let countWorkers = Number(input[3]);

    let countGrape = x * y;
    let wine = (countGrape * 40 / 100) / 2.5;
    let totalPrice = wine - z;


    if (totalPrice >= 0) {
        console.log(`Good harvest this year! Total wine: ${Math.floor(wine)} liters.`);
        console.log(`${Math.ceil(totalPrice)} liters left -> ${Math.ceil(totalPrice / countWorkers)} liters per person.`);
    }
    if (totalPrice < 0) {
        let leftWine = z - wine;
        console.log(`It will be a tough winter! More ${Math.floor(leftWine)} liters wine needed.`);
    }



}

harvestExs(["650", "2", "175", "3"]);
harvestExs(["1020", "1.5", "425", "4"]);
