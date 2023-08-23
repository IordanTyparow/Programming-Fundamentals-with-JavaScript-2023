function numbers(input) {

    let numbers = input.split(' ').map(Number);
    let sum = 0;
    let higherNumbers = [];

    numbers.forEach(el => {
        sum += el;
    });

    let averageNumer = Number(sum / numbers.length);

    for (let index = 0; index < numbers.length; index++) {
        let arrayNumbers = numbers[index];
      
        if (arrayNumbers > averageNumer) {
            higherNumbers.push(arrayNumbers);
        } 
    }
    
    higherNumbers.sort((a, b) => b - a);
    higherNumbers.splice(5);
    
    if (higherNumbers.length > 1 && higherNumbers.length <= 5) {
        console.log(higherNumbers.join(' '));
    } else if (higherNumbers.length === 0) {
        console.log('No')
    }
}


numbers('1');