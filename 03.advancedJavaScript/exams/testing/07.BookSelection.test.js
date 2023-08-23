let bookSelection = require('./07.BookSelection');
let expect = require('chai').expect;

describe('BookSelectionTesting...', () => {
    it('isGenreSuitable', () => {
        expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equal('Books with Thriller genre are not suitable for kids at 12 age');
        expect(bookSelection.isGenreSuitable('Horror', 10)).to.equal('Books with Horror genre are not suitable for kids at 10 age');
        expect(bookSelection.isGenreSuitable('Horror', 12)).to.equal('Books with Horror genre are not suitable for kids at 12 age');
        expect(bookSelection.isGenreSuitable('Another', 12)).to.equal('Those books are suitable');
        expect(bookSelection.isGenreSuitable('Thriller', 15)).to.equal('Those books are suitable');
    });

    it('IsItAffordable', () => {
        expect(() => { bookSelection.isItAffordable('1', '1') }).to.throw('Invalid input');
        expect(() => { bookSelection.isItAffordable('1', 1) }).to.throw('Invalid input');
        expect(() => { bookSelection.isItAffordable(1, '1') }).to.throw('Invalid input');
        expect(bookSelection.isItAffordable(10, 20)).to.equal('Book bought. You have 10$ left');
        expect(bookSelection.isItAffordable(30, 20)).to.equal('You don\'t have enough money');
    });

    it('SuitableTitles', () => {
        expect(() => { bookSelection.suitableTitles('2', []) }).to.throw('Invalid input');
        expect(() => { bookSelection.suitableTitles('arr', 'str') }).to.throw('Invalid input');
        expect(() => { bookSelection.suitableTitles([], 1) }).to.throw('Invalid input');
        let expectedReturnWithAnotherGender = bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], 'another');
        let expectedReturn = bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], 'Thriller');
        expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], 'Thriller'), expectedReturn);
        expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], 'another'), expectedReturnWithAnotherGender);
        expect(bookSelection.suitableTitles([], 'Thriller'), expectedReturnWithAnotherGender);
    });
});