function needForSpeed(input) {

    let startCars = Number(input.shift());
    let carList = {};

    for (let i = 0; i < startCars; i++) {
        let [car, mileage, fuel] = input[i].split('|');

        carList[car] = {
            mileage: Number(mileage),
            fuel: Number(fuel),
        }
    }

    for (let i = 0; i < input.length; i++) {
        let [command, car, distance, fuel] = input[i].split(' : ');
        fuel = Number(fuel);
        distance = Number(distance);

        if (command === 'Stop') {
            for (const [car, product] of Object.entries(carList)) {
                console.log(`${car} -> Mileage: ${carList[car].mileage} kms, Fuel in the tank: ${carList[car].fuel} lt.`);
            }
            break;
        }

        if (command === 'Drive') {
            if (carList[car].fuel < fuel) {
                console.log('Not enough fuel to make that ride');
            }
            if (carList[car].fuel > fuel) {
                carList[car].mileage += distance;
                carList[car].fuel -= fuel;
                console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
            }
            if (carList[car].mileage >= 100000) {
                console.log(`Time to sell the ${car}!`);
                delete carList[car];
            }
        } else if (command === 'Refuel') {
            let maxFielTank = 75;
            let fuelCommand = Number(input[i].split(' : ')[2]);
            let actualFuelAmount = maxFielTank - carList[car].fuel;

            carList[car].fuel += fuelCommand;

            if (carList[car].fuel > maxFielTank) {
                console.log(`${car} refueled with ${actualFuelAmount} liters`);
                carList[car].fuel = maxFielTank;
            } else {
                console.log(`${car} refueled with ${fuelCommand} liters`);
            }
            debugger
        } else if (command === 'Revert') {
            carList[car].mileage -= distance;
            if (carList[car].mileage > 10000) {
                console.log(`${car} mileage decreased by ${distance} kilometers`);
            } else {
                carList[car].mileage = 10000;
            }
        }
    }
}

needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
]
);
console.log(`---------------------------------`);
needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]
)