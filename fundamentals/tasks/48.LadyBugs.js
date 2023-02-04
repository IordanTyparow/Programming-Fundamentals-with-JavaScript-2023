function ladyBugs(input) {

    let sizeOfField = input.shift();
    let startedIndexes = input.shift().split(' ').map(Number);

    for (let i = 0; i < input.length; i++) {
        let commands = input[i].split(' ');

        let ladyBugIndex = Number(commands[0]);
        let currentMove = commands[1];
        let flyLength = Number(commands[2]);

        if (currentMove === 'right') {
            if (flyLength < sizeOfField) {
                if (ladyBugIndex >= 0 && flyLength >= 0) {
                    if (startedIndexes[ladyBugIndex] !== 1) {
                        startedIndexes[flyLength + 1] = 1;
                    } else {
                        startedIndexes[ladyBugIndex] = 0;
                    }
                }
            }
        }
    }
    console.log(startedIndexes.join(' '));
}

ladyBugs([3, '0 1 2',
    '0 right 1',
    '1 right 1',
    '2 right 1']
);