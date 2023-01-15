function primeNumbers(input) {

    let number = input;
    let isPrime = true;

    if (number > 1) {
        for (let i = 2; i < number; i++) {
            if(number % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    
    if(isPrime) {
        console.log('true');
    } else {
        console.log('false');
    }
}

primeNumbers(8);