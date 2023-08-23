function cinema(input) {

    let standardTicet = 0;
    let studentTicet = 0;
    let kidTicet = 0;
    let totalTicetCounter = 0;

    let index = 0;
    let command = input[index];
    while (command !== "Finish") {
        let name = command; // Taxi
        index++;
        let freeSpaces = Number(input[index]); // 10
        index++;

        let ticetType = input[index]; // standard
        let ticetCounter = 0;
        while (ticetType !== "End") {
            ticetCounter++;
            switch(ticetType) {
                case "standard": standardTicet++; break;
                case "student": studentTicet++; break;
                case "kid": kidTicet++; break;        
            }
            if (ticetCounter >= freeSpaces) {
                break;
            }
            index++;
            ticetType = input[index];
        }
        totalTicetCounter += ticetCounter;
        let result = ticetCounter / freeSpaces * 100;
        console.log(`${name} - ${result.toFixed(2)}% full.`);
        index++;
        command = input[index];
    }
    console.log(`Total tickets: ${totalTicetCounter}`);
    console.log(`${((studentTicet / totalTicetCounter) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standardTicet / totalTicetCounter) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kidTicet / totalTicetCounter) * 100).toFixed(2)}% kids tickets.`);
}

cinema(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"]);
