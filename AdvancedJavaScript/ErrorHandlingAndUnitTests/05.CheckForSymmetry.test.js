let isSymmetric = require('./05.CheckForSymmetry');
let expect = require('chai').expect;

describe('SymmetricArray', () => {
    it('should be a funcation', () => {
        expect(typeof isSymmetric).to.equal('function');
    });
    it('should return true for [1, 2, 3, 3, 2, 1]', () => {
        expect(isSymmetric([1, 2, 3, 3, 2, 1])).to.be.true;
    });
    it('should return false for [1, 2, 4, 3, 2, 1]', () => {
        expect(isSymmetric([1, 2, 4, 3, 2, 1])).to.be.false;
    });
    it('should return false NOT array for 1 2 3', () => {
        expect(isSymmetric(1,2,3)).to.be.false;
    });
    it('True for different types of input [5, "hi", {x: 3}, new Date(), {x: 3}, "hi", 5]', () => {
        expect(isSymmetric([5, "hi", {x: 3}, new Date(), {x: 3}, "hi", 5])).to.be.true;
    });
    it('False for different types of input [5, "hi", {x: 3}, new Date(), {a: 3}, "hi", 5]', () => {
        expect(isSymmetric([5, "hi", {x: 3}, new Date(), {a: 3}, "hi", 5])).to.be.false;
    });
    it('Test with 1 number', () => {
        expect(isSymmetric([1])).to.be.true;
    });
});