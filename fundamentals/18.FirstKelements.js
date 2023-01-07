function firstKnumbers(length, k) {
    let sequence = [1];

    for (let index = 1; index < length; index++) {
        let index = Math.max(sequence.length - k, 0);

        let lastElement = sequence.slice(index);
        let sum = 0;

        for (let el of lastElement) {
            sum += el;
        }

        sequence.push(sum);
    }
    console.log(sequence.join(' '));
}

firstKnumbers(6, 3);