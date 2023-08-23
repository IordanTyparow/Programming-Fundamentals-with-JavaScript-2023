let weddingDay = require('./weddingDay');
let expect = require('chai').expect;

describe('weddingDay', () => {
    it('pickVenue', () => {
        expect(() => { weddingDay.pickVenue('1', 1, 'Varnaa') }).to.throw('Invalid Information!');
        expect(() => { weddingDay.pickVenue(1, '1', 'Varnaa') }).to.throw('Invalid Information!');
        expect(() => { weddingDay.pickVenue(1, 1, '') }).to.throw('Invalid Information!');
        expect(() => { weddingDay.pickVenue(1, 1, 'Kurnalovo') }).to.throw('The location of this venue is not in the correct area!');
        expect(weddingDay.pickVenue(150, 120, 'Varna')).to.equal('This venue meets the requirements, with capacity of 150 guests and 120$ cover.');
        expect(weddingDay.pickVenue(149, 121, 'Varna')).to.equal('This venue does not meet your requirements!');
    });

    it('otherSpendings', () => {
        expect(() => { weddingDay.otherSpendings('not array', [], true) }).to.throw('Invalid Information!');
        expect(() => { weddingDay.otherSpendings([], 'not array', false) }).to.throw('Invalid Information!');
        expect(() => { weddingDay.otherSpendings([], [], 'not boolean') }).to.throw('Invalid Information!');
        expect(weddingDay.otherSpendings(['flowers'], ['pictures'], true)).to.equal(`You spend 1020$ for wedding decoration and photography with 15% discount!`);
        expect(weddingDay.otherSpendings(['Fabric drapes and curtains'], ['video'], true)).to.equal(`You spend 1445$ for wedding decoration and photography with 15% discount!`);
        expect(weddingDay.otherSpendings(['flowers'], ['pictures'], false)).to.equal('You spend 1200$ for wedding decoration and photography!');
        expect(weddingDay.otherSpendings(['Fabric drapes and curtains'], ['video'], false)).to.equal('You spend 1700$ for wedding decoration and photography!');
    });

    it('tableDistribution', () => {
        expect(() => { weddingDay.tableDistribution('zero', 'zero') }).to.throw('Invalid Information!');
        expect(() => { weddingDay.tableDistribution(0, 0) }).to.throw('Invalid Information!');
        expect(() => { weddingDay.tableDistribution(-1, -1) }).to.throw('Invalid Information!');
        expect(weddingDay.tableDistribution(1, 1)).to.equal('There is only 1 people on every table, you can join some tables.');
        expect(weddingDay.tableDistribution(70, 10)).to.equal('You have 10 tables with 7 guests on table.');
    });
});