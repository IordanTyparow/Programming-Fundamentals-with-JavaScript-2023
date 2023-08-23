let movieTheater = require('./05.MovieTheater');
let expect = require('chai').expect;

describe('MovieTheaterTesting...', () => {
    it('ageRestrictions', () => {
        expect(movieTheater.ageRestrictions('G')).to.equal('All ages admitted to watch the movie');
        expect(movieTheater.ageRestrictions('PG')).to.equal('Parental guidance suggested! Some material may not be suitable for pre-teenagers');
        expect(movieTheater.ageRestrictions('R')).to.equal('Restricted! Under 17 requires accompanying parent or adult guardian');
        expect(movieTheater.ageRestrictions('NC-17')).to.equal('No one under 17 admitted to watch the movie');
        expect(movieTheater.ageRestrictions('Invalid')).to.equal('There are no age restrictions for this movie');
        expect(movieTheater.ageRestrictions('')).to.equal('There are no age restrictions for this movie');
    });

    it('MoneySpent', () => {
        expect(() => { movieTheater.moneySpent('1', [], []) }).to.throw('Invalid input');
        expect(() => { movieTheater.moneySpent(1, 'array', []) }).to.throw('Invalid input');
        expect(() => { movieTheater.moneySpent(1, [], 'array') }).to.throw('Invalid input');
        expect(() => { movieTheater.moneySpent('1', 'array', 'array') }).to.throw('Invalid input');
        expect(movieTheater.moneySpent(2, ['Nachos'], ['Soda'])).to.equal('The total cost for the purchase is 38.50');
        expect(movieTheater.moneySpent(2, ['Nachos'], ['Water'])).to.equal('The total cost for the purchase is 37.50');
        expect(movieTheater.moneySpent(2, ['Popcorn'], ['Soda'])).to.equal('The total cost for the purchase is 37.00');
        expect(movieTheater.moneySpent(2, ['Popcorn'], ['Water'])).to.equal('The total cost for the purchase is 36.00');
        expect(movieTheater.moneySpent(4, ['Nachos'], ['Soda'])).to.equal('The total cost for the purchase with applied discount is 54.80');
        expect(movieTheater.moneySpent(4, ['Popcorn'], ['Water'])).to.equal('The total cost for the purchase with applied discount is 52.80');

    });

    it('reservation', () => {
        expect(() => { movieTheater.reservation('array', 1) }).to.throw('Invalid input');
        expect(() => { movieTheater.reservation([], 'str') }).to.throw('Invalid input');
        expect(() => { movieTheater.reservation('array', 'str') }).to.throw('Invalid input');
        expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }], 5)).to.equal(2);
    });
})