function wordOccurrences(input) {

    let map = new Map();

    for (const word of input) {
        let wordOccurrences = 1;

        if(map.has(word)) {
            wordOccurrences += map.get(word);
        }

        map.set(word, wordOccurrences);
    }

    let sorted = Array.from(map).sort((a,b) => b[1] - a[1]);

    for (const [key, value] of sorted) {
        console.log(`${key} -> ${value} times`);
    }
}

wordOccurrences(["Here", "is", "the", "first", "sentence",
    "Here", "is", "another", "sentence", "And", "finally",
    "the", "third", "sentence"]);