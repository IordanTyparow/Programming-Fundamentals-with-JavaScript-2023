function bombNumbers(array, counts) {
    
    let specialNumber = counts[0];
    let bombs = counts[1];

    let sum = 0;

    for (let index = 0; index < array.length; index++) {
        let currentNum = array[index];

        if (currentNum === specialNumber) {
            array.splice(1, bombs);
            array.splice(3, bombs);
        }
    }
    
    for (const el of array) {
        if (el < specialNumber || el > specialNumber) {
            sum += el;
        }
    }   
    
    console.log(sum);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);