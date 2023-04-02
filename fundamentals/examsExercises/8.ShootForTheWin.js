function shootForTheWin(input) {

    let targets = input.shift().split(' ').map(Number);

    let index = 0;
    let command = input[index];
    let count = 0;

    while (command != 'End') {
        let indexOftheTarget = Number(command);

        if (indexOftheTarget >= 0 && indexOftheTarget < targets.length) {
            for (let i = 0; i < targets.length; i++) {
                let currentTarget = targets[indexOftheTarget];

                if (i !== indexOftheTarget && targets[i] !== -1) {
                    if (targets[i] > currentTarget) {
                        targets[i] -= currentTarget;
                    } else {
                        targets[i] += currentTarget;
                    }
                }
            }
            targets[indexOftheTarget] = -1;
            count++;
        }

        index++;
        command = input[index];
    }
    console.log(`Shot targets: ${count} -> ${targets.join(' ')}`)
}

shootForTheWin(["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"]);