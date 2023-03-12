function pascalCase(input) {
    
    let ress = [];
    let startIndex = 0;

    for (let i = 1; i < input.length; i++) {
        let ch = input[i];
        if (ch.charCodeAt(0) >= 65 && ch.charCodeAt(0) <= 90) {
            ress.push(input.substring(startIndex, i));
            startIndex = i;
        }
    }
    ress.push(input.substring(startIndex));
    console.log(ress.join(', '));
}

pascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan');
