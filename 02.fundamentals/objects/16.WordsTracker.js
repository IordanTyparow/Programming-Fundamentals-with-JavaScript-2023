function wordTracker(input) {

    let wantedWord = input. shift().split(' ');  
    let wantedWordCount = {};
    wantedWord.forEach(word => wantedWordCount[word] = 0);
    input.forEach(word => word in wantedWordCount && wantedWordCount[word]++);
    wantedWord.sort((a,b) => wantedWordCount[b] - wantedWordCount[a]);
    wantedWord.forEach(word => console.log(`${word} - ${wantedWordCount[word]}`));
}

wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to',
    'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and',
    'sentence', 'because', 'this', 'is', 'your', 'task'
]);