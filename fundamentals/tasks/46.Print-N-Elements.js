function printNElemelnts(input) {

    let steps = Number(input.pop());
    let currentDigit = input.map(Number);

    let numbers = '';

    for (let i = 0; i < currentDigit.length; i += steps) {
        numbers += `${input[i]} `;
    }

    console.log(numbers);
}

printNElemelnts(['5', '20', '31', '4', '20', '2']);
printNElemelnts(['dsa', 'asd', 'test', 'test', '2']);
printNElemelnts(['1', '2', '3', '4', '5', '6']);