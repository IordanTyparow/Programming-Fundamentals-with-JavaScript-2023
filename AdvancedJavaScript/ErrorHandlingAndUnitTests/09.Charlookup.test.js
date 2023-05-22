let lookupChar = require('./09.Charlookup');
let { assert } = require('chai');

describe('Testing lookupChar', () => {
    it('Return char at index', () => {
        assert(lookupChar('Love', 1) === 'o')
    });
    it('Return char at index', () => {
        assert(lookupChar('L', 0) === 'L');
    });
    it('Index over the string length', () => {
        assert(lookupChar('Love', 10) === 'Incorrect index');
    });
    it('negative string index', () => {
        assert(lookupChar('Love', -10) === 'Incorrect index');
    });
    it('Empty string as input', () => {
        assert(lookupChar('', 0) === 'Incorrect index');
    });
    it('Return undefined if first parameter is not a string', () => {
        assert(lookupChar(100, 10) === undefined);
    });
    it('Return undefined with string parameter and decimal number', () => {
        assert(lookupChar('Hello', 10.5) === undefined);
    });
    it('Return undefined with wrong parameters type', () => {
        assert(lookupChar(10, '10.5') === undefined);
    });
});