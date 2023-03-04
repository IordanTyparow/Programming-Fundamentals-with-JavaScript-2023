function phoneBook(input) {

    let phoneList = {};

    input.forEach(element => {
        let tokens = element.split(' ');
        let name = tokens[0];
        let number = tokens[1];

        phoneList[name] = number;
    });

    for (const [keys, values] of Object.entries(phoneList)) {
        console.log(`${keys} -> ${values}`);
    }
}

phoneBook([
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
    ]);