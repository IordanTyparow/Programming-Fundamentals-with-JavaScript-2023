function calc() {
    let firstNumberElement = document.getElementById('num1').value;
    let secondNumberElement = document.getElementById('num2').value;

    let sum = Number(firstNumberElement) + Number(secondNumberElement);

    let resultElement = document.getElementById('sum');
    
    resultElement.value = sum
}
