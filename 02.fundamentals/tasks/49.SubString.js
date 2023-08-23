function censoredWord(text, word) {

    let ress = '';

    while (text.includes(word)) {
        ress = text.replace(word, '*'.repeat(word.length));
        text = ress;
    }
    console.log(ress);
}

censoredWord('A small sentence with some words', 'small');
censoredWord('Find the hidden word', 'hidden');