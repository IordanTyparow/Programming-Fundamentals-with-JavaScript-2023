function solution() {
    let ressWord = '';

    return {
        append(str) {
            ressWord += str;
        },
        removeStart(number) {
            ressWord = ressWord.substring(number);
        },
        removeEnd(number) {
            ressWord = ressWord.substring(0, ressWord.length - number);
        },
        print() {
            console.log(ressWord);
        }
    };
}


let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
