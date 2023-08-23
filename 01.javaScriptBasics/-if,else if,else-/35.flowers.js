function flowers(input) {

    let countChrysanthemums = Number(input[0]);
    let countRosse = Number(input[1]);
    let countTupils = Number(input[2]);
    let season = input[3];
    let holydayORnote = input[4];

    let totalPrice = 0;
    let flowers = countChrysanthemums + countRosse + countTupils;

    switch (season) {
        case "Spring":
        case "Summer":
            totalPrice = (countChrysanthemums * 2.00) + (countRosse * 4.10) + (countTupils * 2.50);
            if (countTupils > 7 && season === "Spring") {
                totalPrice = totalPrice * 0.95;
            }
            break;
        case "Autumn":
        case "Winter":
            totalPrice = (countChrysanthemums * 3.75) + (countRosse * 4.50) + (countTupils * 4.15);
            if (countRosse >= 10 && season === "Winter") {
                totalPrice = totalPrice * 0.90;
            } 
            break;
    } 
    
    if (holydayORnote === "Y") {
        totalPrice = totalPrice * 1.15;
    }
   
    if (flowers >= 20) {
        totalPrice = totalPrice * 0.80;
    }
   
    console.log((totalPrice + 2).toFixed(2));
}

flowers(["2", "4", "8", "Spring", "Y"]);