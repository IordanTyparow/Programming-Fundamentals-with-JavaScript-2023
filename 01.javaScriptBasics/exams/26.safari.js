function safari(input) {

    let buged = Number(input[0]);
    let fuel = Number(input[1]);
    let day = input[2];

    let fuelPrice = fuel * 2.10;
    let total = fuelPrice + 100;

    if (day === "Sunday") {
        total = total * 0.80;
    } else if (day === "Saturday") {
        total = total * 0.90;
    }

    if (buged > total) {
        let diff = buged - total;
        console.log(`Safari time! Money left: ${diff.toFixed(2)} lv. `);
    } else {
        let diff1 = total - buged;
        console.log(`Not enough money! Money needed: ${diff1.toFixed(2)} lv.`);
    }
}

safari(["120",
"30",
"Saturday"])
