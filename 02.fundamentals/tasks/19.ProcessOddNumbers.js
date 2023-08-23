function processOddNumbers(input) {

    let resultArray = [];

    for (let index = 0; index < input.length; index++) {

        if (index % 2 !== 0) {
            resultArray.push(input[index] * 2);
        }

    }
    
    resultArray.reverse();
    console.log(resultArray.join(' '));
}

processOddNumbers([10, 15, 20, 25]);