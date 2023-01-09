function searchForANumber(array, action) {

    let numberToTake = action[0];
    let numberToDelete = action[1];
    let specialNumber = action[2];

    let takenNumbers = array.slice(0, numberToTake);
    takenNumbers.splice(0, numberToDelete);

    let counter = 0;

    for (let el of takenNumbers) {
        if (el === specialNumber) {
            counter++;
        }
    }
    console.log(`Number ${specialNumber} occurs ${counter} times.`)
}

searchForANumber([7, 1, 5, 8, 2, 7],

    [3, 1, 5]);