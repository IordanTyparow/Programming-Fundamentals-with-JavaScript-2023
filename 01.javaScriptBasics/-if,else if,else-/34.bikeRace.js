function bikeRace(input) {

    let juniors = Number(input[0]);
    let seniors = Number(input[1]);
    let typeMap = input[2];

    let totalSumm = 0;
    switch (typeMap) {
        case "trail":
            totalSumm = (juniors * 5.50) + (seniors * 7);
            totalSumm = totalSumm * 0.95;
            break;
        case "cross-country":
            totalSumm = (juniors * 8) + (seniors * 9.50);
            totalSumm = totalSumm * 0.95;
            let people = juniors + seniors;
            if (people >= 50) {
                totalSumm = totalSumm * 0.75;
            }
            break;
        case "downhill":
            totalSumm = (juniors * 12.25) + (seniors * 13.75);
            totalSumm = totalSumm * 0.95;
            break;
        case "road":
            totalSumm = (juniors * 20) + (seniors * 21.50);
            totalSumm = totalSumm * 0.95;
            break;
    }
    console.log(totalSumm.toFixed(2))
}

bikeRace(["3", "40", "road"]);