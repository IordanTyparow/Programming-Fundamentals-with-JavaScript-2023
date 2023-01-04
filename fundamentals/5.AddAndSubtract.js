function result(firstNumber, secondNumber, lastNumber) {

    function add(numOne, numTwo) {

        return numOne + numTwo;

    }

    let addResult = add(firstNumber, secondNumber);

    function substract(numOne, numTwo) {

        return numOne - numTwo;

    }

    let substractResult = substract(addResult, lastNumber);

    console.log(substractResult);
}

result(23, 6, 10);