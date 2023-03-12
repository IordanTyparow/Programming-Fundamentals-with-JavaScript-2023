function countStringOccurrences(text, word) {

    let textList = text.split(' ');
    let counter = 0;

    textList.forEach(element => {
        if (element === word) {
            counter++;
        }
    });

    console.log(counter);
}

countStringOccurrences('This is a word and it also is a sentence', 'is');