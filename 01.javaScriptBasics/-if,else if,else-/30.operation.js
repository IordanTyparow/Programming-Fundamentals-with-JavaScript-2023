function operation(input) {

    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);
    let operator = input[2];
    
    let result = 0;
    switch (operator) {
        case "+":
            result = firstNumber + secondNumber
            if (result % 2 === 0) {
                console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber} - even`);
            } else {
                console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber} - odd`);
            }
            break;
        case "-":
            result = firstNumber - secondNumber
            if (result % 2 === 0) {
                console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber} - even`);
            } else {
                console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber} - odd`);
            }
            break;
        case "*":
            result = firstNumber * secondNumber
             if (result % 2 === 0) {
                console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber} - even`);
            } else {
                console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber} - odd`);
            }
            break;
        case "/":
            result = firstNumber / secondNumber
            if(secondNumber === 0){
                console.log(`Cannot divide ${firstNumber} by zero`);
            }else {
                console.log(`${firstNumber} / ${secondNumber} = ${(firstNumber / secondNumber).toFixed(2)}`);
            }
            break;
        case "%":
            result = firstNumber % secondNumber
            if(secondNumber === 0){
                console.log(`Cannot divide ${firstNumber} by zero`);
            }else {
                console.log(`${firstNumber} % ${secondNumber} = ${(firstNumber % secondNumber)}`);
            }
            break;
    }
}

operation(["10",
"0",
"%"])










