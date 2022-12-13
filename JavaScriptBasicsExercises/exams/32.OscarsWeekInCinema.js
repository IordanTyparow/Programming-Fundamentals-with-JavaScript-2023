function OscarsWeekInCinema(input) {

    let film = input[0];
    let type = input[1];
    let countTickets = Number(input[2]);

    let totalPrice = 0;
    switch (film) {
        case "A Star Is Born":
            if (type == "normal") {
                totalPrice = countTickets * 7.50;
            } else if (type == "luxury") {
                totalPrice = countTickets * 10.50;
            } else {
                totalPrice = countTickets * 13.50;
            }
            break;
        case "Bohemian Rhapsody":
            if (type == "normal") {
                totalPrice = countTickets * 7.35;
            } else if (type == "luxury") {
                totalPrice = countTickets * 9.45;
            } else {
                totalPrice = countTickets * 12.75;
            }
            break;
        case "Green Book":
            if (type == "normal") {
                totalPrice = countTickets * 8.15;
            } else if (type == "luxury") {
                totalPrice = countTickets * 10.25;
            } else {
                totalPrice = countTickets * 13.95;
            }
            break;
        case "The Favourite":
            if (type == "normal") {
                totalPrice = countTickets * 8.75;
            } else if (type == "luxury") {
                totalPrice = countTickets * 11.55;
            } else {
                totalPrice = countTickets * 13.95;
            }
            break;
    }
    console.log(`${film} -> ${totalPrice.toFixed(2)} lv.`);
}
OscarsWeekInCinema(["Green Book", "normal", "63"])
