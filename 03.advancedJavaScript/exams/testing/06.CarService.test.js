let carService = require('./06.CarService');
let expect = require('chai').expect;

describe('CarServiceTesting...', () => {
    it('IsitExpensive', () => {
        expect(carService.isItExpensive('Engine')).to.equal('The issue with the car is more severe and it will cost more money');
        expect(carService.isItExpensive('Transmission')).to.equal('The issue with the car is more severe and it will cost more money');
        expect(carService.isItExpensive('another')).to.equal('The overall price will be a bit cheaper');
    });

    it('dicount', () => {
        expect(() => { carService.discount('1', '1') }).to.throw('Invalid input');
        expect(() => { carService.discount('1', 1) }).to.throw('Invalid input');
        expect(() => { carService.discount(1, '1') }).to.throw('Invalid input');
        expect(carService.discount(7, 100)).to.equal(`Discount applied! You saved 15$`);
        expect(carService.discount(10, 100)).to.equal(`Discount applied! You saved 30$`);
        expect(carService.discount(2, 100)).to.equal(`You cannot apply a discount`);
    });

    it('PartsToBuy', () => {
        expect(() => { carService.partsToBuy('arr', 'arr') }).to.throw('Invalid input');
        expect(() => { carService.partsToBuy('arr', []) }).to.throw('Invalid input');
        expect(() => { carService.partsToBuy([], 'arr') }).to.throw('Invalid input');
        expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], ["blowoff valve"])).to.equal(145);
        expect(carService.partsToBuy([], ["blowoff valve"])).to.equal(0);
    });
});