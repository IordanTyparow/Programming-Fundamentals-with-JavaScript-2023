function bombNumbers(array, counts) {
    
    let specialNumber = counts[0];
    let bombs = counts[1];

    while(array.includes(specialNumber)) {
        let index = array.indexOf(specialNumber);
        let elementsToRemove = bombs * 2 + 1;
        let startIndex = index - bombs;

        if (startIndex < 0) {
            elementsToRemove += startIndex;
            startIndex = 0;
        }
        array.splice(startIndex, elementsToRemove);
    }
    console.log(array.reduce((a, b) => a + b ,0))
}

bombNumbers([1, 4, 4, 2, 8, 9, 1],
[9, 3])
