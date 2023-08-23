let chooseYourCar = require('./04.ChooseYourCar');
let expect = require('chai').expect;

describe('ChooseYourCarTesting...', () => {
    it('choosingType', () => {
        expect(() => { chooseYourCar.choosingType('Sedan', 'red', 1899) }).to.throw('Invalid Year!');
        expect(() => { chooseYourCar.choosingType('Sedan', 'red', 2023) }).to.throw('Invalid Year!');
        expect(() => { chooseYourCar.choosingType('combi', 'red', 2020) }).to.throw('This type of car is not what you are looking for.');
        expect(chooseYourCar.choosingType('Sedan', 'red', 2010)).to.equal('This red Sedan meets the requirements, that you have.');
        expect(chooseYourCar.choosingType('Sedan', 'red', 1999)).to.equal('This Sedan is too old for you, especially with that red color.');
    });

    it('brandName', () => {
        expect(() => { chooseYourCar.brandName('Mazda', 1) }).to.throw('Invalid Information!');
        expect(() => { chooseYourCar.brandName(['Mazda'], 'a') }).to.throw('Invalid Information!');
        expect(() => { chooseYourCar.brandName(['Mazda'], 3.1) }).to.throw('Invalid Information!');
        expect(() => { chooseYourCar.brandName(['Mazda'], 1) }).to.throw('Invalid Information!');
        expect(() => { chooseYourCar.brandName(['Mazda'], -1) }).to.throw('Invalid Information!');
        expect(chooseYourCar.brandName(['BMW', 'Mercedes', 'Toyota'], 1)).to.equal('BMW, Toyota');
    });

    it('carFuelConsumption', () => {
        expect(() => { chooseYourCar.carFuelConsumption('5', '5') }).to.throw('Invalid Information!');
        expect(() => { chooseYourCar.carFuelConsumption('5', 5) }).to.throw('Invalid Information!');
        expect(() => { chooseYourCar.carFuelConsumption(5, '5') }).to.throw('Invalid Information!');
        expect(() => { chooseYourCar.carFuelConsumption(0, 5) }).to.throw('Invalid Information!');
        expect(() => { chooseYourCar.carFuelConsumption(5, -1) }).to.throw('Invalid Information!');
        expect(chooseYourCar.carFuelConsumption(50, 5)).to.equal('The car burns too much fuel - 10.00 liters!');
        expect(chooseYourCar.carFuelConsumption(50, 3)).to.equal('The car is efficient enough, it burns 6.00 liters/100 km.');
        expect(chooseYourCar.carFuelConsumption(50, 10)).to.equal('The car burns too much fuel - 20.00 liters!'); 
        expect(chooseYourCar.carFuelConsumption(100, 7)).to.equal('The car is efficient enough, it burns 7.00 liters/100 km.');  
    });
});

