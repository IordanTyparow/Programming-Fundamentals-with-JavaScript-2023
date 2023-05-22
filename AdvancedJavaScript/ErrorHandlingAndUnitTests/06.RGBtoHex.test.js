let rgbToHexColor = require('./06.RGBtoHex');
let expect = require('chai').expect;

describe('Testing rgbToHexColor', () => {
    it('Return undefuned with no parametres', () => {
        expect(rgbToHexColor()).to.be.undefined;
    });
    it('Test with zeros', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    });
    describe('Should be undefined', () => {
        it('Test with -negative Number', () => {
            expect(rgbToHexColor(-15, 14, 13)).to.be.undefined;
        });
        it('Test with -negative Number', () => {
            expect(rgbToHexColor(15, -14, 13)).to.be.undefined;
        });
        it('Test with -negative Number', () => {
            expect(rgbToHexColor(15, 14, -13)).to.be.undefined;
        });
    });
    describe('Invalid input with: String', () => {
        it('Should be undefined', () => {
            expect(rgbToHexColor('255', 23, 14)).to.be.undefined;
        });
    });
    describe('Invalid input with fractional number', () => {
        it('Should be undefined', () => {
            expect(rgbToHexColor(3.13, 23, 14)).to.be.undefined;
        });
    });
    describe('General test', () => {
        it('Should return #100C0D for (16, 12, 13)', () => {
            expect(rgbToHexColor(16, 12, 13)).to.equal('#100C0D');
        });
    });
    describe('Test with highest possible input (255, 255, 255)', () => {
        it('Should return #FFFFFF', () => {
            expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
        });
    });
    describe('Invalid input out of range', () => {
        it('Should return undefined', () => {
            expect(rgbToHexColor(266, 12, 13)).to.be.undefined;
        });
    });
});