function puppy(input) {

    let food = Number(input[0]) * 1000;
    
    let index = 1;
    let start = input[index];

    while (start !== "Adopted") {
        let foodCount = Number(start);
        food -= foodCount;
        
        index++;
        start = input[index];
    }
    
    if (food >= 0) {
        console.log(`Food is enough! Leftovers: ${food} grams.`);
    } else {
        console.log(`Food is not enough. You need ${Math.abs(food)} grams more.`);
    }
}

puppy(["4",
"130",
"345",
"400",
"180",
"230",
"120",
"Adopted"])






