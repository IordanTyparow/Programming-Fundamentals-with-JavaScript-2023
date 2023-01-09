function train(commands) {

    let trainPassagers = commands.shift().split(' ').map(Number);
    let maxCapacity = Number(commands.shift());

    for (let index = 0; index < commands.length; index++) {
        
        let currentCommand = commands[index].split(' ');

        if (currentCommand[0] === 'Add') {

            trainPassagers.push(Number(currentCommand[1]));

        } else {

            for (let j = 0; j < trainPassagers.length; j++) {

                if (trainPassagers[j] + Number(currentCommand[0]) <= maxCapacity) {
                    trainPassagers[j] += Number(currentCommand[0]);
                    break;
                }

            }
        }
    }

    console.log(trainPassagers.join(' '));

}

train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
);