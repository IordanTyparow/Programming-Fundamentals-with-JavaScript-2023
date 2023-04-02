function secretChat(input) {

    let word = input.shift();


    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(':|:');
        let currCommand = tokens[0];

        if (currCommand === 'Reveal') {
            console.log(`You have a new text message: ${word}`);
            break;
        }

        if (currCommand === 'ChangeAll') {
            let subString = tokens[1];
            let replacement = tokens[2];

            while (word.includes(subString)) {
                let index = word.indexOf(subString);
                let part = word.substring(index, index + subString.length);
                word = word.replace(part, replacement);
            }
            console.log(word);
        } else if (currCommand === 'Reverse') {
            let string = tokens[1];

            if (word.includes(string)) {
                let index = word.indexOf(string);
                let secondPart = word.substring(index, index + string.length).split('').reverse().join('');

                let firstPart = word.substring(0, index);
                let thirdPart = word.substring(index + string.length);

                word = firstPart + thirdPart + secondPart;
                console.log(word);
            } else {
                console.log('error');
            }
        } else if (currCommand === 'InsertSpace') {
            let index = tokens[1];

            let firstPart = word.slice(0, index);
            let lastPart = word.slice(index);

            word = firstPart + ' ' + lastPart;
            console.log(word);
        }
    }
}

secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
])