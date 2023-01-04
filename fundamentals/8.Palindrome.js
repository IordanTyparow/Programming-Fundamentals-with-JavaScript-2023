function palimdrome(numbers) {

    for (let index = 0; index < numbers.length; index++) {
        let firstNumbersPalidrom = numbers[index].toString();
        let reversedString = firstNumbersPalidrom.split('').reverse().join('');

        if (firstNumbersPalidrom === reversedString) {
            console.log('true');
        } else {
            console.log('false');
        }
    }
}

palimdrome([123, 323, 421, 121]);