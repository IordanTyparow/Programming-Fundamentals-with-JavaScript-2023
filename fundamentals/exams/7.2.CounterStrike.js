function counterStrike2(input) {

    let health = Number(input.shift());
    let won = 0;

    let index = 0;
    let command = input[index];

    while (command != 'End of battle') {

        let energy = Number(command);

        if ((health - energy) < 0) {
            console.log(`Not enough energy! Game ends with ${won} won battles and ${energy} energy`);
            return;
        } else {
            console.log(`Won battles: ${won}. Energy left: ${energy}`);
        }   

        if (won % 3 === 0) {
            health += won;
        }

        won++;
        health -= energy;
        index++;
        command = input[index];
    }
}

counterStrike2(["100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"])

