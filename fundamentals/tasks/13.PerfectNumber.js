function perfectNumber(number) {

    let oddSum = 0;
    let evenSum = 0;
    let perfectNum = false;

    for (let i = 1; i < number; i++) {
        let currentNumber = i;

        if (currentNumber % 2 === 0) {
            evenSum += currentNumber;
        } else {
            oddSum += currentNumber;
        }

        if ((evenSum + oddSum) === number) {
            perfectNum = true;
            break;
        }
    }
    
    if (perfectNum) {
        console.log('We have a perfect number!');
    } else {
        console.log(`It's not so perfect.`)
    }
}

perfectNumber(1236498);