let isOddOrEven = require('./08.EvenOrOdd');
let { assert } = require('chai');

describe('testing isOddOrEven function', () => {
    // Correct input
    it('empty input', () => {
        assert(isOddOrEven(''), undefined);
    });
    it('Test with number', () => {
        assert(isOddOrEven(1) === undefined);
    });
    it('with even String', () => {
        assert(isOddOrEven('Hell') === 'even');
    });
    it('with odd String', () => {
        assert(isOddOrEven('Hello') === 'odd');
    });
    // Incorrect input
    it('different type ([])', () => {
        assert(isOddOrEven('[]'), undefined);
    });
    it('different type ({})', () => {
        assert(isOddOrEven('{}'), undefined);
    });
});