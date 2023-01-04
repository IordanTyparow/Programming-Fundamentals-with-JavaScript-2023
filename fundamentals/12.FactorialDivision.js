function factorialDivision(n, b) {

    let firstResult = n;

    for (let index = 1; index < n; index++) {
        firstResult *= index;
    }

    let secondResult = b;

    for (let j = 1; j < b; j++) {
        secondResult *= j;
    }

    let finallResult = firstResult / secondResult;

    console.log(finallResult.toFixed(2));
}

factorialDivision(5, 2);