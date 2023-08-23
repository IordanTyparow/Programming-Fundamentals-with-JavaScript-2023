class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.capacity === 0) {
            throw new Error('Not enough space in the collection.');
        }
        this.capacity -= 1;
        this.books.push({ bookName, bookAuthor, payed: false });
        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }

    payBook(bookName) {
        let currentBook = this.books.find(x => x.bookName === bookName);

        if (currentBook === undefined) {
            throw new Error(`${bookName} is not in the collection.`);
        }

        if (currentBook.payed === true) {
            throw new Error(`${bookName} has already been paid.`);
        }

        currentBook.payed = true;
        return `${bookName} has been successfully paid.`;
    }

    removeBook(bookName) {
        let currentBook = this.books.find(x => x.bookName === bookName);

        if (currentBook === undefined) {
            throw new Error(`The book, you're looking for, is not found.`);
        }

        if (currentBook.payed === false) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }

        this.books = this.books.filter(x => x.bookName !== bookName);
        return `${bookName} remove from the collection.`;
    }

    getStatistics(bookAuthor) {

        if (!bookAuthor) {
            let result = [`The book collection has ${this.capacity} empty spots left.`];

            this.books.sort((a, b) => a.bookName.localeCompare(b.bookName))
                .map(x => result.push(`${x.bookName} == ${x.bookAuthor} - ${x.payed === true ? 'Has Paid' : 'Not Paid'}.`));

            return result.join('\n');
        } else {
            let result = [];

            this.books.filter(x => x.bookAuthor === bookAuthor)
                .map(x => result.push(`${x.bookName} == ${x.bookAuthor} - ${x.payed === true ? 'Has Paid' : 'Not Paid'}.`));

            if (result.length === 0) {
                throw new Error(`${bookAuthor} is not in the collection.`);
            }
            return result.join('');
        }

    }
}

const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());




