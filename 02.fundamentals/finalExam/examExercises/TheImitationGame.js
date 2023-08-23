function imitationGame(input) {

    let word = input.shift();

    for (let index = 0; index < input.length; index++) {
        let commands = input[index].split('|');

        if (commands[0] === 'Move') {
            let firstPart = word.slice(0, commands[1]);
            let lastPart = word.slice(commands[1]);
            word = lastPart + firstPart;
        } else if (commands[0] === 'Insert') {
            let index = Number(commands[1]);
            let value = commands[2];

            let firstPart = word.substring(0, index);
            let secondPart = word.substring(index);

            word = firstPart.concat(value).concat(secondPart);
        } else if (commands[0] === 'ChangeAll') {
            for (const char of word) {
                if (char === commands[1]) {
                  word = word.replace(char, commands[2]);
                }
            }
        }

        if (commands[0] === 'Decode') {
            console.log(`The decrypted message is: ${word}`);
        }
    }
}

imitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]);

imitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode',
]);
