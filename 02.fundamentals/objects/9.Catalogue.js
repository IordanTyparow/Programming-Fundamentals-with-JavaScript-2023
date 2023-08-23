function catalogue(input) {

    let catalogue = [];

    for (let index = 0; index < input.length; index++) {
        let element = input[index].split(' : ');

        let product = {
            name: element[0],
            price: Number(element[1]),
        }
        catalogue.push(product);
    }

    catalogue.sort((a, b) => a.name.localeCompare(b.name));

    let currentLetter = '';
    for (const product of catalogue) {
        if (product.name.charAt(0).toUpperCase() === currentLetter) {
            console.log(`  ${product.name}: ${product.price}`);
        } else {
            currentLetter = product.name.charAt(0).toUpperCase();
            console.log(currentLetter);
            console.log(`  ${product.name}: ${product.price}`);
        }
    }
}

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);