function shopingList(input) {

    let products = input.shift().split('!');

    let index = 0;
    let command = input[index];

    while (command != 'Go Shopping!') {
        let splitCommand = input[index].split(' ');

        let commandList = splitCommand[0];
        let product = splitCommand[1];

        if (commandList === 'Urgent') {
            if (!products.includes(product)) {
                products.unshift(product);
            }
        } else if (commandList === 'Unnecessary') {
            if (products.includes(product)) {
                let index = products.indexOf(product);
                products.splice(index, 1);
            }
        } else if (commandList === 'Correct') {
            let oldProduct = splitCommand[1];
            let newProduct = splitCommand[2];
            if (products.includes(oldProduct)) {
                let index = products.indexOf(oldProduct);
                products.splice(index, 1, newProduct);
            }
        } else if (commandList === 'Rearrange') {
            if (products.includes(product)) {
                let index = products.indexOf(product);
                let splicedProduct = products.splice(index, 1);
                products.push(splicedProduct);
            }
        }

        index++;
        command = input[index];
    }
    console.log(products.join(', '));
}

shopingList(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])


