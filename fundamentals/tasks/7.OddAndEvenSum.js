function oddAndEven(number) {

    let numberToString = number.toString();

    let oddSumResult = 0;
    let evenSumResult = 0;

    for (let index = 0; index < numberToString.length; index++) {
        let currentDigit = Number(numberToString[index]);

        if (currentDigit % 2 === 0) {
            evenSumResult += currentDigit;
        } else {
            oddSumResult += currentDigit;
        }
    }

    console.log(`Odd sum = ${oddSumResult}, Even sum = ${evenSumResult}`);
}

oddAndEven(1000435);