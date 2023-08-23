function coffee(input) {

    let coffieeList = input.shift().split(' ');
    let commandsStart = input.shift();

    for (let index = 0; index < commandsStart; index++) {
        let currentCommand = input[index].split(' ');

        if (currentCommand[0] === 'Include') {
            if (!coffieeList.includes(currentCommand[1])) {
                coffieeList.push(currentCommand[1]);
            }
        } else if (currentCommand[0] === 'Remove') {
            if (currentCommand[1] === 'first') {
                if (currentCommand[2] >= 0 && currentCommand[2] < coffieeList.length) {
                    let deleted = currentCommand[2];
                    coffieeList.splice(0, deleted);
                }
            } else if (currentCommand[1] === 'last') {
                if (currentCommand[2] >= 0 && currentCommand[2] < coffieeList.length) {
                    let deleted = currentCommand[2];
                    coffieeList.splice(-deleted);
                }

            }
        } else if (currentCommand[0] === 'Prefer') {
            if (currentCommand[1] >= 0 && currentCommand[1] < coffieeList.length && currentCommand[2] >= 0 && currentCommand[2] < coffieeList.length) {
                let first = coffieeList[Number(currentCommand[1])];
                let second = coffieeList[Number(currentCommand[2])];
                coffieeList.splice(Number(currentCommand[1]), 1, second);
                coffieeList.splice(Number(currentCommand[2]), 1, first);
            }
        }  else if (currentCommand[0] === 'Reverse') {
            coffieeList.reverse();
        }
    }
    console.log('Coffees:');
    console.log(`${coffieeList.join(' ')}`);
}

coffee(["Arabica Robusta BulkCoffee StrongCoffee TurkishCoffee",
"5",
"Include OrdinaryCoffee",
"Remove first 1",
"Prefer 0 1",
"Prefer 3 1",
"Reverse"])
;