function revealWords(word, text) {

    let wordSplited = word.split(', ');
    let textSplited = text.split(' ');

    textSplited.forEach(element => {
        for (const word of wordSplited) {
            if (element.length === word.length) {
                if (element === '*'.repeat(word.length)) {
                    let index = textSplited.indexOf(element);
                    textSplited.splice(index, 1, word);
                }
            }   
        }
    });
    console.log(textSplited.join(' '));
}

revealWords('great', 'softuni is ***** place for learning new programming languages');
revealWords('great, learning', 'softuni is ***** place for ******** new programming languages')