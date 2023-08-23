class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if (model === '' || horsepower < 0 || price < 0 || mileage < 0) {
            throw new Error('Invalid input!');
        }

        this.availableCars.push({ model, horsepower, price, mileage });
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }

    sellCar(model, desiredMileage) {
        let car = this.availableCars.find(x => x.model === model);

        if (car === undefined) {
            throw new Error(`${model} was not found!`);
        }

        let discount = 0;

        if (car.mileage <= desiredMileage) {
            discount = 0;
        } else {
            let mileageDifference = car.mileage - desiredMileage;
            if (mileageDifference <= 40000) {
                discount = 0.05;
            } else if (mileageDifference > 40000) {
                discount = 0.1;
            } 
        }

        let soldPrice = car.price - (car.price * discount);

        this.availableCars = this.availableCars.filter(x => x.model !== model);
        this.soldCars.push({ model, horsepower: car.horsepower, price: soldPrice });
        this.totalIncome += soldPrice;

        return `${model} was sold for ${soldPrice.toFixed(2)}$`;
    }

    currentCar() {
        if (this.availableCars.length === 0) {
            return `There are no available cars`;
        }

        let result = ['-Available cars:'];
        this.availableCars.map(x => result.push(`---${x.model} - ${x.horsepower} HP - ${x.mileage.toFixed(2)} km - ${x.price.toFixed(2)}$`));

        return result.join('\n');
    }

    salesReport(criteria) {

        if (criteria === 'horsepower') {
            this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
        } else if (criteria === 'model') {
            this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
        } else {
            throw new Error('Invalid criteria!');
        }

        let result = [`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`,
        `-${this.soldCars.length} cars sold:`];

        this.soldCars.map(x => result.push(`---${x.model} - ${x.horsepower} HP - ${x.price.toFixed(2)}$`));

        return result.join('\n');
    }
}

let dealership = new CarDealership('SoftAuto');

console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
console.log(dealership.addCar('Audi A3', 120, 4900, 240000));
console.log(dealership.sellCar('Toyota Corolla', 230000));
console.log(dealership.sellCar('Mercedes C63', 110000));
console.log(dealership.salesReport('horsepower'));




