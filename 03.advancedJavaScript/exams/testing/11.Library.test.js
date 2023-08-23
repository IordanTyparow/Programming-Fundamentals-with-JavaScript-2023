let library = require('./11.Library');
let expect = require('chai').expect;

describe('LibraryTesting...', () => {
    it('calcPriceOfBook', () => {
        expect(() => { library.calcPriceOfBook([], 1.1) }).to.throw('Invalid input');
        expect(() => { library.calcPriceOfBook(1, 1) }).to.throw('Invalid input');
        expect(() => { library.calcPriceOfBook('str', 1.1) }).to.throw('Invalid input');
        expect(library.calcPriceOfBook('Wizard', 1980)).to.equal('Price of Wizard is 10.00');
        expect(library.calcPriceOfBook('Wizard', 1970)).to.equal('Price of Wizard is 10.00');
        expect(library.calcPriceOfBook('Wizard', 2000)).to.equal('Price of Wizard is 20.00');
    });

    it('findBook', () => {
        expect(() => { library.findBook([], 'Troy') }).to.throw('No books currently available');
        expect(library.findBook(['Troy', 'Wizard'], 'Troy')).to.equal('We found the book you want.');
        expect(library.findBook(['Troy', 'Wizard'], 'The Game Of Thrones')).to.equal('The book you are looking for is not here!');
    });

    it('arrangeTheBooks', () => {
        expect(() => { library.arrangeTheBooks(1.1) }).to.throw('Invalid input');
        expect(() => { library.arrangeTheBooks('str') }).to.throw('Invalid input');
        expect(() => { library.arrangeTheBooks(-1) }).to.throw('Invalid input');
        expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
        expect(library.arrangeTheBooks(35)).to.equal('Great job, the books are arranged.');
        expect(library.arrangeTheBooks(45)).to.equal('Insufficient space, more shelves need to be purchased.');
    });
});