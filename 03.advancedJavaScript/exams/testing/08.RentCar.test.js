const rentCar = require('./08.RentCar');
const expect = require('chai').expect;

describe('RentCarTesting...', () => {
    describe('SearchCar', () => {
        //Incorrect testing
        it('Should return error with incorrect first parameter', () => {
            expect(() => { rentCar.searchCar('incorrect', 'car') }).to.throw('Invalid input!');
        });
        it('Should return error with incorrect second parameter', () => {
            expect(() => { rentCar.searchCar([], 10) }).to.throw('Invalid input!');
        });
        it('Should return error with incorrect both parameters', () => {
            expect(() => { rentCar.searchCar('incorrect', 10) }).to.throw('Invalid input!');
        });
        it('With empty shop Array', () => {
            expect(() => { rentCar.searchCar([], 'Audi') }).to.throw('There are no such models in the catalog!');
        });
        it('With missing car in shop Array', () => {
            expect(() => { rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'Golf') }).to.throw('There are no such models in the catalog!');
        });
        //Correct testing
        it('Should return correct message with correct input', () => {
            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'Audi')).to.equal('There is 1 car of model Audi in the catalog!');
        });
        it('Should return correct message with one car in array', () => {
            expect(rentCar.searchCar(["Audi"], 'Audi')).to.equal('There is 1 car of model Audi in the catalog!');
        });
    });

    describe('calculatePriceOfCar', () => {
        //Incorrect testing
        it('Should return error with first parameter incorrect input', () => {
            expect(() => { rentCar.calculatePriceOfCar(1, 1) }).to.throw('Invalid input!');
        });
        it('Should return error with second parameter incorrect input', () => {
            expect(() => { rentCar.calculatePriceOfCar('BMW', 1.2) }).to.throw('Invalid input!');
        });
        it('Should return error with both parameters incorrect input', () => {
            expect(() => { rentCar.calculatePriceOfCar(1, 1.2) }).to.throw('Invalid input!');
        });
        it('Return error with missing car in catalogue', () => {
            expect(() => { rentCar.calculatePriceOfCar('GOLD', 5) }).to.throw('No such model in the catalog!');
        });
        //Correct Tesing
        it('Return correct message', () => {
            expect(rentCar.calculatePriceOfCar('BMW', 2)).to.equal('You choose BMW and it will cost $90!');
        })
    });

    describe('checkBudget', () => {
        //Incorrect testing
        it('Return error with incorrect costPerDay', () => {
            expect(() => { rentCar.checkBudget(1.1, 1, 1) }).to.throw('Invalid input!');
        });
        it('Return error with incorrect days', () => {
            expect(() => { rentCar.checkBudget(1, 1.1, 1) }).to.throw('Invalid input!');
        });
        it('Return error with incorrect budget', () => {
            expect(() => { rentCar.checkBudget(1, 1, 1.1) }).to.throw('Invalid input!');
        });
        it('Return error with incorrect input', () => {
            expect(() => { rentCar.checkBudget(1.1, 1.1, 1.1) }).to.throw('Invalid input!');
        });
        it('Return error with first parameter is a string', () => {
            expect(() => { rentCar.checkBudget('1', 1, 1) }).to.throw('Invalid input!');
        });
        it('Return error with second parameter is a string', () => {
            expect(() => { rentCar.checkBudget(1, '1', 1) }).to.throw('Invalid input!');
        });
        it('Return error with third parameter is a string', () => {
            expect(() => { rentCar.checkBudget(1, 1, '1') }).to.throw('Invalid input!');
        });
        it('Return error with all parameters is a strings', () => {
            expect(() => { rentCar.checkBudget('1', '1', '1') }).to.throw('Invalid input!');
        });
        //Correct Testing
        it('Return correct message', () => {
            expect(rentCar.checkBudget(5, 2, 20)).to.equal('You rent a car!');
        });
        it('Return correct message with equal cost and budget', () => {
            expect(rentCar.checkBudget(5, 2, 10)).to.equal('You rent a car!');
        });
        it('Return incorrect message with bigger cost', () => {
            expect(rentCar.checkBudget(10, 3, 20)).to.equal('You need a bigger budget!');
        });
    });
});