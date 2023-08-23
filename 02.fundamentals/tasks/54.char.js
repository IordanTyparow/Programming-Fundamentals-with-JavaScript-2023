function char(input) {
    // console.log(input.replace(/(.)\1+/g, '$1'));

    let result = [];
    for (let i = 0; i < input.length - 1; i++) {
        let currentChar = input[i];
        let char = input[i + 1];
        if (currentChar !== char) {
            result.push(char);
        } 
        if(!result.includes(currentChar)) {
            result.push(char);
        }
    }
    console.log(result.join(''));
    // abcdedsa
}

char('aaaaabbbbbcdddeeeedssaa');
char('qqqwerqwecccwd');