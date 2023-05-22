function subtract() {

    let firstElement = document.getElementById('firstNumber').value;
    let secondElement = document.getElementById('secondNumber').value;

    let firstNumber = Number(firstElement);
    let secondNumber = Number(secondElement);

    let result = firstNumber - secondNumber;

    let resultElement = document.getElementById('result');

    resultElement.textContent = result;
}