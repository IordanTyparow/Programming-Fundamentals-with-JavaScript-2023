let flowerShop = require('./09.FlowerShop');
let expect = require('chai').expect;

describe('FlowerShopTesting...', () => {
    describe('calcPriceOfFlowers', () => {
        // Incorrect validations
        it('Return Error with flower incorrect parameter', () => {
            expect(() => { flowerShop.calcPriceOfFlowers(1, 20, 20) }).to.throw('Invalid input!');
        });
        it('Return Error with price incorrect parameter', () => {
            expect(() => { flowerShop.calcPriceOfFlowers('str', 20.2, 20) }).to.throw('Invalid input!');
        });
        it('Return Error with quantity incorrect parameter', () => {
            expect(() => { flowerShop.calcPriceOfFlowers('str', 20, 20.2) }).to.throw('Invalid input!');
        });
        it('Return Error with both incorrect parameters', () => {
            expect(() => { flowerShop.calcPriceOfFlowers(1, 20.2, 20.2) }).to.throw('Invalid input!');
        });
        // Correct Validations
        it('Return correct output', () => {
            expect(flowerShop.calcPriceOfFlowers('rose', 20, 2)).to.equal('You need $40.00 to buy rose!');
        });
    });

    describe('checkFlowersAvailable', () => {
        // Correct Validations 
        it('Return correct output on the first place flower in array', () => {
            expect(flowerShop.checkFlowersAvailable('Rose', ["Rose", "Lily", "Orchid"])).to.equal('The Rose are available!');
        });
        it('Return correct output on the another place flower in array', () => {
            expect(flowerShop.checkFlowersAvailable('Orchid', ["Rose", "Lily", "Orchid"])).to.equal('The Orchid are available!');
        });
        it('Return correct message for missing flower', () => {
            expect(flowerShop.checkFlowersAvailable('violet', ["Rose", "Lily", "Orchid"])).to.equal('The violet are sold! You need to purchase more!');
        });
    });

    describe('sellFlowers', () => {
        // Incorrect Validations
        it('Return Error gardenArr is not arr', () => {
            expect(() => { flowerShop.sellFlowers('Incorrect', 1) }).to.throw('Invalid input!');
        });
        it('Return Error space is not integer', () => {
            expect(() => { flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 1.1) }).to.throw('Invalid input!');
        });
        it('Return Error with -negative space', () => {
            expect(() => { flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], -10) }).to.throw('Invalid input!');
        });
        it('Return Error with the space integer is more than gardenArr length', () => {
            expect(() => { flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 10) }).to.throw('Invalid input!');
        });
        it('Return Error with the space integer is equal than gardenArr length', () => {
            expect(() => { flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 3) }).to.throw('Invalid input!');
        });
        // Correct validations
        it('Return Correct output', () => {
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 2)).to.equal('Rose / Lily');
        });
    });
});