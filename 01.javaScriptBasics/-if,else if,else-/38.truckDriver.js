function truckDriver(input) {

    let season = input[0];
    let kilometresFormouth = Number(input[1]);

    let totalPrice = 0;

    if (season === "Summer") {
        if (kilometresFormouth <= 5000) {
            totalPrice = kilometresFormouth * 0.90;
        } else if (kilometresFormouth > 5000 && kilometresFormouth <= 10000) {
            totalPrice = kilometresFormouth * 1.10;
        } else {
            totalPrice = kilometresFormouth * 1.45;
        }
    } else if (season === "Winter") {
        if (kilometresFormouth <= 5000) {
            totalPrice = kilometresFormouth * 1.05;
        } else if (kilometresFormouth > 5000 && kilometresFormouth <= 10000) {
            totalPrice = kilometresFormouth * 1.25;
        } else {
            totalPrice = kilometresFormouth * 1.45;
        }
    } else if (season === "Spring" || season === "Autumn") {
        if (kilometresFormouth <= 5000) {
            totalPrice = kilometresFormouth * 0.75;
        } else if (kilometresFormouth > 5000 && kilometresFormouth <= 10000) {
            totalPrice = kilometresFormouth * 0.95;
        } else {
            totalPrice = kilometresFormouth * 1.45;
        }
    }
    totalPrice = totalPrice * 4;
    totalPrice = totalPrice * 0.90;
    console.log(totalPrice.toFixed(2));
}

truckDriver(["Spring", "16942"]);