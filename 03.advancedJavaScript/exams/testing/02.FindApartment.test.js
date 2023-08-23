let findNewApartment = require('./02.FindApartment');
let expect = require('chai').expect;

describe('findNewApartmentTesting...', () => {

    it('IsGoodLocation', () => {
        expect(() => { findNewApartment.isGoodLocation(1, true) }).to.throw('Invalid input!');
        expect(() => { findNewApartment.isGoodLocation('Sofia', []) }).to.throw('Invalid input!');
        expect(() => { findNewApartment.isGoodLocation(1, []) }).to.throw('Invalid input!');
        expect(findNewApartment.isGoodLocation('Petrich', true)).to.equal('This location is not suitable for you.');
        expect(findNewApartment.isGoodLocation('Sofia', true)).to.equal('You can go on home tour!');
        expect(findNewApartment.isGoodLocation('Sofia', false)).to.equal('There is no public transport in area.');
    });

    it('IsLargeEnough', () => {
        expect(() => { findNewApartment.isLargeEnough([], '40') }).to.throw('Invalid input!');
        expect(() => { findNewApartment.isLargeEnough('array', 40) }).to.throw('Invalid input!');
        expect(() => { findNewApartment.isLargeEnough([], 40), '' }).to.throw('Invalid input!');
        expect(findNewApartment.isLargeEnough([10, 20, 50, 100], 40)).to.equal('50, 100');
        expect(findNewApartment.isLargeEnough([40], 40)).to.equal('40');
        expect(findNewApartment.isLargeEnough([10, 30, 20], 40)).to.equal('');
    });

    it('IsItAffordable', () => {
        expect(() => { findNewApartment.isItAffordable('str', 'str') }).to.throw('Invalid input!');
        expect(() => { findNewApartment.isItAffordable(1000, 'str') }).to.throw('Invalid input!');
        expect(() => { findNewApartment.isItAffordable('str', 1000) }).to.throw('Invalid input!');
        expect(() => { findNewApartment.isItAffordable(0, 1000) }).to.throw('Invalid input!');
        expect(() => { findNewApartment.isItAffordable(1000, 0) }).to.throw('Invalid input!');
        expect(findNewApartment.isItAffordable(500, 1000)).to.equal('You can afford this home!');
        expect(findNewApartment.isItAffordable(1050, 1000)).to.equal('You don\'t have enough money for this house!');
    });
});