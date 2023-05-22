let createCalculator = require('./07.AddAndSubtract').createCalculator;
let expect = require('chai').expect;

describe('Add Subtract', () => {
    let calc;

    beforeEach(function () {
        calc = createCalculator();
    });

    it('Should be a funcation', () => {
        expect(typeof calc).to.equal('object');
    });
    it('Zero value when Created', () => {
        expect(calc.get()).to.equal(0);
    });
    it('Check Add function', () => {
        calc.add(3);
        calc.add(4);
        expect(calc.get()).to.equal(7);
    });
    it('Check subtrack function', () => {
        calc.subtract(5);
        calc.subtract(4);
        expect(calc.get()).to.equal(-9);
    });
    it('Check add function with fractions', () => {
        calc.add(3.14);
        calc.add(4.14);
        expect(calc.get()).to.equal(7.279999999999999);
    });
    it('Check subtract function with fractions', () => {
        calc.add(-3.14);
        calc.add(-4.14);
        expect(calc.get()).to.equal(-7.279999999999999);
    });
    it('Check incorrect input for add', () => {
        calc.add('pesho');
        expect(calc.get()).to.be.NaN;
    });
    it('Check incorrect input for Substract', () => {
        calc.subtract('pesho');
        expect(calc.get()).to.be.NaN;
    });
    it('Check empty input', () => {
        calc.subtract();
        expect(calc.get()).to.be.NaN;
    });
    it('Check both functions (add/subtract) with strings', () => {
        calc.add('pesho');
        calc.subtract('gosho');
        expect(calc.get()).to.be.NaN;
    });
    it('Should work with string (add function)', () => {
        calc.add('7');
        expect(calc.get()).to.equal(7);
    });
});