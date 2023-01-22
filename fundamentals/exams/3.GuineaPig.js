function guineaPig(input) {

    let foodQuantity = Number(input[0]) * 1000;
    let hayQuantity = Number(input[1]) * 1000;
    let coverQuantity = Number(input[2]) * 1000;
    let guineaPigWeight = Number(input[3]) * 1000;

    let day = 1;

    while (day <= 30) {
        foodQuantity -= 300;

        if (day % 2 === 0) {
            hayQuantity -= (foodQuantity * 5) / 100;
        }
        
        if (day % 3 === 0) {
            coverQuantity -= guineaPigWeight * 1/3;
        }

        day++;
    }

    let foodKg = foodQuantity / 1000;
    let hayKg = hayQuantity / 1000;
    let coverKg = coverQuantity / 1000;

    if (foodKg >= 0 && hayKg >= 0 && coverKg >= 0) {
        console.log(`Everything is fine! Puppy is happy! Food: ${foodKg.toFixed(2)}, Hay: ${hayKg.toFixed(2)}, Cover: ${coverKg.toFixed(2)}.`);
    } else if (foodKg < 0 || hayKg < 0 || coverKg < 0) {
        console.log('Merry must go to the pet store!');
    }
}

guineaPig(["1", 
"1.5", 
"3", 
"1.5"
])
