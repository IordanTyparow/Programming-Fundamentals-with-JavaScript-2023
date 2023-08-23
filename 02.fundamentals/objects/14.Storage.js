function storage(input) {

    let storage = new Map();

    input.forEach(line => {
        let [product, price] = line.split(' ');

        if (storage.has(product)) {
            let prod = storage.get(product);
            storage.set(product, Number(price) + Number(prod));
        } else {
            storage.set(product, Number(price));
        }
    });

    for (const keys of storage) {
        console.log(`${keys[0]} -> ${keys[1]}`);
    }
}

storage(['apple 50',
'apple 61',
'coffee 115',
'coffee 40'])
