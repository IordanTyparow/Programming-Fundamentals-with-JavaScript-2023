function sumTable() {
    let numbersElements = document.querySelectorAll('tr td:nth-of-type(2)');
    let result = document.getElementById('sum');

    let sum = Array.from(numbersElements).reduce((acc, x) => {
        let currentValue = Number(x.textContent) || 0;
        return acc + currentValue;
    }, 0);
    
    result.textContent = sum; 
    
}