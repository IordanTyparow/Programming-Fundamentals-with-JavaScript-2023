function passwordReset(input) {

    let password = input.shift();

    let command = input.shift();
    while (command !== 'Done') {
        let tokens = command.split(' ');
        let currCommand = command.split(' ')[0];

        if (currCommand === 'TakeOdd') {
            let oddsPosition = '';
            for (let i = 0; i < password.length; i++) {
                if (i % 2 !== 0) {
                    oddsPosition += password[i];
                }
            }
            password = oddsPosition;
            console.log(password);
        } else if (currCommand === 'Cut') {
            let index = Number(tokens[1]);
            let length = Number(tokens[2]);

            let removePart = password.split('').splice(index, length).join('');
            password = password.replace(removePart, '');
            console.log(password);
        } else if (currCommand === 'Substitute') {
            let oldString = tokens[1];
            let newString = tokens[2];

            if (password.includes(oldString)) {
                while (password.includes(oldString)) {
                    password = password.replace(oldString, newString);
                } 
                console.log(password);
            } else {
                console.log(`Nothing to replace!`);
            }
        }

        command = input.shift();
    }
    console.log(`Your password is: ${password}`);
}

passwordReset(['Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr',
    'TakeOdd',
    'Cut 15 3',
    'Substitute :: -',
    'Substitute | ^',
    'Done',
]);
console.log('----------');
