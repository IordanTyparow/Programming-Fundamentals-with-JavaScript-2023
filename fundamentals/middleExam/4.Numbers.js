function numbers(input) {

    let sequence = input.shift().split(' ').map(Number);

    let index = 0;
    let command = input[index];
    while(command !== 'Finish') {
        let splitedCommands = command.split(' ');

        let commands = splitedCommands[0];
        let value = Number(splitedCommands[1]);

        if (commands === 'Add') {
            sequence.push(value);
        } else if (commands === 'Remove') {
            if (sequence.includes(value)) {
                let index = sequence.indexOf(value);
                sequence.splice(index, 1);
            }
        } else if (commands === 'Replace') {
            if (sequence.includes(value)) {
                let index = sequence.indexOf(value);
                let newNumber = Number(splitedCommands[2]);
                sequence.splice(index, 1, newNumber);
            }
        } else if (commands === 'Collapse') {
           let filteredArray = sequence.filter((el) => el > value);
           console.log(filteredArray.join(' '));
           return;
        }

        index++;
        command = input[index];
    }
    
    console.log(sequence.join(' '));
}

// numbers(['1 4 5 19', 'Add 1', 'Remove 4', 'Finish']);
// numbers(['5 9 70 -56 9 9', 'Replace 9 10', 'Remove 9', 'Finish']);
numbers(['1 20 -1 10', 'Collapse 8', 'Finish']);