function storeProvison(store, delivery) {

    let resultObject = {};

    for (let index = 0; index < store.length; index += 2) {
        const currentProduct = store[index];
         
        resultObject[currentProduct] = Number(store[index + 1]);
    }

    for (let j = 0; j < delivery.length; j += 2) {
        const currentProduct = delivery[j];

        if (!resultObject.hasOwnProperty(currentProduct)) {
            resultObject[currentProduct] = 0;
        }

        resultObject[currentProduct] += Number(delivery[j + 1]);
    }

    for (const key in resultObject) {
        console.log(`${key} -> ${resultObject[key]}`);
    }
}

storeProvison([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);