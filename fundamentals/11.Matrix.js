function matrix(number) {

    let array = [];

    for (let index = 0; index < number; index++) {
        let output = '';
        for (let colons = 0; colons < number; colons++) {
            output += `${number} `
        }
        array.push(output);
    }
    console.log(array.join('\n'));
}

matrix(3);