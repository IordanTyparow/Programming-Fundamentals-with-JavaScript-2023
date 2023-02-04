function tseamAccount(input) {

    let peterAccount = input.shift().split(' ');

    let index = 0;
    let command = input[index];

    while (command !== 'Play!') {
        let currentCommand = command.split(' ');

        let gameCommand = currentCommand[0];
        let game = currentCommand[1];

        if (gameCommand === 'Install') {
            if (!peterAccount.includes(game)) {
                peterAccount.push(game);
            }
        } else if (gameCommand === 'Uninstall') {
            if (peterAccount.includes(game)) {
                let index = peterAccount.indexOf(game);
                peterAccount.splice(index, 1);
            }
        } else if (gameCommand === 'Update') {
            if (peterAccount.includes(game)) {
                let index = peterAccount.indexOf(game);
                peterAccount.splice(index, 1);
                peterAccount.push(game);
            }
        } else if (gameCommand === 'Expansion') {
            let newGame = game.split('-');
            for (let i = 0; i < peterAccount.length; i++) {
                if (newGame[i] === peterAccount[i]) {
                    peterAccount.splice(i + 1, 0, newGame[0] + ':' + newGame[1]);

                }
            }
        }
        index++;
        command = input[index];
    }
    console.log(peterAccount.join(' '));
}

tseamAccount(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!']

)
