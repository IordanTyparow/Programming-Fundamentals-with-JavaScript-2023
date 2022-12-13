function cases(input) {

    let baggage = Number(input[0]);
    let baggageCounter = 0; 
   
    let index = 1;
    let start = input[index];
    while (start !== "End") {
        let left = Number(start);
        baggage -= left;

        if (baggage < 0) {
            break;
        }
        if (baggageCounter % 3 === 0) {
            baggage = baggage * 1.10;
        }
        baggageCounter++;
        index++;
        start = input[index]
    }

    if (start === "End") {
        console.log(`Congratulations! All suitcases are loaded!`);
        console.log(`Statistic: ${baggageCounter} suitcases loaded.`);
    } else {
        console.log("No more space!");
        console.log(`Statistic: ${baggageCounter} suitcases loaded.`);
    }
    
}

cases(["700.5",
"180",
"340.6",
"126",
"220"])

