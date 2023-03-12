function StringSubstring(word, text) {


    for (let element of text.split(' ')) {
        element = element.toLowerCase();
        if (element === word) {
            console.log(word);
            return;
        } else {
            console.log(`${word} not found!`);
            break;
        }
    }
}

StringSubstring('javascript',
    'JavaScript is the best programming language');
StringSubstring('python',
    'Python is the best programming language'
)