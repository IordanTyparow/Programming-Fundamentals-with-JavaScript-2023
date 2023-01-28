function counterStrike(input) {

    let health = input.shift();
    let winCounter = 0;

    for (const command of input) {
        if (command !== 'End of battle') {
            let energy = Number(command);

            if (health - energy < 0) {
                console.log(`Not enough energy! Game ends with ${winCounter} won battles and ${health} energy`);
                return;
            }

            health -= energy;
            winCounter++;
        } else {
            console.log(`Won battles: ${winCounter}. Energy left: ${health}`);
        }
        if (winCounter % 3 === 0) {
            health += winCounter;
        }
    }
}

counterStrike(["200",
    "54",
    "14",
    "28",
    "13",
    "End of battle"])



