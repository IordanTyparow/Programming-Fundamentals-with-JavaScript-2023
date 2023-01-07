function listOfProduct(products) {

    let sorted = products.sort();

    for (let index = 0; index < sorted.length; index++) {
        console.log(`${index + 1}.${sorted[index]}`);
    }
}

listOfProduct(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);