let motorcycleRider = require('./03.MotorcycleRider');
let expect = require('chai').expect;

describe('MotorCycleRiderTesting...', () => {

    it('licenseRestriction', () => {
        expect(motorcycleRider.licenseRestriction('AM')).to.equal('Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.');
        expect(motorcycleRider.licenseRestriction('A1')).to.equal('Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.');
        expect(motorcycleRider.licenseRestriction('A2')).to.equal('Motorcycles with maximum power of 35KW. and the minimum age is 18.');
        expect(motorcycleRider.licenseRestriction('A')).to.equal('No motorcycle restrictions, and the minimum age is 24.');
        expect(() => { motorcycleRider.licenseRestriction('C') }).to.throw('Invalid Information!');
    });

    it('motorcycleShowroom', () => {
        expect(() => { motorcycleRider.motorcycleShowroom('array', 'array') }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.motorcycleShowroom('array', 1) }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.motorcycleShowroom('array', 1) }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.motorcycleShowroom([], 1) }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.motorcycleShowroom([10], 45) }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.motorcycleShowroom([], 45) }).to.throw('Invalid Information!');
        expect(motorcycleRider.motorcycleShowroom([100, 200, 300], 100)).to.equal('There are 1 available motorcycles matching your criteria!');
        expect(motorcycleRider.motorcycleShowroom([300], 100)).to.equal('There are 0 available motorcycles matching your criteria!');
    });

    it('otherSpendings', () => {
        expect(() => { motorcycleRider.otherSpendings('arr', [], true) }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.otherSpendings([], 'arr', true) }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.otherSpendings('arr', 'arr', true) }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.otherSpendings([], [], 'str') }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.otherSpendings('arr', 'arr', 'str') }).to.throw('Invalid Information!');
        expect(motorcycleRider.otherSpendings(['helmet'], ['engine oil'], false)).to.equal('You spend $270.00 for equipment and consumables!');
        expect(motorcycleRider.otherSpendings(['helmet'], ['oil filter'], false)).to.equal('You spend $230.00 for equipment and consumables!');
        expect(motorcycleRider.otherSpendings(['jacked'], ['engine oil'], false)).to.equal('You spend $370.00 for equipment and consumables!');
        expect(motorcycleRider.otherSpendings(['jacked'], ['oil filter'], false)).to.equal('You spend $330.00 for equipment and consumables!');
        expect(motorcycleRider.otherSpendings(['helmet'], ['engine oil'], true)).to.equal('You spend $243.00 for equipment and consumables with 10% discount!');
        expect(motorcycleRider.otherSpendings(['helmet'], ['oil filter'], true)).to.equal('You spend $207.00 for equipment and consumables with 10% discount!');
        expect(motorcycleRider.otherSpendings(['jacked'], ['engine oil'], true)).to.equal('You spend $333.00 for equipment and consumables with 10% discount!');
        expect(motorcycleRider.otherSpendings(['jacked'], ['oil filter'], true)).to.equal('You spend $297.00 for equipment and consumables with 10% discount!');
    });
});