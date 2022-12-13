function books(input) {

    let favoriteBook = input[0];

    let index = 1;
    let booksiFount = false;
    let nextBookName = input[index];

    while (nextBookName !== "No More Books") {
        if (nextBookName === favoriteBook) {
            booksiFount = true;
            break;
        }
        index++;
        nextBookName = input[index];
    }
    if (booksiFount === false) {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${index - 1} books.`);
    } else {
        console.log(`You checked ${index - 1} books and found it.`);
    }
}

books(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])

