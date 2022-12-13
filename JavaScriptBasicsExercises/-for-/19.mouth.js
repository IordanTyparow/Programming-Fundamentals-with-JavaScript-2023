function mouth(input) {

    let mouth = Number(input[0]);

    let waterCount = 20;
    let internetCount = 15;
    let othersCount = 0;

    let electric = 0;
    let water = 0;
    let internet = 0;
    let others = 0;

    for (let i = 1; i <= mouth; i++) {
        let bills = Number(input[i]);

        electric += bills;
        water += waterCount;
        internet += internetCount;
        othersCount = (bills + waterCount + internetCount) * 1.2;
        others += othersCount;
    }

    let avg = (electric + water + internet + others) / mouth;
    console.log(`Electricity: ${electric.toFixed(2)} lv`);
    console.log(`Water: ${water.toFixed(2)} lv`);
    console.log(`Internet: ${internet.toFixed(2)} lv`);
    console.log(`Other: ${others.toFixed(2)} lv`);
    console.log(`Average: ${avg.toFixed(2)} lv`);
}

mouth([
    "5",
    "68.63",
    "89.25",
    "132.53",
    "93.53",
    "63.22"
]);