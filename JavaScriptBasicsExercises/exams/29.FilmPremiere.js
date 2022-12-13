function filmPremiere(input) {

    let film = input[0];
    let packetFilm = input[1];
    let countBilets = Number(input[2]);

    let totalPrice = 0;
    let discount = 0;

    if (film === "John Wick") {
        if (packetFilm === "Drink") {
            totalPrice = countBilets * 12;
        } else if (packetFilm === "Popcorn") {
            totalPrice = countBilets * 15;
        } else if (packetFilm === "Menu") {
            totalPrice = countBilets * 19;
        }
    } else if (film === "Star Wars") {
        if (packetFilm === "Drink") {
            totalPrice = countBilets * 18;
            if (countBilets >= 4) {
                totalPrice = totalPrice * 0.70;
            }
        } else if (packetFilm === "Popcorn") {
            totalPrice = countBilets * 25;
            if (countBilets >= 4) {
                totalPrice = totalPrice * 0.70;
            }
        } else if (packetFilm === "Menu") {
            totalPrice = countBilets * 30;
            if (countBilets >= 4) {
                totalPrice = totalPrice * 0.70;
            }
        }
    } else if (film === "Jumanji") {
        if (packetFilm === "Drink") {
            totalPrice = countBilets * 9;
            if (countBilets >= 2) {
                totalPrice = totalPrice * 0.85;
            }
        } else if (packetFilm === "Popcorn") {
            totalPrice = countBilets * 11;
            if (countBilets >= 2) {
                totalPrice = totalPrice * 0.85;
            }
        } else if (packetFilm === "Menu") {
            totalPrice = countBilets * 14;
            if (countBilets <= 2) {
                totalPrice = totalPrice * 0.85;
            }
        }
    }
   
    console.log(`Your bill is ${totalPrice.toFixed(2)} leva.`);
}

filmPremiere(["Jumanji",
    "Menu",
    "3"]);
