function sortingAtTwoCriteria(input) {

    let sorted = input.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    })

    console.log(sorted.join('\n'));
}

sortingAtTwoCriteria(['alpha',
    'beta',
    'gamma'])