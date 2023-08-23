function negativeOrPositive(numbers) {

    let resultArray = [];

    for (let index = 0; index < numbers.length; index++) {
        let currentNumber = Number(numbers[index]);

        if (currentNumber < 0) {
            resultArray.unshift(currentNumber);
        } else {
            resultArray.push(currentNumber);
        }
    }

    for (let el of resultArray) {
        console.log(el);
    }
}

negativeOrPositive(['7', '-2', '8', '9']);