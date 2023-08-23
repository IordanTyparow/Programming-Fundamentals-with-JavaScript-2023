function garage(input) {

    let garage = {};

    for (const el of input) {
        let [garageNumber, property] = el.split(' - ');

        if (!garage.hasOwnProperty(garageNumber)) {
            garage[garageNumber] = [];
        }
        garage[garageNumber].push(property);
    }

    let output = '';
    Object.entries(garage).sort((a,b) => a[0] - b[0]).forEach(([garage, cars]) => {
        output += `Garage № ${garage}\n`;
        for (let currCar of cars) {
            currCar = currCar.replace(/: /g, ' - ');
          output += `--- ${currCar}\n`;
       }
    });
    console.log(output);
}

garage(['1 - color: blue, fuel type: diesel',
        '1 - color: red, manufacture: Audi',
        '2 - fuel type: petrol',
        '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);