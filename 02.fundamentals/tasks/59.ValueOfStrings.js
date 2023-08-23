function valueOfStrings(input) {

    let text = input[0].split('');
    let command = input[1];
    let sum = 0;

    switch(command) {
        case 'LOWERCASE': 
            for (let char of text) {
                if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
                    let charNumber = char.charCodeAt(0);
                    sum += charNumber;
                }
            }
        break;
        case 'UPPERCASE':
            for (let char of text) {
                if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
                    let charNumber = char.charCodeAt(0);
                    sum += charNumber;
                }
            }
        break;
    }
    console.log(`The total sum is: ${sum}`);
}

valueOfStrings([
    'AC/DC',
'UPPERCASE'
]);