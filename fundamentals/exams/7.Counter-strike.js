function counterStrike(input) {

    let energy = Number(input.shift());
    let won = 0;

    for (let i = 0; i < input.length; i++) {
        let distanceOfTheEnemy = Number(input[i]);
        let commandForStopLoop = input[i];

        if (commandForStopLoop === 'End of battle') {
            break;
        }

        won++;

        energy = energy - distanceOfTheEnemy;

        if (energy === 0) {
            console.log(`Not enough energy! Game ends with ${won} won battles and ${energy} energy`);
        }

        if (won % 3 === 0) {
            energy += won;
        }
    }

    if (energy > 0) {
        console.log(`Won battles: ${won}. Energy left: ${energy}`);
    }

}

counterStrike(["200",
    "54",
    "14",
    "28",
    "13",
    "End of battle"])
    ;
