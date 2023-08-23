function express(input) {

    let kilograms = Number(input[0]);
    let type = input[1];
    let distance = Number(input[2]);

    let transport = 0;
    let totalPrice = 0;

    let kg = 0;
    let km = 0;
    let discount = 0;
    let totalDiscount = 0;

    if (type === "standard") {
        if (kilograms < 1) {
            transport = 0.03;
            totalPrice = distance * transport;
        } else if (kilograms >= 1 && kilograms < 10) {
            transport = 0.05;
            totalPrice = distance * transport;
        } else if (kilograms >= 10 && kilograms < 40) {
            transport = 0.10;
            totalPrice = distance * transport;
        } else if (kilograms >= 40 && kilograms < 90) {
            transport = 0.15;
            totalPrice = distance * transport;
        } else if (kilograms >= 90 && kilograms < 150) {
            transport = 0.20;
            totalPrice = distance * transport;
        }
    } else if (type === "express") {
        if (kilograms < 1) {
            transport = 0.03;
            totalPrice = distance * transport;
            kg = 0.80 * transport;
            km = kilograms * kg;
            discount = distance * km;
            totalPrice = totalPrice + discount;
        } else if (kilograms >= 1 && kilograms < 10) {
            transport = 0.05;
            totalPrice = distance * transport;
            kg = 0.40 * transport;
            km = kilograms * kg;
            discount = distance * km;
            totalPrice = totalPrice + discount;
        } else if (kilograms >= 10 && kilograms < 40) {
            transport = 0.10;
            totalPrice = distance * transport;
            kg = 0.05 * transport;
            km = kilograms * kg;
            discount = distance * km;
            totalPrice = totalPrice + discount;
        } else if (kilograms >= 40 && kilograms < 90) {
            transport = 0.15;
            totalPrice = distance * transport;
            kg = 0.02 * transport;
            km = kilograms * kg;
            discount = distance * km;
            totalPrice = totalPrice + discount;
        } else if (kilograms >= 90 && kilograms < 150) {
            transport = 0.20;
            totalPrice = distance * transport;
            kg = 0.01 * transport;
            km = kilograms * kg;
            discount = distance * km;
            totalPrice = totalPrice + discount;
        }
    }
    
    console.log(`The delivery of your shipment with weight of ${kilograms.toFixed(3)} kg. would cost ${totalPrice.toFixed(2)} lv.`);
}

express(["87",
    "express",
    "130"]);
