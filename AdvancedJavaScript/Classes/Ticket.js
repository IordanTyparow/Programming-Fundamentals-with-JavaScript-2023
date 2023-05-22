function ticket(array, sorting) {

    let result = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    while (array.length > 0) {
        let tokens = array.shift().split('|');
        let destination = tokens[0];
        let price = Number(tokens[1]);
        let status = tokens[2];

        result.push(new Ticket(destination, price, status));
    }

    return result.sort((a, b) => {
        if (typeof a[sorting] === 'number') {
            return a[sorting] - b[sorting];
        } else {
            return a[sorting].localeCompare(b[sorting]);
        }
    });
}

ticket(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'price');