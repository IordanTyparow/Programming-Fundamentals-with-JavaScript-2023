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
            if (targets[indexes + valuesOrRadius] > 0 && targets[indexes - valuesOrRadius] > 0) {
                let rightCut = targets.indexOf(targets[indexes + valuesOrRadius]);
                let leftCut = targets.indexOf(targets[indexes - valuesOrRadius]);
                targets.splice(rightCut, 1);
                targets.splice(indexes, 1);
                targets.splice(leftCut, 1);
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

movingTargets(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"]);
