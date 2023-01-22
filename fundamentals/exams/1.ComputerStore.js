function computerStore(input) {

    let command = input.pop();
    let priceWithoutTaxes = 0;
    let taxes = 0;
    let finalPrice = 0;

    for (let index = 0; index < input.length; index++) {

        let currentMoney = Number(input[index]);

        if (currentMoney > 0) {
            priceWithoutTaxes += currentMoney;
        }

        if (currentMoney < 0) {
            console.log('Invalid price!');
        }
    }


    if (command === 'special') {
        if (priceWithoutTaxes >= 0) {
            taxes = priceWithoutTaxes * 0.20;
        }
    } else if (command === 'regular') {
        taxes = priceWithoutTaxes * 0.20;
    }

    finalPrice = priceWithoutTaxes + taxes;

    if (command === 'special') {
        finalPrice = finalPrice * 0.90;
    }

    if (finalPrice === 0) {
        console.log('Invalid order!');
        return;
    }

    console.log(`Congratulations you've just bought a new computer!`);
    console.log(`Price without taxes: ${priceWithoutTaxes.toFixed(2)}$`);
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log('-----------');
    console.log(`Total price: ${finalPrice.toFixed(2)}$`);
}

computerStore([

    'regular'
])
