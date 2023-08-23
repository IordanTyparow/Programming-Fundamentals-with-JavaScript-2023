let mathEnforcer = require('./10.MathEnforcer');
let { assert } = require('chai');

describe('Testing mathenforcer', () => {
    describe('addFive', () => {
        // Incorrect input
        it('Return undefined with string', () => {
            assert(mathEnforcer.addFive('Hello') === undefined)
        });
        // correct input
        it('Return sum with number', () => {
            assert(mathEnforcer.addFive(5) === 10);
        });
        it('Return sum with decimal number', () => {
            assert(mathEnforcer.addFive(5.5) === 10.5);
        });
        it('Test with -negative number', () => {
            assert(mathEnforcer.addFive(-6) === -1);
        });
    });
    describe('subtractTen', () => {
        // Incorrect input
        it('Return undefined with string', () => {
            assert(mathEnforcer.subtractTen('Hello') === undefined)
        });
        // correct input
        it('Return sum with number', () => {
            assert(mathEnforcer.subtractTen(20) === 10);
        });
        it('Return sum with decimal number', () => {
            assert(mathEnforcer.subtractTen(20.5) === 10.5);
        });
        it('Test with -negative number', () => {
            assert(mathEnforcer.subtractTen(-6) === -16);
        });
    });
    describe('sum', () => {
        // Incorrect input
        it('Incorrect first parameter', () => {
            assert(mathEnforcer.sum('str', 2) === undefined);
        });
        it('Incorrect second parameter', () => {
            assert(mathEnforcer.sum(2, 'str') === undefined);
        });
        it('Incorrect parameters', () => {
            assert(mathEnforcer.sum('str', 'str') === undefined);
        });
        // Correct input
        it('Return sum with correct input', () => {
            assert(mathEnforcer.sum(4, 5) === 9);
        });
        it('Return sum with decimal number', () => {
            assert(mathEnforcer.sum(5.5, 5.5) === 11);
        });
        it('Test with -negative number', () => {
            assert(mathEnforcer.sum(-6, -6) === -12);
        });
    });
});