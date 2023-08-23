function adreesBook(input) {

    let adressBookList = {};

    input.forEach(line => {
        let [name, adress] = line.split(':');

        adressBookList[name] = adress;
    });

    let sortedKeys = Object.entries(adressBookList).sort((a,b) => (a[0]).localeCompare(b[0]));

    for (const [key, value] of sortedKeys) {
        console.log(`${key} -> ${value}`);
    }
}

adreesBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']);