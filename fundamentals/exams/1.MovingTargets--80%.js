function movingTargets(input) {

    let targets = input.shift().split(' ').map(el => Number(el));

    let index = 0;
    let command = input[index];

    while (command != 'End') {
        let elements = command.split(' ');

        let currentCommand = elements[0];
        let indexes = Number(elements[1]);
        let valuesOrRadius = Number(elements[2]);

        if (currentCommand === 'Shoot') {
            if (indexes >= 0 && indexes < targets.length) {
                targets[indexes] -= valuesOrRadius;
                if (targets[indexes] <= 0) {
                    targets.splice(indexes, 1);
                }
            }
        } else if (currentCommand === 'Strike' && indexes >= 0 && indexes < targets.length) {
            if (indexes - valuesOrRadius >= 0 && indexes + valuesOrRadius < targets.length) {
                targets.splice(indexes - valuesOrRadius, indexes + valuesOrRadius);
            } else {
                console.log('Strike missed!');
            }
        } else if (currentCommand === 'Add' && indexes >= 0 && indexes < targets.length) {
            targets.splice(indexes, 0, valuesOrRadius);
        } else {
            console.log('Invalid placement!');
        }

        index++;
        command = input[index];
    }

    console.log(targets.join('|'));
}

movingTargets(["1 2 3 4 5",
    "Strike 0 1",
    "End"])
