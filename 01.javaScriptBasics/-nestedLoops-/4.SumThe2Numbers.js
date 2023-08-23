function sum(input) {

    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNumber = Number(input[2]);

    let counter = 0;

    let boolean = false;

    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {
            counter++;
            if (i + j === magicNumber) {
                console.log(`Combination N:${counter} (${i} + ${j} = ${i + j})`);
                boolean = true;
                break;
            }
        }
        if (boolean === true) {
            break;
        }
    }
    if (boolean === false) {
        console.log(`${counter} combinations - neither equals ${magicNumber}`);
    }
}

sum(["23",
"24",
"20"])
