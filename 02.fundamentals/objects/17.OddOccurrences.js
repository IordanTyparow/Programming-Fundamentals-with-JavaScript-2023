function oddOccurrences(input) {

    let inputArr = input.split(' ').map(el => el.toLowerCase());
    let countObj = new Map();
 
    for (let firstWord of inputArr) {
        let count = 0;
        for (let secondWord of inputArr) {
            if (firstWord === secondWord) {
                count++
            }
        }
        countObj.set(firstWord, count)
    }
    
    let fillteredArray = Array.from(countObj.entries()).filter(([word, value]) => value % 2 !== 0);

    let result = [];
    for (const [word, value] of fillteredArray) {
        result.push(word);
    }
    console.log(result.join(' '));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
console.log('-------------');
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');