function blackFlag(input) {

    let days = Number(input[0]);
    let daylyPLunder = Number(input[1]);
    let expectedPlunder = Number(input[2]);

    let result = 0;

    for (let i = 1; i <= days; i++) {

        result += daylyPLunder;

        if (i % 3 === 0) {
            result += daylyPLunder * 0.5;
        }
        if (i % 5 === 0) {
            result *= 0.70;
        }

    }
    
    if (result >= expectedPlunder) {
        console.log(`Ahoy! ${result.toFixed(2)} plunder gained.`);
    } else {
        console.log(`Collected only ${(result / expectedPlunder * 100).toFixed(2)}% of the plunder.`);
    }
}

blackFlag(["10",
"20",
"380"])

