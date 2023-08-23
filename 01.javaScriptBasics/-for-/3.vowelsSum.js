function vowels(input) {

    let word = input[0];
    let totalValue = 0;

    for(let i = 0; i < word.length; i++) {
        let letter = (word[i]);

        switch(letter) {
            case "a": totalValue += 1; break;
            case "e": totalValue += 2; break;
            case "i": totalValue += 3; break;
            case "o": totalValue += 4; break;
            case "u": totalValue += 5; break;
        }
    }
    console.log(totalValue);
}

vowels([ "beer" ]);