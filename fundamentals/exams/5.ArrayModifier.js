function arrayModifier(input) {

    let numbers = input.shift().split(' ').map(Number);

    let index = 0;
    let loops = input[index];

    while (loops != 'end') {
        let command = loops.split(' ');

        let currentCommand = command[0];
        let index1 = Number(command[1]);
        let index2 = Number(command[2]);

        if (currentCommand === 'swap') {
            let temp = numbers[index1];
            numbers[index1] = numbers[index2];
            numbers[index2] = temp;
        } else if (currentCommand === 'multiply') {
            let firstNum = numbers[index1];
            let secondNum = numbers[index2];
            let multiply = firstNum * secondNum;
            numbers.splice(index1, 1, multiply);
        } else if (currentCommand === 'decrease') {
            for (let i = 0; i < numbers.length; i++) {
                numbers[i] = numbers[i] - 1;
            }
        }

        index++;
        loops = input[index];
    }
    console.log(numbers.join(', '))
}

arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]);