function sorting(numbers) {

    let sortedArray = numbers.sort((a, b) => a - b);

    
    let result = [];
    
    for (let index = 0; index < sortedArray.length; index++) {
        
        let lastToFirst = sortedArray.pop();
        let firstToLast = sortedArray.shift();

        result.push(lastToFirst);
        result.push(firstToLast);
    }

    result.push(sortedArray.pop());
    result.push(sortedArray.shift());

    console.log(result.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);