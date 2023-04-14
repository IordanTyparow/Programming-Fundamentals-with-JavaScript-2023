function colorize() {
    let tableElements = document.querySelectorAll('tr');

    let toArray = Array.from(tableElements);

    toArray.forEach((x, i) => {
        if (i % 2 !== 0) {
            x.style.backgroundColor = 'Teal';
        }
    });    
}