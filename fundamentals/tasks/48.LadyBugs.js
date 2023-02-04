function ladyBugs(input) {

    let field = [];
    let size = Number(input[0]);

    for (let i = 0; i < size; i++) {
        field[i] = 0;
    }

    let indexOfLadyBugs = input[1].split(' ');

    for (let i = 0; i < indexOfLadyBugs.length; i++) {
        let index = indexOfLadyBugs[i];
        if (field[index] !== undefined) {
            field[index] = 1;
        }
    }
    
    for (let i = 2; i < input.length; i++) {
        let commands = input[i].split(' ');
        let indexOfLadyBug = Number(commands[0]);
        let direction = commands[1];
        let flyLength = Number(commands[2]);

        if (indexOfLadyBug >= field.length || indexOfLadyBug < 0 || field[indexOfLadyBug] === 0)  {
            continue;
        }
        
        field[indexOfLadyBug] = 0;
        let isFly = true;

        if (direction === 'right') {
            while(isFly) {
                if (field[indexOfLadyBug + flyLength] === 0) {
                    field[indexOfLadyBug + flyLength] = 1;
                    isFly = false;
                } else if (field[indexOfLadyBug + flyLength] === 1) {
                    flyLength += flyLength;
                } else {
                    isFly = false;
                }
            }
        } else {
            while(isFly) {
                if (field[indexOfLadyBug - flyLength] === 0) {
                    field[indexOfLadyBug - flyLength] = 1;
                    isFly = false;
                } else if (field[flyLength] === 1) {
                    flyLength += flyLength;
                } else {
                    isFly = false;
                }
            }
        }
    }
    console.log(field.join(' '));
}

ladyBugs([ 5, '3',
'3 left 2',
'1 left -2']
);
