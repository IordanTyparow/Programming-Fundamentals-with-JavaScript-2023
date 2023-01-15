function distinctArray(input) {
    
    let resultArray = [];

    for (let index = 0; index < input.length; index++) {
        
        if (!resultArray.includes(input[index])) {
            resultArray.push(input[index]);
        }

    }

    console.log(resultArray.join(' '));
}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);