class Garden {
    constructor(spaceAvaible) {
        this.spaceAvaible = spaceAvaible;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (spaceRequired > this.spaceAvaible) {
            throw new Error('Not enough space in the garden.');
        }

        this.plants.push({ plantName, spaceRequired, ripe: false, quantity: 0 });
        this.spaceAvaible -= spaceRequired;

        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantName, quantity) {
        let currentPlant = this.plants.find(x => x.plantName === plantName);

        if (currentPlant === undefined) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if (currentPlant.ripe) {
            throw new Error(`The ${plantName} is already ripe.`);
        }

        if (quantity <= 0) {
            throw new Error(`The quantity cannot be zero or negative.`);
        }

        currentPlant.ripe = true;
        currentPlant.quantity += quantity;

        if (quantity === 1) {
            return `${quantity} ${plantName} has successfully ripened.`
        } else if (quantity > 1) {
            return `${quantity} ${plantName}s have successfully ripened.`;
        }
    }

    harvestPlant(plantName) {
        let currentPlant = this.plants.find(x => x.plantName === plantName);

        if (currentPlant === undefined) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if (currentPlant.ripe === false) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }

        this.plants = this.plants.filter(p => p !== currentPlant);
        this.storage.push({ plantName, quantity: currentPlant.quantity });
        this.spaceAvaible += currentPlant.spaceRequired;

        return `The ${plantName} has been successfully harvested.`;
    }

    generateReport() {
        let result = [];
        let plantsInGarden = [];
        let plantsInStorage = [];

        result.push(`The garden has ${this.spaceAvaible} free space left.\n`);

        let sorted = this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName) || a.plantName - b.plantName);
        sorted.forEach(x => { plantsInGarden.push(Object.values(x)[0]) });

        result.push('Plants in the garden: ' + plantsInGarden.join(', ') + '\n');

        if (this.storage.length === 0) {
            result.push('Plants in storage: The storage is empty.');
        } else {
            plantsInStorage.push(this.storage
                .map(plant => `${plant.plantName} (${plant.quantity})`)
                .join(", "));

            result.push(`Plants in storage: ${plantsInStorage}`);
        }

        return result.join('');
    }
}
const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());


