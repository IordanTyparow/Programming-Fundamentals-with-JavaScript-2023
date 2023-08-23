let companyAdministration = require('./10.CompanyAdministration');
let expect = require('chai').expect;

describe('CompanyAdministrationTesting...', () => {
    it('hiringEmployee', () => {
        expect(() => { companyAdministration.hiringEmployee('Jordan', 'Manager', 10) }).to.throw('We are not looking for workers for this position.');
        expect(companyAdministration.hiringEmployee('Jordan', 'Programmer', 10)).to.equal('Jordan was successfully hired for the position Programmer.');
        expect(companyAdministration.hiringEmployee('Jordan', 'Programmer', 3)).to.equal('Jordan was successfully hired for the position Programmer.');
        expect(companyAdministration.hiringEmployee('Jordan', 'Programmer', 1)).to.equal('Jordan is not approved for this position.');
    });

    it('calculateSalary', () => {
        expect(() => { companyAdministration.calculateSalary('str') }).to.throw('Invalid hours');
        expect(() => { companyAdministration.calculateSalary(-1) }).to.throw('Invalid hours');
        expect(companyAdministration.calculateSalary(10)).to.equal(150);
        expect(companyAdministration.calculateSalary(170)).to.equal(3550);
        expect(companyAdministration.calculateSalary(160)).to.equal(2400);
    });

    it('firedEmployee', () => {
        expect(() => { companyAdministration.firedEmployee('arr', 1) }).to.throw('Invalid input');
        expect(() => { companyAdministration.firedEmployee(['Petar'], 1.1) }).to.throw('Invalid input');
        expect(() => { companyAdministration.firedEmployee('str', 1.1) }).to.throw('Invalid input');
        expect(() => { companyAdministration.firedEmployee(['Petar'], -1) }).to.throw('Invalid input');
        expect(() => { companyAdministration.firedEmployee(['Petar'], 1) }).to.throw('Invalid input');
        expect(() => { companyAdministration.firedEmployee(['Petar'], 2) }).to.throw('Invalid input');
        expect(companyAdministration.firedEmployee(['Petar', 'Ivan', 'Georgi'], 1)).to.equal('Petar, Georgi');
        expect(companyAdministration.firedEmployee(['Petar', 'Ivan', 'Georgi'], 0)).to.equal('Ivan, Georgi');
        expect(() => { companyAdministration.firedEmployee([], 0) }).to.throw('Invalid input');
        expect(() => { companyAdministration.firedEmployee([], -1) }).to.throw('Invalid input');
    });
});