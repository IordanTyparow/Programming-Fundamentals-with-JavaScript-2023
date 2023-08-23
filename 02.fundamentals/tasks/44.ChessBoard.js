function chessBoard(number) {

    let size = Number(number);
    let currentColor = 'black';
    let previousColor = '';

    console.log('<div class="chessboard">');

    for (let rows = 1; rows <= size; rows++) {
        console.log('  <div>');

        for (let colums = 1; colums <= size; colums++) {
            console.log(`   <span class="${currentColor}"></span>`);

            previousColor = currentColor;
            currentColor = previousColor === 'black' ? 'white' : 'black';
        }

        console.log(' </div>');

        if (size % 2 === 0) {
            previousColor = currentColor;
            currentColor = previousColor === 'black' ? 'white' : 'black';
        }
    }
    console.log(`</div>`);
}

chessBoard(3);