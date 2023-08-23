function firstAndLast(numbers) {

    // Взимане на първи елемент
    let firstElement = Number(numbers[0]);
    // Взимане на последния елемент
    let lastElement = Number(numbers[numbers.length - 1]);
    // Събиране на първи и последния
    let sum = firstElement + lastElement;
    console.log(sum);
}

firstAndLast(['5', '30', '10']);